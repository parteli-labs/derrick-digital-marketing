import { ContactForm } from "./ContactForm";
import { contact } from "@/lib/content";
import { shown } from "@/lib/evidence";

export function Contact() {
  // Promise 01 names a response time the client has not committed to. Until it
  // is confirmed the promise still holds — it just stops naming a deadline.
  const replyWindow = shown(contact.replyPromise);

  return (
    <section id="contact" data-ground="ink" className="py-section">
      <div className="mx-auto max-w-[1280px] px-gut">
        <div className="grid items-start gap-[clamp(26px,4vw,64px)] lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="mb-8 text-headline">
              {contact.heading[0]}{" "}
              <span className="u-outline">{contact.heading[1]}</span>
            </h2>
            <p className="max-w-[46ch] text-lead">{contact.body}</p>

            <ul className="mt-6 flex list-none flex-col p-0">
              {contact.promises.map((p, i) => (
                <li
                  key={p.n}
                  className={`flex items-start gap-3 border-t-2 border-field py-3.5 ${
                    i === contact.promises.length - 1 ? "border-b-2" : ""
                  }`}
                >
                  <b className="min-w-[22px] shrink-0 font-display text-lead font-black leading-tight text-lime">
                    {p.n}
                  </b>
                  <p className="text-body-md leading-[1.5] text-muted">
                    <em className="not-italic font-semibold text-paper">{p.strong}</em>
                    {replyWindow ? p.sourced(replyWindow) : p.plain()}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
