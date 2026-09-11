import { ShortlistField } from "./ShortlistField";
import { ButtonLink } from "./Button";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" data-ground="ink" className="relative overflow-hidden pt-[clamp(34px,5vw,64px)]">
      <div className="relative z-10 mx-auto max-w-[1280px] px-gut py-12">
        {/* Two lines, always. Each line is its own non-wrapping block rather than
            a <br/> inside a measure, so no viewport can break it into three. The
            Display step is sized so the longer line clears the illustration. */}
        <h1 className="text-display">
          <span className="block whitespace-nowrap">Get your name</span>
          <span className="block whitespace-nowrap">
            <span className="u-outline">on the shortlist.</span>
          </span>
        </h1>

        <div className="pt-8 pb-[clamp(44px,6vw,72px)]">
          <p className="max-w-[46ch] text-lead">
            {hero.body}{" "}
            <strong className="font-semibold text-paper">{hero.bodyStrong}</strong>
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="#contact">Get in touch →</ButtonLink>
            <ButtonLink href="#shift" variant="ghost">
              What changed
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Below the copy on a phone, beside it from md up — see ShortlistField. */}
      <ShortlistField />
    </section>
  );
}
