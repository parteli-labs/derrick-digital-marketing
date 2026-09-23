"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ComponentPropsWithoutRef, type CSSProperties } from "react";

/**
 * The page's three motions, each driven by one shared listener rather than one
 * per element: a fade-up as content enters, a slow drift on photographs while
 * the page scrolls, and figures counting up the first time they are seen.
 *
 * Every one of them is presentational. With reduced motion, or with no script
 * at all, the content is already in its final state — globals.css only hides a
 * reveal once app/layout.tsx has marked the document as able to run it.
 */

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------------------------------------------------- reveal -- */

type Shown = (el: Element) => void;
const onShown = new WeakMap<Element, Shown>();
let revealer: IntersectionObserver | null = null;

function observeReveal(el: Element, cb: Shown) {
  revealer ??= new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        onShown.get(e.target)?.(e.target);
        onShown.delete(e.target);
        revealer!.unobserve(e.target);
      }
    },
    { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
  );
  onShown.set(el, cb);
  revealer.observe(el);
  return () => {
    onShown.delete(el);
    revealer?.unobserve(el);
  };
}

/**
 * Marks an element `data-shown` the first time it scrolls into view. Pair it
 * with the `u-reveal` class, which does the fade; use it directly when the
 * element revealing is a component's own root rather than a wrapper.
 */
export function useReveal<T extends Element>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return observeReveal(el, () => el.setAttribute("data-shown", ""));
  }, []);
  return ref;
}

/**
 * Fades its content up the first time it scrolls into view. `delay` staggers
 * siblings.
 */
export function Reveal({
  delay = 0,
  className = "",
  style,
  ...props
}: ComponentPropsWithoutRef<"div"> & { delay?: number }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      {...props}
      className={`u-reveal ${className}`}
      style={{ ...style, "--reveal-delay": `${delay}s` } as CSSProperties}
    />
  );
}

/* --------------------------------------------------------------- count up -- */

/**
 * Counts a figure up from zero the first time it is seen. Only the leading
 * number animates, so "21d" counts 0d → 21d. A figure with nothing to count to
 * ("0") is left alone. Server-rendered at its final value, so it reads correctly
 * with no script at all.
 */
export function CountUp({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    const el = ref.current;
    const m = /^(\d+)(.*)$/.exec(value);
    if (!el || !m || reducedMotion()) return;
    const to = Number(m[1]);
    const suffix = m[2];
    if (to === 0) return;

    let raf = 0;
    let timer = 0;
    setText(`0${suffix}`);
    const stop = observeReveal(el, () => {
      timer = window.setTimeout(() => {
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min(1, (t - t0) / 2200);
          setText(`${Math.round(to * (1 - Math.pow(1 - p, 3)))}${suffix}`);
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      }, delay * 1000 + 250);
    });
    return () => {
      stop();
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [value, delay]);

  // The real figure is what assistive tech reads, never the frame in flight.
  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden="true">{text}</span>
    </span>
  );
}

/* --------------------------------------------------------------- parallax -- */

const layers = new Map<HTMLElement, number>();
let ticking = false;

function drift() {
  ticking = false;
  const vh = window.innerHeight;
  for (const [el, strength] of layers) {
    const r = el.parentElement!.getBoundingClientRect();
    if (r.bottom < 0 || r.top > vh) continue;
    const off = (r.top + r.height / 2 - vh / 2) * -strength;
    el.style.translate = `0 ${off.toFixed(1)}px`;
  }
}

function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(drift);
}

/**
 * A full-bleed photograph that drifts slower than the page. The wrapper is
 * oversized by `className` (an inset) so the drift never exposes an edge; the
 * section it sits in must clip it with `overflow-hidden`.
 */
export function ParallaxPhoto({
  src,
  strength,
  className,
  imageClassName = "",
  preload = false,
}: {
  src: string;
  /** Fraction of scroll distance the photo lags by. 0.15–0.25 reads as depth, not motion. */
  strength: number;
  className: string;
  imageClassName?: string;
  preload?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    if (layers.size === 0) window.addEventListener("scroll", onScroll, { passive: true });
    layers.set(el, strength);
    drift();
    return () => {
      layers.delete(el);
      if (layers.size === 0) window.removeEventListener("scroll", onScroll);
    };
  }, [strength]);

  return (
    <div ref={ref} aria-hidden="true" className={`absolute will-change-transform ${className}`}>
      <Image src={src} alt="" fill sizes="100vw" preload={preload} className={`u-photo object-cover ${imageClassName}`} />
    </div>
  );
}
