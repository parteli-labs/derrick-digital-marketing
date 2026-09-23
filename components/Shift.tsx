import type { CSSProperties } from "react";
import { CountUp, Reveal } from "./motion";
import { shift } from "@/lib/content";

/** Ten results of slightly uneven length, fading in three tiers down the page. */
const THEN = [1, 0.92, 0.96, 0.88, 0.94, 0.9, 0.86, 0.93, 0.89, 0.95];
const NOW = [1, 0.9, 0.94];
const tier = (i: number) => (i < 3 ? 0.7 : i < 6 ? 0.42 : 0.25);

/** Each bar draws across in turn when its Reveal lands — see `.u-bar`. */
function Bars({ widths, now = false }: { widths: number[]; now?: boolean }) {
  return (
    <div className="mt-4 grid gap-[7px]">
      {widths.map((w, i) => (
        <i
          key={i}
          style={{ "--w": w, "--bar-delay": `${0.3 + i * 0.05}s`, opacity: now ? 1 : tier(i) } as CSSProperties}
          className={`block u-bar ${now && i === 0 ? "h-[3px] bg-gold" : "h-0.5 bg-paper"}`}
        />
      ))}
    </div>
  );
}

export function Shift() {
  const columns = [
    { ...shift.then, count: "10", widths: THEN, now: false },
    { ...shift.now, count: "3", widths: NOW, now: true },
  ];

  return (
    <section id="shift" data-ground="forest" className="bg-forest py-section">
      <div className="mx-auto max-w-[1320px] px-gut">
        <Reveal>
          <h2 className="text-headline">
            {shift.heading[0]} {shift.heading[1]}
          </h2>
        </Reveal>

        <div className="mt-[clamp(40px,5vw,64px)] grid items-end gap-[clamp(32px,6vw,96px)] lg:grid-cols-[5fr_4fr]">
          <Reveal delay={0.1} className="flex flex-col gap-[18px]">
            {shift.paragraphs.map((p, i) => (
              <p key={i} className="max-w-[46ch] text-lead text-mist">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.2} className="grid grid-cols-2 gap-7">
            {columns.map((col) => (
              <div key={col.label}>
                <h3 className="flex items-baseline justify-between border-b border-paper/35 pb-2.5 text-body-md font-light">
                  {col.label}
                  <b
                    className={`text-figure-sm tabular-nums ${
                      col.now ? "font-light text-gold" : "font-extralight"
                    }`}
                  >
                    <CountUp value={col.count} delay={0.2} />
                  </b>
                </h3>
                <Bars widths={col.widths} now={col.now} />
                <span className="mt-4 block u-label text-sage">{col.note}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
