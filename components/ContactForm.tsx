"use client";

import { useRef, useState } from "react";
import { Button } from "./Button";
import { contact, site } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "mailto";

const field =
  "w-full border-2 border-field bg-ink px-[11px] py-2.5 font-body text-[0.94rem] text-paper " +
  "transition-colors duration-200 focus:border-lime focus:outline-none";

function Field({
  id,
  label,
  children,
  full = false,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
      <label htmlFor={id} className="font-cond text-label-sm font-bold uppercase tracking-[0.15em] text-lime">
        {label}
      </label>
      {children}
    </div>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  /** Last resort if the API is unreachable — the form must never go dead. */
  function handoffToMailClient(data: Record<string, string>) {
    const subject = `Website enquiry — ${data.topic} — ${data.company}`;
    const body = [
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Enquiry: ${data.topic}`,
      `Operating area: ${data.area || "—"}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "—"}`,
      "",
      "Message:",
      data.message || "—",
    ].join("\r\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("mailto");
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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`${res.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      handoffToMailClient(data);
    }
  }

  if (status === "sent" || status === "mailto") {
    return (
      <div className="border-[3px] border-paper bg-ink-2">
        <div className="flex flex-wrap items-center justify-between gap-2.5 bg-paper px-3.5 py-2.5 text-ink">
          <span className="u-label-sm font-bold">
            {status === "sent" ? "Message sent" : "Handed to your email app"}
          </span>
        </div>
        <div className="px-4 py-10 text-center">
          <p className="mx-auto max-w-[42ch] text-[0.92rem] leading-[1.6] text-muted">
            {status === "sent"
              ? "Thanks — that's landed. We'll come back to you inside one business day, from a real person."
              : "Your email app should be open with the message ready to send. Hit send and it'll reach us the same way."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="border-[3px] border-paper bg-ink-2">
      <div className="flex flex-wrap items-center justify-between gap-2.5 bg-paper px-3.5 py-2.5 text-ink">
        <span className="u-label-sm font-bold">Send us a note</span>
        <span className="u-label-sm font-bold">Reply in 1 business day</span>
      </div>

      <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-[15px] px-4 pt-[18px] pb-5 sm:grid-cols-2">
        <Field id="name" label="Name">
          <input id="name" name="name" type="text" autoComplete="name" required placeholder="First and last" className={field} />
        </Field>
        <Field id="company" label="Company">
          <input id="company" name="company" type="text" autoComplete="organization" required placeholder="Operating name" className={field} />
        </Field>

        <Field id="topic" label="What's this about?">
          <select
            id="topic"
            name="topic"
            defaultValue={contact.topics[0]}
            className={`${field} appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2210%22%20height%3D%227%22%3E%3Cpath%20d%3D%22M0%200h10L5%207z%22%20fill%3D%22%23C6F24E%22/%3E%3C/svg%3E')] bg-[length:10px_7px] bg-[right_9px_center] bg-no-repeat pr-[26px]`}
          >
            {contact.topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field id="area" label="Operating area">
          <input id="area" name="area" type="text" placeholder="e.g. Montney, Grande Prairie" className={field} />
        </Field>

        <Field id="email" label="Email">
          <input id="email" name="email" type="email" autoComplete="email" required placeholder="name@company.ca" className={field} />
        </Field>
        <Field id="phone" label="Phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(780) 555-0142" className={field} />
        </Field>

        <Field id="message" label="Message" full>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="What you're trying to fix, who you're losing bids to, what you've already tried."
            className={`${field} min-h-[84px] resize-y leading-[1.5]`}
          />
        </Field>

        {/* honeypot — bots fill it, people never see it */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 opacity-0" />

        <div className="flex flex-wrap items-center gap-[15px] border-t-2 border-field pt-2 sm:col-span-2">
          <Button type="submit" disabled={status === "sending"} className="disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send message →"}
          </Button>
          <span className="max-w-[32ch] u-label-sm text-dim">
            {error ?? "Goes straight to a person. No list, no drip sequence."}
          </span>
        </div>
      </form>
    </div>
  );
}
