import { stats, STATS_MINIMUM } from "@/lib/content";
import { isProvisional, shown } from "@/lib/evidence";

/**
 * Only figures the client stands behind reach this band. If too few survive it
 * is not a statistics band any more, so the section is omitted rather than
 * padded out — see Product Principle 1.
 */
export function Stats() {
  const rows = stats
    .map((s) => ({ ...s, figure: shown(s.figure), provisional: isProvisional(s.figure) }))
    .filter((s): s is typeof s & { figure: string } => s.figure !== null);

  if (rows.length < STATS_MINIMUM) return null;

  return (
    <section aria-label="By the numbers" data-ground="forest" className="bg-forest py-[clamp(40px,5vw,72px)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-[26px] px-gut">
        {rows.map((s) => (
          <div key={s.label}>
            <b className="block font-display text-figure font-black text-lime">
              {s.figure}
              {s.provisional && (
                <span className="ml-2 align-middle border-2 border-orange px-1.5 py-0.5 font-cond text-label-sm font-bold uppercase tracking-[0.14em] text-orange">
                  Unverified
                </span>
              )}
            </b>
            <span className="mt-2.5 block u-label-sm text-sage">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
