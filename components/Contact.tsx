import { ContactForm } from "./ContactForm";
import { ParallaxPhoto, Reveal } from "./motion";
import { contact, photos } from "@/lib/content";
import { shown } from "@/lib/evidence";

export function Contact() {
  // Promise 01 names a response time the client has not committed to. Until it
  // is confirmed the promise still holds — it just stops naming a deadline.
  const replyWindow = shown(contact.replyPromise);

  return (
    <section id="contact" data-ground="photo" className="relative overflow-hidden py-[clamp(100px,12vw,170px)]">
      <ParallaxPhoto src={photos.contact.src} strength={0.2} className="inset-x-0 -inset-y-[18%]" imageClassName="object-[center_70%]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-ink)_0%,rgb(10_13_11/0.15)_30%,rgb(10_13_11/0.3)_60%,rgb(10_13_11/0.85)_100%),linear-gradient(90deg,rgb(10_13_11/0.55)_0%,rgb(10_13_11/0)_60%)]"
      />

      <div className="relative z-10 mx-auto grid max-w-[1320px] items-start gap-[clamp(40px,6vw,96px)] px-gut lg:grid-cols-[5fr_6fr]">
        <Reveal>
          <h2 className="max-w-[12ch] text-headline">
            {contact.heading[0]} <span className="font-medium">{contact.heading[1]}</span>
          </h2>
          <p className="mt-7 max-w-[40ch] text-lead text-soft">{contact.body}</p>

          <ul className="mt-9 flex max-w-[44ch] list-none flex-col border-t border-paper/20 p-0">
            {contact.promises.map((p) => (
              <li key={p.n} className="flex items-start gap-4 border-b border-paper/20 py-4">
                <span className="u-label pt-1 text-gold">{p.n}</span>
                <p className="text-body-sm text-soft">
                  <em className="not-italic font-medium text-paper">{p.strong}</em>
                  {replyWindow ? p.sourced(replyWindow) : p.plain()}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
