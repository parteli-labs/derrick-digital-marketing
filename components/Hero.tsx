import { ButtonLink, Arrow } from "./Button";
import { ParallaxPhoto } from "./motion";
import { hero, photos } from "@/lib/content";

/**
 * Full-viewport photograph with the headline set low on it. The entrance plays
 * once on load: the photograph settles, the two headline lines rise out of
 * their own clipping boxes, the rule draws, and the copy fades up last.
 */
export function Hero() {
  return (
    <section id="top" data-ground="photo" className="relative flex min-h-svh items-end overflow-hidden">
      {/* The rig stands at 64% across the frame. A phone crops to it; a wide screen
          keeps the horizon and the lit sky behind the headline's right edge. */}
      <ParallaxPhoto
        src={photos.hero.src}
        strength={0.18}
        preload
        className="inset-x-0 top-[-6%] bottom-0 u-intro-settle"
        imageClassName="object-[64%_50%] md:object-[64%_72%]"
      />
      {/* Darkest behind the copy: left to right on a wide screen, bottom to top
          on a phone, where the copy sits over the middle of the frame. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(0deg,var(--color-ink)_0%,rgb(10_13_11/0.82)_50%,rgb(10_13_11/0.25)_100%)] md:bg-[linear-gradient(90deg,rgb(10_13_11/0.92)_0%,rgb(10_13_11/0.62)_45%,rgb(10_13_11/0.1)_100%),linear-gradient(0deg,var(--color-ink)_0%,rgb(10_13_11/0)_40%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-gut pt-[calc(var(--spacing-masthead)+48px)] pb-[clamp(72px,8vw,112px)]">
        {/* Each line is its own clipping box, so it rises from behind an edge
            rather than fading in from nowhere. */}
        <h1 className="text-display">
          <span className="block overflow-hidden pb-[0.06em]">
            <span className="block u-intro-rise">Bring your brand</span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <span className="block font-medium u-intro-rise [--intro-delay:0.14s]">into production.</span>
          </span>
        </h1>

        <div className="relative mt-[clamp(36px,4vw,56px)] grid gap-6 pt-[26px] md:grid-cols-[5fr_4fr]">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-paper/30 u-intro-draw" />
          <p className="max-w-[40ch] text-lead text-soft u-intro-fade">
            {hero.body} <strong className="font-medium text-paper">{hero.bodyStrong}</strong>
          </p>
          <div className="flex flex-wrap items-start gap-[30px] u-intro-fade [--intro-delay:0.95s]">
            <ButtonLink href="#contact">
              Work with us <Arrow />
            </ButtonLink>
            <ButtonLink href="#shift" variant="text">
              What changed <Arrow />
            </ButtonLink>
          </div>
        </div>
      </div>

      <a
        href="#shift"
        aria-label="Scroll to the next section"
        className="absolute bottom-[22px] left-1/2 z-10 grid size-11 -translate-x-1/2 place-items-center text-paper opacity-70 transition-opacity duration-300 hover:opacity-100 u-intro-fade [--intro-delay:1.6s]"
      >
        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-[18px] u-cue" aria-hidden="true">
          <path d="M3 6.5l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
