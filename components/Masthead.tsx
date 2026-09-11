import { Wordmark } from "./Wordmark";
import { ButtonLink } from "./Button";
import { nav } from "@/lib/content";

export function Masthead() {
  return (
    <header className="sticky top-0 z-50 bg-ink border-b-[3px] border-lime">
      <div className="mx-auto max-w-[1280px] px-gut h-[70px] flex items-center gap-5">
        <a href="#top" className="flex items-center gap-2.5 no-underline text-inherit" aria-label="Derrick Digital, back to top">
          <Wordmark />
        </a>

        <nav className="ml-auto hidden md:flex gap-[22px]" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center py-2 u-label-sm text-muted no-underline transition-colors duration-200 hover:text-lime"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink href="#contact" size="compact" className="ml-auto md:ml-0">
          Get in touch
        </ButtonLink>
      </div>
    </header>
  );
}
