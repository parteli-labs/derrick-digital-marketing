"use client";

import { useCallback, useId, useLayoutEffect, useRef, useState } from "react";
import type { Service } from "@/lib/content";

/**
 * The Honest Affordance Rule: the whole tile highlights, so the whole tile is
 * the control.
 *
 * This is a button + labelled region rather than <details>/<summary>. The card
 * subgrids onto the shared row bands so the three cards line up, and a shared
 * band means an open drawer would stretch its closed neighbours to match. Only
 * the open card spans the answer band — which needs the open state in React,
 * and <details> keeps that state in the DOM where the grid cannot see it.
 * Button + aria-expanded + a region is the same disclosure contract: native
 * keyboard operation, announced state, no custom roles.
 */
export function ServiceCard({ service }: { service: Service }) {
  const id = useId();
  const buttonId = `${id}-toggle`;
  const panelId = `${id}-panel`;

  const [open, setOpen] = useState(false);
  const [settling, setSettling] = useState(false);
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
    if (reduced || typeof body.animate !== "function") {
      setSettling(false);
      return;
    }

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
    setSettling(!open);
    const done = () => {
      anim.current = null;
      body.style.removeProperty("opacity");
      setSettling(false);
    };
    a.onfinish = done;
    a.oncancel = done;
  }, [open]);

  return (
    <article
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button,a")) return;
        // Dragging to select copy inside the card shouldn't also work the drawer.
        if (!window.getSelection()?.isCollapsed) return;
        toggle();
      }}
      /* Six shared bands while closed; the seventh is the answer, and only the
         open card reaches it. That is what stops a closed card being stretched
         to match its open neighbour. The band is held for the length of the
         close animation, because dropping it first leaves the still-shrinking
         answer overflowing the six bands, which grows them — and every other
         card with them — for a frame. */
      className={`group grid cursor-pointer grid-rows-subgrid gap-3 border-[3px] border-paper bg-ink-2 px-5 pt-[22px] pb-6 transition-[background-color,border-color,transform] duration-200 hover:-translate-y-1 hover:border-lime hover:bg-forest ${
        open || settling ? "row-span-7" : "row-span-6"
      }`}
    >
      <div className="font-display mb-1 text-figure font-black leading-[0.8] text-lime">
        {service.tag}
      </div>

      <h3 className="text-title mb-4">{service.title}</h3>
      <p className="text-body leading-[1.5] text-muted transition-colors duration-200 group-hover:text-muted-2">
        {service.body}
      </p>

      <ul className="flex list-none flex-col gap-1.5 p-0 pb-6">
        {service.bullets.map((b) => (
          <li
            key={b}
            className="relative pl-4 text-body-md u-label-sm text-muted transition-colors duration-200 group-hover:text-muted-2"
          >
            <span className="absolute left-0 top-[0.52em] block h-0.5 w-2 bg-lime" />
            {b}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between gap-2.5 border-t-2 border-field pt-[15px] transition-colors duration-200 group-hover:border-lime/40">
        <span className="u-label text-muted-2 transition-colors duration-200 group-hover:text-sage">
          See results in
        </span>
        <b className="whitespace-nowrap font-display text-title font-black leading-none text-orange">
          {service.firstMovement}
        </b>
      </div>

      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
        className="mt-1.5 flex cursor-pointer items-center gap-2.5 border-2 border-lime/[0.38] px-[13px] py-[11px] text-left text-body-md u-label-sm font-bold text-lime transition-[background-color,color,border-color] duration-200 group-hover:border-lime hover:bg-lime hover:text-ink focus-visible:bg-lime focus-visible:text-ink"
      >
        {service.drawer.question}
        <span className="relative ml-auto block h-[11px] w-[11px] shrink-0">
          <span className="absolute left-0 right-0 top-[5px] h-0.5 bg-current" />
          <span
            className={`absolute bottom-0 left-[5px] top-0 w-0.5 bg-current transition-transform duration-[250ms] ease-[cubic-bezier(.2,.7,.3,1)] ${
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
        <p className="px-0.5 pb-1 pt-[15px] text-body-md leading-[1.56] text-muted-2">
          {service.drawer.answer}
        </p>
      </div>
    </article>
  );
}
