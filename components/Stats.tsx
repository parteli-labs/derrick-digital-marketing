import { stats, STATS_MINIMUM } from "@/lib/content";
import { isProvisional, shown } from "@/lib/evidence";
import { CountUp, Reveal } from "./motion";

/**
 * Only figures the client stands behind reach this band. If too few survive it
 * is not a statistics band any more, so the section is omitted rather than
 * padded out — see Product Principle 1.
 *
 * Its padding sits inside the rule rather than on the section, so the separator
 * rule in globals.css can zero the section's top padding after Services without
 * pressing the figures up against the line.
 */
export function Stats() {
  const rows = stats
    .map((s) => ({ ...s, figure: shown(s.figure), provisional: isProvisional(s.figure) }))
    .filter((s): s is typeof s & { figure: string } => s.figure !== null);

  if (rows.length < STATS_MINIMUM) return null;

  return (
    <section aria-label="By the numbers" data-ground="ink">
      <div className="border-t border-line py-[clamp(64px,8vw,110px)]">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-x-6 gap-y-10 px-gut lg:grid-cols-4">
          {rows.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="border-l border-line pl-[22px]">
              <b className="block text-figure font-extralight tabular-nums">
                <CountUp value={s.figure} delay={i * 0.1} />
              </b>
              <span className="mt-3.5 block u-label text-muted">
                {s.label}
                {s.provisional && <span className="ml-2 text-garnet">Unverified</span>}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
