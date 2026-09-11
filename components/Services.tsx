import { ServiceCard } from "./ServiceCard";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" data-ground="ink" className="py-section">
      <div className="mx-auto max-w-[1280px] px-gut">
        <h2 className="mb-[34px] text-headline">What We Do</h2>

        {/* Seven named row bands — tag, title, body, bullets, footer, drawer trigger, answer — that the
            cards opt into as subgrids, so each band is sized by the tallest card and
            the rows line up across the whole set however the copy wraps. */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] grid-rows-[repeat(7,auto)] gap-[18px]">
          {services.map((s) => (
            <ServiceCard key={s.tag} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
