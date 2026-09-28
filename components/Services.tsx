import { ServiceCard } from "./ServiceCard";
import { Reveal } from "./motion";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" data-ground="ink" className="pt-section pb-[calc(var(--spacing-section)-2.5rem)]">
      {/* The last band of every column already carries 2.5rem of bottom padding. */}
      <div className="mx-auto max-w-[1320px] px-gut">
        <Reveal>
          <h2 className="text-headline">What we do.</h2>
        </Reveal>

        {/* Seven row bands — tag, title, body, deliverables, first results, drawer
            trigger, answer — that the columns opt into as subgrids, so each band is
            sized by the tallest column and the rows line up however the copy wraps. */}
        <div className="mt-[clamp(44px,5vw,72px)] grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] grid-rows-[repeat(7,auto)] gap-x-7 gap-y-0">
          {services.map((s, i) => (
            <ServiceCard key={s.tag} service={s} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
