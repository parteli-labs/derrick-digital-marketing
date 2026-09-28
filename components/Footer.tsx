import { Wordmark } from "./Wordmark";
import { site, footerLinks } from "@/lib/content";
import { shown } from "@/lib/evidence";

export function Footer() {
  // Invented contact details are withheld rather than published. If neither
  // survives, the column is dropped instead of standing empty.
  const email = shown(site.email);
  const phone = shown(site.phone);

  return (
    <footer className="border-t border-line py-[clamp(56px,7vw,96px)]">
      <div className="mx-auto max-w-[1320px] px-gut">
        <div className="grid gap-[clamp(24px,4vw,48px)] pb-10 lg:grid-cols-[1.1fr_2.2fr]">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-[38ch] text-body-sm text-muted">
              Brand growth for the oil patch. Built in Alberta, by people who
              have worked it.
            </p>
          </div>

          {/* Column count follows the content: withholding the contact column must
              not leave a gap where it used to be. */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-[clamp(24px,4vw,48px)]">
            <div>
              <h2 className="mb-4 u-label text-dim">Services</h2>
              <ul className="flex list-none flex-col p-0">
                {footerLinks.services.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="block py-1.5 text-body-sm text-muted no-underline transition-colors duration-300 hover:text-paper"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 u-label text-dim">Who we work with</h2>
              <ul className="flex list-none flex-col p-0">
                {footerLinks.segments.map((s) => (
                  <li key={s}>
                    <a
                      href="#contact"
                      className="block py-1.5 text-body-sm text-muted no-underline transition-colors duration-300 hover:text-paper"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {(email || phone) && (
              <div>
                <h2 className="mb-4 u-label text-dim">Contact</h2>
                <ul className="flex list-none flex-col p-0">
                  {email && (
                    <li>
                      <a
                        href={`mailto:${email}`}
                        className="block py-1.5 text-body-sm text-muted no-underline transition-colors duration-300 hover:text-paper"
                      >
                        {email}
                      </a>
                    </li>
                  )}
                  {phone && (
                    <li>
                      <a
                        href={`tel:${phone.href}`}
                        className="block py-1.5 text-body-sm text-muted no-underline transition-colors duration-300 hover:text-paper"
                      >
                        {phone.display}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <span className="u-label text-dim">
            © {new Date().getFullYear()} {site.name}
          </span>
          <span className="u-label text-dim">53°32′N 113°30′W</span>
        </div>
      </div>
    </footer>
  );
}
