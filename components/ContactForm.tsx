"use client";

import { useEffect, useRef, useState } from "react";
import { Button, Arrow } from "./Button";
import { contact, site } from "@/lib/content";
import { shown } from "@/lib/evidence";

type Status = "idle" | "sending" | "sent" | "handed-off";

const REQUEST_TIMEOUT_MS = 15_000;

// Underlined rather than boxed. A full 1rem so iOS does not force-zoom a
// focused field, which throws the whole form sideways on a phone.
const field =
  "w-full min-w-0 border-0 border-b border-paper/28 bg-transparent px-0 pt-2 pb-2.5 font-sans text-body font-light text-paper " +
  "transition-colors duration-300 focus:border-gold focus:outline-none";

function Field({
  id,
  label,
  children,
  full = false,
  optional = false,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  full?: boolean;
  /** Half these fields are optional; without a mark the only way to find out is to be rejected on submit. */
  optional?: boolean;
}) {
  return (
    <div className={`group/field flex min-w-0 flex-col gap-2 ${full ? "sm:col-span-2" : ""}`}>
      <label htmlFor={id} className="u-label text-muted transition-colors duration-300 group-focus-within/field:text-gold">
        {label}
        {optional && <span className="ml-1.5 tracking-[0.1em] text-dim">Optional</span>}
      </label>
      {children}
    </div>
  );
}

/** The arrow is drawn markup rather than a data-URI background, so it takes its colour from the token like everything else. */
function Select({ id, options, placeholder }: { id: string; options: readonly string[]; placeholder?: string }) {
  return (
    <div className="relative">
      <select
        id={id}
        name={id}
        defaultValue={placeholder ? "" : options[0]}
        className={`${field} cursor-pointer appearance-none pr-6 [&>option]:bg-ink`}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <svg
        viewBox="0 0 12 8"
        aria-hidden="true"
        className="pointer-events-none absolute right-1 top-1/2 h-2 w-3 -translate-y-1/2 fill-none stroke-gold stroke-[1.5]"
      >
        <path d="M1 1.5l5 5 5-5" />
      </svg>
    </div>
  );
}

/**
 * Frame shared by the form and by every terminal state, so the panel never
 * changes shape. It sits on its own near-opaque ground: a photograph behind
 * input text is never a fair read.
 */
