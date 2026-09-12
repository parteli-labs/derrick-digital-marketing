import { DerrickMark } from "./DerrickMark";
import { site, footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-lime py-[clamp(44px,6vw,72px)]">
      <div className="mx-auto max-w-[1280px] px-gut">
        <div className="grid gap-[clamp(24px,4vw,48px)] pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,0.8fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <DerrickMark className="w-[26px] h-[34px] block shrink-0" />
              <span className="font-display font-black uppercase leading-[0.82] text-[1.2rem]">
                <span className="block">Derrick</span>
                <span className="block text-lime">Digital</span>
              </span>
            </div>
            <p className="mt-4 max-w-[38ch] text-[0.92rem] leading-[1.5] text-muted">
              Brand growth for the oil patch. Built in Alberta, for companies that sell inside a
              service radius.
            </p>
          </div>

          <div>
            <h5 className="mb-3.5 u-label-sm text-dim">Services</h5>
            <ul className="flex list-none flex-col gap-2.5 p-0">
              {footerLinks.services.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[0.88rem] text-muted no-underline transition-colors duration-200 hover:text-lime">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-3.5 u-label-sm text-dim">Who we work with</h5>
            <ul className="flex list-none flex-col gap-2.5 p-0">
              {footerLinks.segments.map((s) => (
                <li key={s}>
                  <a href="#contact" className="text-[0.88rem] text-muted no-underline transition-colors duration-200 hover:text-lime">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-3.5 u-label-sm text-dim">Contact</h5>
            <ul className="flex list-none flex-col gap-2.5 p-0">
              <li>
                <a href={`mailto:${site.email}`} className="text-[0.88rem] text-muted no-underline transition-colors duration-200 hover:text-lime">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`} className="text-[0.88rem] text-muted no-underline transition-colors duration-200 hover:text-lime">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t-2 border-field pt-[22px]">
          <span className="u-label-sm text-dim">
            © {new Date().getFullYear()} {site.name} — {site.region}
          </span>
          <span className="u-label-sm text-dim">53°32′N 113°30′W</span>
        </div>
      </div>
    </footer>
  );
}
