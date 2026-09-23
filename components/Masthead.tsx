"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";
import { ButtonLink } from "./Button";
import { nav } from "@/lib/content";

/**
 * Clear over the hero photograph, solid once the hero is mostly behind it.
 *
 * While clear, a scrim fades down from the top edge: the links have to hold
 * their contrast over the brightest sky any photograph might put there, and the
 * scrim is what guarantees it rather than the photo happening to be dark.
 */
export function Masthead() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const update = () => setSolid(window.scrollY > window.innerHeight * 0.6);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500 ease-enter ${
        solid ? "border-line bg-ink/92 backdrop-blur-[10px]" : "border-transparent"
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 -bottom-10 -z-10 bg-linear-to-b from-ink/70 to-ink/0 transition-opacity duration-500 ${
          solid ? "opacity-0" : "opacity-100"
        }`}
      />
      <div className="mx-auto flex h-masthead max-w-[1320px] items-center gap-10 px-gut">
        <a href="#top" className="text-inherit no-underline" aria-label="Derrick Digital, back to top">
          <Wordmark />
        </a>

        <nav className="ml-auto hidden gap-[34px] md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative u-label font-semibold text-paper no-underline [text-shadow:0_1px_12px_rgb(10_13_11/0.6)] transition-colors duration-300 hover:text-gold"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-400 ease-enter group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <ButtonLink href="#contact" size="compact" className="ml-auto md:ml-0">
          Work with us
        </ButtonLink>
      </div>
    </header>
  );
}
