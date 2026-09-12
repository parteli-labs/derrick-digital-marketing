"use client";

import { useCallback, useRef } from "react";
import type { Service } from "@/lib/content";

/**
 * The Honest Affordance Rule: the whole tile highlights, so the whole tile is
 * the control. <details>/<summary> keeps native semantics and keyboard support;
 * the open/close animation is scripted because <details> cannot transition.
 */
export function ServiceCard({ service }: { service: Service }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const anim = useRef<Animation | null>(null);

  const toggle = useCallback(() => {
    const d = detailsRef.current;
    const body = bodyRef.current;
    if (!d || !body) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canAnimate = !reduced && typeof body.animate === "function";

    anim.current?.cancel();
    anim.current = null;

    const cleanup = () => {
      anim.current = null;
      body.style.height = "";
      body.style.opacity = "";
    };

    if (!d.open) {
      d.open = true;
      if (!canAnimate) return;
      const h = body.offsetHeight;
      const a = body.animate(
        [{ height: "0px", opacity: 0 }, { height: `${h}px`, opacity: 1 }],
        { duration: 260, easing: "cubic-bezier(.2,.7,.3,1)" },
      );
      a.onfinish = cleanup;
      a.oncancel = cleanup;
      anim.current = a;
    } else {
      if (!canAnimate) {
        d.open = false;
        return;
      }
      const h = body.offsetHeight;
      const a = body.animate(
        [{ height: `${h}px`, opacity: 1 }, { height: "0px", opacity: 0 }],
        { duration: 210, easing: "cubic-bezier(.4,0,.7,.2)" },
      );
      a.onfinish = () => {
        d.open = false;
        cleanup();
      };
      a.oncancel = cleanup;
      anim.current = a;
    }
  }, []);

  return (
    <article
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("summary,a")) return;
        toggle();
      }}
      className="group flex cursor-pointer flex-col gap-3 border-[3px] border-paper bg-ink-2 px-5 pt-[22px] pb-6 transition-[background-color,border-color,transform] duration-200 hover:-translate-y-1 hover:border-lime hover:bg-forest"
    >
      <div className="font-display text-figure font-black leading-[0.8] text-lime">
        {service.tag}
      </div>
      <h3 className="text-title">{service.title}</h3>
      <p className="text-[0.92rem] leading-[1.5] text-muted transition-colors duration-200 group-hover:text-muted-2">
        {service.body}
      </p>

      <ul className="mt-1.5 flex list-none flex-col gap-1.5 p-0">
        {service.bullets.map((b) => (
          <li key={b} className="relative pl-4 u-label-sm text-dim">
            <span className="absolute left-0 top-[0.52em] block h-0.5 w-2 bg-lime" />
            {b}
          </li>
        ))}
      </ul>

      <details ref={detailsRef} className="mt-1.5">
        <summary
          onClick={(e) => {
            e.preventDefault();
            toggle();
          }}
          className="flex cursor-pointer list-none items-center gap-2.5 border-2 border-lime/[0.38] px-[13px] py-[11px] u-label-sm font-bold text-lime transition-[background-color,color,border-color] duration-200 group-hover:border-lime hover:!bg-lime hover:!text-ink focus-visible:bg-lime focus-visible:text-ink [&::-webkit-details-marker]:hidden"
        >
          {service.drawer.question}
          <span className="relative ml-auto block h-[11px] w-[11px] shrink-0">
            <span className="absolute left-0 right-0 top-[5px] h-0.5 bg-current" />
            <span className="absolute bottom-0 left-[5px] top-0 w-0.5 bg-current transition-transform duration-[250ms] ease-[cubic-bezier(.2,.7,.3,1)] group-has-[details[open]]:scale-y-0" />
          </span>
        </summary>
        <div ref={bodyRef} className="overflow-hidden px-0.5 pt-[15px] pb-1">
          <p className="text-[0.88rem] leading-[1.56] text-muted transition-colors duration-200 group-hover:text-muted-2">
            {service.drawer.answer}
          </p>
        </div>
      </details>

      <div className="mt-auto flex items-baseline justify-between gap-2.5 border-t-2 border-field pt-[15px] transition-colors duration-200 group-hover:border-lime/40">
        <span className="u-label-sm text-dim transition-colors duration-200 group-hover:text-sage">
          First movement
        </span>
        <b className="whitespace-nowrap font-display text-[1.6rem] font-black leading-none text-lime">
          {service.firstMovement}
        </b>
      </div>
    </article>
  );
}
