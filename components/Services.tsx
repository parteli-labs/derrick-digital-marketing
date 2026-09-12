import { ServiceCard } from "./ServiceCard";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="py-section">
      <div className="mx-auto max-w-[1280px] px-gut">
        <div className="mb-[34px]">
          <span className="u-label text-lime">What We Do</span>
          <h2 className="mt-3 text-headline">
            Three service lines.
            <br />
            No retainer theatre.
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-[18px]">
          {services.map((s) => (
            <ServiceCard key={s.tag} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
