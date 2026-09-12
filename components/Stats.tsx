import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="bg-forest py-[clamp(40px,5vw,72px)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-[26px] px-gut">
        {stats.map((s) => (
          <div key={s.label}>
            <b className="block font-display text-figure font-black text-lime">{s.figure}</b>
            <span className="mt-2.5 block u-label-sm text-sage">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
