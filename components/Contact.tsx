import { ContactForm } from "./ContactForm";
import { contact } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="py-section">
      <div className="mx-auto max-w-[1280px] px-gut">
        <span className="u-label text-lime">{contact.eyebrow}</span>
        <h2 className="mt-3.5 mb-4.5 text-headline">
          {contact.heading[0]}
          <br />
          {contact.heading[1]}
        </h2>

        <div className="mt-9 grid items-start gap-[clamp(26px,4vw,64px)] lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="max-w-[46ch] text-lead text-lead/[1.5]">{contact.body}</p>

            <ul className="mt-6 flex list-none flex-col p-0">
              {contact.promises.map((p, i) => (
                <li
                  key={p.n}
                  className={`flex items-start gap-3 border-t-2 border-field py-3.5 ${
                    i === contact.promises.length - 1 ? "border-b-2" : ""
                  }`}
                >
                  <b className="min-w-[22px] shrink-0 font-display text-[1.15rem] font-black leading-tight text-lime">
                    {p.n}
                  </b>
                  <p className="text-[0.92rem] leading-[1.5] text-muted">
                    <em className="not-italic font-semibold text-paper">{p.strong}</em>
                    {p.rest}
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
