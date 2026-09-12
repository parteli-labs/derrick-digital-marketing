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

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
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
