import { CrowdField } from "./CrowdField";
import { ButtonLink } from "./Button";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[clamp(34px,5vw,64px)]">
      <CrowdField />

      {/* pointer-events pass through to the field; controls opt back in */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-gut pointer-events-none [&_a]:pointer-events-auto">
        <div className="mb-[22px] flex flex-wrap items-center gap-3.5">
          <span className="inline-block -rotate-[2.4deg] border-2 border-orange px-[11px] py-[5px] font-cond text-[0.74rem] font-bold uppercase tracking-[0.16em] text-orange">
            {hero.stamp}
          </span>
          <span className="u-label text-lime">{hero.eyebrow}</span>
        </div>

        <h1 className="text-display">
          Three names
          <br />
          come back.
          <br />
          <span className="inline-block -skew-x-6 bg-lime px-[0.12em] text-ink">Be one</span>{" "}
          <span className="text-transparent [-webkit-text-stroke:2px_var(--color-paper)]">
            of them.
          </span>
        </h1>

        <div className="pt-8 pb-[clamp(44px,6vw,72px)]">
          <p className="max-w-[46ch] text-lead text-lead/[1.5]">
            {hero.body}{" "}
            <strong className="font-semibold text-paper">{hero.bodyStrong}</strong>
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="#contact">Run my audit →</ButtonLink>
            <ButtonLink href="#shift" variant="ghost">
              What changed
            </ButtonLink>
          </div>

          <p className="mt-[26px] max-w-[44ch] u-label-sm text-dim leading-[1.5]">
            {hero.caption.before} <b className="font-bold text-lime">{hero.caption.count}</b>{" "}
            {hero.caption.middle} <b className="font-bold text-lime">{hero.caption.emphasis}</b>.
          </p>
        </div>
      </div>
    </section>
  );
}
