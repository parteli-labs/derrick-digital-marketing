import { shift } from "@/lib/content";

function Bars({ variant }: { variant: "then" | "now" }) {
  if (variant === "now") {
    return (
      <div className="flex flex-col gap-1.5">
        <i className="block h-[13px] bg-orange" />
        <i className="block h-[9px] bg-ink" />
        <i className="block h-[9px] bg-ink" />
      </div>
    );
  }
  const opacity = [0.85, 0.85, 0.85, 0.4, 0.4, 0.4, 0.18, 0.18, 0.18, 0.18];
  return (
    <div className="flex flex-col gap-1.5">
      {opacity.map((o, i) => (
        <i key={i} className="block h-[9px] bg-ink" style={{ opacity: o }} />
      ))}
    </div>
  );
}

export function Shift() {
  return (
    <section id="shift" data-ground="lime" className="bg-lime text-ink py-[clamp(44px,6vw,80px)]">
      <div className="mx-auto max-w-[1280px] px-gut">
        <h2 className="text-headline text-ink">
          {shift.heading[0]}
          <br />
          {shift.heading[1]}
        </h2>

        <div className="mt-8 grid items-center gap-[clamp(24px,4vw,60px)] lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            {shift.paragraphs.map((p, i) => (
              <p key={i} className="max-w-[48ch] text-lead text-on-lime">
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            <div className="border-[3px] border-ink p-3.5">
              <h3 className="mb-3 text-title text-ink">{shift.then.label}</h3>
              <Bars variant="then" />
              <p className="mt-3 u-label-sm text-on-lime-2">{shift.then.note}</p>
            </div>
            <div className="border-[3px] border-ink p-3.5">
              <h3 className="mb-3 text-title text-ink">{shift.now.label}</h3>
              <Bars variant="now" />
              <p className="mt-3 u-label-sm text-on-lime-2">{shift.now.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