function Panel({ heading, aside, children }: { heading: string; aside?: string; children: React.ReactNode }) {
  return (
    <div className="border border-paper/12 bg-ink-2/90 backdrop-blur-[14px]">
      <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-paper/12 px-[clamp(24px,3.4vw,44px)] py-4">
        <span className="u-label text-paper">{heading}</span>
        {aside && <span className="u-label text-gold">{aside}</span>}
      </div>
      {children}
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [draft, setDraft] = useState<Record<string, string> | null>(null);
  const outcomeRef = useRef<HTMLDivElement>(null);
  const alertRef = useRef<HTMLDivElement>(null);

  // The reply-time promise is only made once the client has committed to one.
  const replyWindow = shown(contact.replyPromise);
  // Without a real inbox there is nothing to hand off to, so the fallback stays off
  // rather than opening a mail client addressed to an address that does not exist.
  const inbox = shown(site.email);

  // Replacing the form drops focus to <body>, and nothing announces the change.
  // Move focus onto the outcome so it is both spoken and reachable.
  useEffect(() => {
    if (status === "sent" || status === "handed-off") outcomeRef.current?.focus();
  }, [status]);

  // A send that failed is the most important thing on the panel: move focus to it
  // so it is spoken, and so the recovery controls are one tab away.
  useEffect(() => {
    if (error) alertRef.current?.focus();
  }, [error]);

  function mailtoHref(data: Record<string, string>) {
    const subject = `Website enquiry — ${data.topic} — ${data.company}`;
    const body = [
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Enquiry: ${data.topic}`,
      `Revenue (last year): ${data.revenue || "—"}`,
      `Operating area: ${data.area || "—"}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "—"}`,
      "",
      "Message:",
      data.message || "—",
    ].join("\r\n");
    return `mailto:${inbox}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");
    setError(null);

    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        return;
      }

      // 4xx is our own API talking — keep what they typed and relay what it said.
      if (res.status === 422 || res.status === 429 || res.status === 413) {
        const payload = await res.json().catch(() => null);
        setError(payload?.error ?? contact.errors.invalid);
        setStatus("idle");
        return;
      }

      // Anything else (including 503 "not configured") is a delivery failure.
      setDraft(data);
      setError(inbox ? contact.errors.server : contact.errors.unreachable);
      setStatus("idle");
    } catch {
      // Aborted, offline, or DNS/network failure.
      const reason = navigator.onLine === false ? contact.errors.offline : contact.errors.server;
      setDraft(data);
      setError(inbox ? reason : contact.errors.unreachable);
      setStatus("idle");
    } finally {
      window.clearTimeout(timer);
    }
  }

  if (status === "sent" || status === "handed-off") {
    return (
      <Panel heading={status === "sent" ? "Message sent" : "Handed to your email app"}>
        <div
          ref={outcomeRef}
          role="status"
          tabIndex={-1}
          className="px-[clamp(24px,3.4vw,44px)] py-14 focus:outline-none focus-visible:outline-2 focus-visible:outline-gold"
        >
          <p className="max-w-[36ch] text-title font-light text-gold">
            {status === "sent"
              ? replyWindow
                ? contact.confirmation.sourced(replyWindow)
                : contact.confirmation.plain()
              : contact.confirmation.mailto}
          </p>
        </div>
      </Panel>
    );
  }

  return (
    <Panel heading="Enquiry" aside={replyWindow ? contact.replyBadge(replyWindow) : undefined}>
      <form onSubmit={onSubmit} noValidate className="grid gap-x-7 gap-y-[26px] px-[clamp(24px,3.4vw,44px)] pt-[clamp(24px,3vw,36px)] pb-[clamp(24px,3.4vw,44px)] sm:grid-cols-2">
        <Field id="name" label="Name">
          <input id="name" name="name" type="text" autoComplete="name" maxLength={120} required placeholder="First and last" className={field} />
        </Field>
        <Field id="company" label="Company">
          <input id="company" name="company" type="text" autoComplete="organization" maxLength={160} required placeholder="Operating name" className={field} />
        </Field>

        <Field id="email" label="Email">
          <input id="email" name="email" type="email" autoComplete="email" maxLength={200} required placeholder="name@company.ca" className={field} />
        </Field>
        <Field id="phone" label="Phone" optional>
          <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={60} placeholder="e.g. 780 555 0142" className={field} />
        </Field>

        <Field id="topic" label="Regarding">
          <Select id="topic" options={contact.topics} />
        </Field>
        <Field id="revenue" label="Last year's revenue" optional>
          <Select id="revenue" options={contact.revenueBands} placeholder="Select a range" />
        </Field>

        <Field id="area" label="Operating area" full optional>
          <input id="area" name="area" type="text" maxLength={160} placeholder="e.g. Montney, Grande Prairie" className={field} />
        </Field>

        <Field id="message" label="Message" full optional>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={5000}
            placeholder="What you're trying to fix, who you're losing bids to, what you've already tried."
            className={`${field} min-h-[84px] resize-y`}
          />
        </Field>

        {/* honeypot — bots fill it, people never see it */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 opacity-0" />

        {error && (
          <div
            ref={alertRef}
            role="alert"
            tabIndex={-1}
            className="flex flex-col gap-2.5 border-l-2 border-garnet bg-ink py-3 pr-4 pl-4 focus:outline-none sm:col-span-2"
          >
            <p className="text-body-sm text-garnet">{error}</p>
            {/* True whether or not there is an inbox to fall back to, and the first
                thing anyone wants to know after a failed send. */}
            <p className="text-body-sm text-muted">
              Nothing you typed has been lost.
              {inbox && (
                <>
                  {" "}
                  You can also{" "}
                  {draft ? (
                    <a
                      href={mailtoHref(draft)}
                      onClick={() => setStatus("handed-off")}
                      className="text-gold underline underline-offset-2"
                    >
                      open it in your email app
                    </a>
                  ) : (
                    <a href={`mailto:${inbox}`} className="text-gold underline underline-offset-2">
                      write to {inbox}
                    </a>
                  )}
                  .
                </>
              )}
            </p>
          </div>
        )}

        <div className="mt-1.5 flex flex-wrap items-center gap-6 sm:col-span-2">
          <Button type="submit" disabled={status === "sending"} className="disabled:cursor-not-allowed disabled:opacity-60">
            {status === "sending" ? "Sending…" : error ? "Send again" : "Send enquiry"}
            {status !== "sending" && <Arrow />}
          </Button>
        </div>
      </form>
    </Panel>
  );
}
