"use client";

import { useCallback, useId, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { Service } from "@/lib/content";
import { useReveal } from "./motion";

/**
 * The Honest Affordance Rule: the whole column responds to the pointer — its
 * top rule turns gold — so the whole column is the control.
 *
 * The column subgrids onto seven shared row bands so the three line up, and
 * every column always spans all seven, the answer band included. An open
 * answer makes that band tall for all three, but the columns have no box or
 * fill to stretch, so the only visible effect is space under the closed ones.
 *
 * A button + labelled region rather than <details>/<summary>, so the height can
 * be animated against the real rendered content. Button + aria-expanded + a
 * region is the same disclosure contract: native keyboard operation, announced
 * state, no custom roles.
 */
export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  const id = useId();
  const revealRef = useReveal<HTMLElement>();
  const buttonId = `${id}-toggle`;
  const panelId = `${id}-panel`;

  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const anim = useRef<Animation | null>(null);
  const prevOpen = useRef(open);

  const toggle = useCallback(() => setOpen((v) => !v), []);

  // The panel's height is animated after the state lands, so the measurement is
  // taken against the real rendered content rather than a guess.
  useLayoutEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    if (prevOpen.current === open) return;
    prevOpen.current = open;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof body.animate !== "function") return;

    anim.current?.cancel();
    const h = body.scrollHeight;
    const a = body.animate(
      [
        { height: `${open ? 0 : h}px`, opacity: open ? 0 : 1 },
        { height: `${open ? h : 0}px`, opacity: open ? 1 : 0 },
      ],
      {
        duration: open ? 260 : 210,
        easing: open ? "cubic-bezier(.2,.7,.3,1)" : "cubic-bezier(.4,0,.7,.2)",
      },
    );
    anim.current = a;
    const done = () => {
      anim.current = null;
      body.style.removeProperty("opacity");
    };
    a.onfinish = done;
    a.oncancel = done;
  }, [open]);

  return (
    <article
      ref={revealRef}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button,a")) return;
        // Dragging to select copy inside the column shouldn't also work the drawer.
        if (!window.getSelection()?.isCollapsed) return;
        toggle();
      }}
      /* Spacing below the column is its own bottom padding, which a subgrid adds
         to its last band. Every column's last band is the answer band, so it
         lands in the same place for all three; a row gap on the parent would
         instead be split into the margins around every band. */
      className="group u-reveal row-span-7 grid cursor-pointer grid-rows-subgrid border-t border-paper pt-[22px] pb-10 transition-[border-color] duration-300 hover:border-gold"
    >
      <span className="u-label text-gold">{service.tag}</span>

      <h3 className="mt-3 text-title font-normal">{service.title}</h3>
      <p className="mt-3.5 text-body-md text-muted">{service.body}</p>

      <ul className="mt-[22px] flex list-none flex-col border-t border-line p-0 self-start">
        {service.bullets.map((b) => (
          <li
            key={b}
            className="group/item relative border-b border-line py-2.5 text-body-sm font-normal transition-[padding,color] duration-400 ease-enter hover:pl-[22px] hover:text-gold"
          >
            <span className="absolute left-0 top-1/2 h-px w-0 bg-gold transition-[width] duration-400 ease-enter group-hover/item:w-3" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-[26px] flex flex-col gap-2">
        <span className="u-label text-dim">First results</span>
        <b className="whitespace-nowrap text-title font-light">{service.firstMovement}</b>
      </div>

      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
        className="mt-6 flex cursor-pointer items-center gap-3 border-y border-line py-3.5 text-left text-body-sm font-normal text-paper transition-colors duration-300 hover:text-gold group-hover:border-gold/40"
      >
        {service.drawer.question}
        <span aria-hidden="true" className="relative ml-auto block size-[11px] shrink-0 text-gold">
          <span className="absolute inset-x-0 top-[5px] h-px bg-current" />
          <span
            className={`absolute inset-y-0 left-[5px] w-px bg-current transition-transform duration-[250ms] ease-enter ${
              open ? "scale-y-0" : ""
            }`}
          />
        </span>
      </button>

      <div
        ref={bodyRef}
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        inert={!open}
        className="overflow-hidden"
        style={open ? undefined : { height: 0 }}
      >
        <p className="pt-4 text-body-sm text-muted">{service.drawer.answer}</p>
      </div>
    </article>
  );
}
