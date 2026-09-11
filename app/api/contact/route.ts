import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  company?: string;
  topic?: string;
  area?: string;
  email?: string;
  phone?: string;
  message?: string;
  /** honeypot — must be empty */
  website?: string;
};

const clean = (v: unknown, max = 2000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

/** Generous next to a real enquiry, small next to an abusive one. */
const MAX_BODY_BYTES = 16_000;
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };

/**
 * Best-effort throttle. Serverless instances do not share this map, so it is a
 * speed bump rather than a guarantee — enough to stop a naive script from
 * draining the Resend quota and burying the client's inbox. Move it to a shared
 * store if the form ever draws real abuse.
 */
const hits = new Map<string, number[]>();

function recentHits(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  if (recent.length) hits.set(ip, recent);
  else hits.delete(ip);
  return recent;
}

const rateLimited = (ip: string) => recentHits(ip).length >= RATE_LIMIT.max;

/**
 * Only a message that actually goes out counts against the limit. Charging for
 * rejected requests would lock someone out for ten minutes over five typos in
 * their own email address.
 */
function recordSend(ip: string) {
  hits.set(ip, [...recentHits(ip), Date.now()]);
  // Opportunistic sweep so the map cannot grow without bound on a warm instance.
  if (hits.size > 5000) {
    const now = Date.now();
    for (const [k, v] of hits) if (v.every((t) => now - t >= RATE_LIMIT.windowMs)) hits.delete(k);
  }
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Several messages have come from this connection already. Try again in a few minutes." },
      { status: 429, headers: { "Retry-After": String(RATE_LIMIT.windowMs / 1000) } },
    );
  }

  // Clamp before parsing: the per-field caps below only apply once JSON.parse has
  // already walked whatever was sent.
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "That message is too long to send." }, { status: 413 });
  }

  let body: Payload;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  // A bot filled the hidden field. Accept silently so it doesn't retry.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = clean(body.name, 120);
  const company = clean(body.company, 160);
  const email = clean(body.email, 200);
  const topic = clean(body.topic, 120) || "Not specified";
  const area = clean(body.area, 160);
  const phone = clean(body.phone, 60);
  const message = clean(body.message, 5000);

  if (!name || !company || !isEmail(email)) {
    return NextResponse.json(
      { error: "Name, company and a valid email are required." },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  // Not configured yet — tell the client so it can hand off to the mail client.
  // This is why the form still works on a fresh deploy with no env vars set.
  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { error: "Mail delivery is not configured.", fallback: "mailto" },
      { status: 503 },
    );
  }

  const lines = [
    `Name:           ${name}`,
    `Company:        ${company}`,
    `Enquiry:        ${topic}`,
    `Operating area: ${area || "—"}`,
    `Email:          ${email}`,
    `Phone:          ${phone || "—"}`,
    "",
    "Message:",
    message || "—",
  ].join("\n");

  try {
    recordSend(ip);
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Website enquiry — ${topic} — ${company}`,
      text: lines,
    });

    if (error) {
      console.error("[contact] resend error:", error);
      return NextResponse.json({ error: "Could not send." }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json({ error: "Could not send." }, { status: 500 });
  }
}
