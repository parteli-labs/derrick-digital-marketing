"use client";

import { useCallback, useEffect, useRef } from "react";

/** Stillness between passes. The climb should land, then be left alone a moment. */
const HOLD_MS = 1700;

/** The action stretches with the distance travelled so the pace stays even. */
const actionMs = (lift: number) => 1700 + lift * 220;

/**
 * How far the mark itself moves on screen, in positions, however big the gain.
 * Past this the jump is carried by the list scrolling underneath instead — a
 * ten-place leap would otherwise throw the mark clean off the top of the box.
 */
const RISE_CAP = 3;

/** The most positions a single pass can gain; sizes the row buffer. */
const MAX_LIFT = 11;

/**
 * Most passes gain a place or two. Occasionally one comes from a long way back.
 * The variation is the point: a fixed step reads as a mechanism, a varying one
 * reads as something competing.
 */
function pickLift() {
  const r = Math.random();
  if (r < 0.46) return 1 + Math.floor(Math.random() * 2);
  if (r < 0.8) return 3 + Math.floor(Math.random() * 3);
  return 6 + Math.floor(Math.random() * (MAX_LIFT - 5));
}

/**
 * The beats, as fractions of a cycle. They overlap on purpose: the rows begin
 * stepping down while the mark is still rising, which is what makes the two
 * motions read as one event instead of two things happening nearby.
 */
const OUT: Beat = [0.0, 0.15];
const RISE: Beat = [0.17, 0.57];
const BACK: Beat = [0.6, 0.76];
const SETTLE: Beat = [0.78, 1.0];

type Beat = readonly [number, number];

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const at = (t: number, [a, b]: Beat) => clamp01((t - a) / (b - a));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

type Palette = { lime: string; glow: string; item: (alpha: number) => string };

/**
 * The canvas cannot use a Tailwind class, so it reads the tokens it needs off
 * the document and stays live-bound to `@theme` rather than carrying a second
 * copy of the palette. Fallbacks keep the illustration visible if a read fails.
 */
function readPalette(): Palette {
  const cs = getComputedStyle(document.documentElement);
  const rgb = (name: string, fallback: [number, number, number]) => {
    const m = /^#?([0-9a-f]{6})$/i.exec(cs.getPropertyValue(name).trim());
    if (!m) return fallback;
    const n = parseInt(m[1], 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255] as [number, number, number];
  };
  const [lr, lg, lb] = rgb("--color-lime", [198, 242, 78]);
  const [ir, ig, ib] = rgb("--color-dim", [141, 145, 121]);
  return {
    lime: `rgb(${lr},${lg},${lb})`,
    glow: `rgba(${lr},${lg},${lb},.7)`,
    item: (a) => `rgba(${ir},${ig},${ib},${a.toFixed(3)})`,
  };
}

/** Stable per-row jitter: a row keeps its width for as long as it exists. */
const jitter = (id: number, seed: number) => {
  const n = Math.sin(id * 12.9898 + seed) * 43758.5453;
  return n - Math.floor(n);
};

/** The glow, rendered once. `shadowBlur` must never run inside a frame. */
function glowSprite(dpr: number, w: number, h: number, pad: number, palette: Palette) {
  const c = document.createElement("canvas");
  c.width = Math.round((w + pad * 2) * dpr);
  c.height = Math.round((h + pad * 2) * dpr);
  const g = c.getContext("2d");
  if (!g) return null;
  g.setTransform(dpr, 0, 0, dpr, 0, 0);
  g.shadowColor = palette.glow;
  g.shadowBlur = pad * 0.7;
  g.fillStyle = palette.lime;
  g.fillRect(pad, pad, w, h);
  return c;
}

type Row = { id: number; slot: number; w: number; a: number };

type Layout = {
  w: number; h: number; slot: number; half: number; barH: number;
  listX: number; swing: number; markW: number; glowPad: number;
  rows: Row[]; sprite: HTMLCanvasElement | null;
};

/** The rows directly above the mark — the ones it is about to pass. */
const stepping = (slot: number, lift: number) => slot >= -lift && slot <= -1;

/**
 * A list, and one row climbing it.
 *
 * Each pass: the mark slides out of the column to the left, rises past the rows
 * above it while those rows step down a position together to close the space it
 * left, then slides back in to the gap that opens at the top of that group.
 * The list then settles down around its new order, which returns the mark to the
 * centre so the next pass starts from the same place.
 *
 * The rows' step and the mark's rise share an easing window, so they read as one
 * exchange rather than two animations running side by side.
 */
export function ShortlistField() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const layout = useRef<Layout | null>(null);
  const palette = useRef<Palette | null>(null);
  const raf = useRef<number | null>(null);
  const running = useRef(false);
  const cycleStart = useRef(0);
  const lift = useRef(3);
  const action = useRef(actionMs(3));

  const build = useCallback(() => {
    const wrap = wrapRef.current;
    const cv = canvasRef.current;
    if (!wrap || !cv) return false;

    const rect = wrap.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    if (!w || !h) return false;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.round(w * dpr);
    cv.height = Math.round(h * dpr);
    const ctx = cv.getContext("2d");
    if (!ctx) return false;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    palette.current = readPalette();

    const slot = Math.max(26, Math.min(46, h / 11));
    // Enough rows that one recycles from bottom to top well outside the fade.
    const half = Math.ceil((h * 0.36) / slot) + MAX_LIFT + 2;
    const barH = Math.max(7, Math.round(slot * 0.26));
    const markW = Math.min(w * 0.46, 240);
    const minW = markW * 0.42;
    const maxW = markW * 1.08;
    const swing = Math.min(w * 0.1, 100);

    const rows: Row[] = [];
    for (let s = -half; s <= half; s++) {
      if (s === 0) continue; // the mark's own place
      rows.push({
        id: s,
        slot: s,
        w: minW + jitter(s, 1.7) * (maxW - minW),
        a: 0.26 + jitter(s, 7.1) * 0.3,
      });
    }

    layout.current = {
      w, h, slot, half, barH,
      // Centre the whole motion, swing included, inside the box.
      listX: Math.round((w - markW) / 2 + swing / 2),
      swing, markW,
      glowPad: Math.round(Math.max(18, slot * 0.8)),
      rows,
      sprite: glowSprite(dpr, markW, barH, Math.round(Math.max(18, slot * 0.8)), palette.current),
    };
    return true;
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const cv = canvasRef.current;
    if (!wrap || !cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    /** Rows dissolve toward both edges rather than stopping at them. */
    const fade = (dist: number, h: number) => {
      const solid = h * 0.05;
      const gone = h * 0.36;
      if (dist <= solid) return 1;
      if (dist >= gone) return 0;
      return Math.cos(((dist - solid) / (gone - solid)) * (Math.PI / 2));
    };

    /**
     * Commit one pass. The stepping rows keep the position they moved into, and
     * every row then takes the settle, which is what carries the mark back to
     * the centre. Rendering the next cycle at progress zero reproduces exactly
     * the frame this replaces, so the loop has no seam.
     */
    const commit = (L: Layout, n: number) => {
      for (const r of L.rows) {
        r.slot += (stepping(r.slot, n) ? 1 : 0) + n;
        while (r.slot > L.half) r.slot -= L.half * 2 + 1;
      }
    };

    const nextCycle = (L: Layout) => {
      commit(L, lift.current);
      cycleStart.current += action.current + HOLD_MS;
      lift.current = pickLift();
      action.current = actionMs(lift.current);
    };

    const paint = (elapsed: number) => {
      const L = layout.current;
      const P = palette.current;
      if (!L || !P) return;

      // Cycles vary in length, so they are tracked by start time rather than
      // divided out of the clock. A long stall (a hidden tab) skips the backlog
      // instead of replaying it.
      if (elapsed - cycleStart.current > (action.current + HOLD_MS) * 4) {
        cycleStart.current = elapsed;
      }
      while (elapsed - cycleStart.current >= action.current + HOLD_MS) nextCycle(L);

      // Clamped, so the tail of the cycle is a still hold on the settled frame.
      const t = clamp01((elapsed - cycleStart.current) / action.current);
      const n = lift.current;
      // Whatever the mark does not travel itself, the list travels under it.
      const rise = Math.min(n, RISE_CAP);
      const carried = n - rise;

      const outP = easeOut(at(t, OUT));
      const riseP = easeInOut(at(t, RISE));
      const backP = easeOut(at(t, BACK));
      const setP = easeInOut(at(t, SETTLE));

      const cy = L.h / 2;
      ctx.clearRect(0, 0, L.w, L.h);

      for (const r of L.rows) {
        // The group steps down on the mark's own rise curve — same window, same
        // easing — so the exchange happens as a single movement. `carried` is the
        // part of a long jump the list absorbs during that same window.
        const eff = r.slot + (stepping(r.slot, n) ? riseP : 0) + carried * riseP + rise * setP;
        const y = cy + eff * L.slot;
        const a = fade(Math.abs(y - cy), L.h) * r.a;
        if (a < 0.004) continue;
        ctx.fillStyle = P.item(a);
        ctx.fillRect(L.listX, y - L.barH / 2, r.w, L.barH);
      }

      const mx = L.listX - L.swing * (outP - backP);
      const my = cy + (-rise * riseP + rise * setP) * L.slot - L.barH / 2;

      // Cut the rows away around the mark so the row it passes stays a separate
      // object instead of merging into it.
      ctx.clearRect(mx - 5, my - 4, L.markW + 10, L.barH + 8);
      if (L.sprite) {
        ctx.drawImage(
          L.sprite,
          mx - L.glowPad,
          my - L.glowPad,
          L.markW + L.glowPad * 2,
          L.barH + L.glowPad * 2,
        );
      }
    };

    let startedAt = 0;
    const frame = (ts: number) => {
      if (!startedAt) startedAt = ts;
      paint(ts - startedAt);
      raf.current = requestAnimationFrame(frame);
    };

    const stop = () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
      raf.current = null;
      running.current = false;
    };

    const resume = () => {
      if (running.current || motion.matches) return;
      if (!layout.current && !build()) return;
      running.current = true;
      raf.current = requestAnimationFrame(frame);
    };

    const rebuild = () => {
      stop();
      if (!build()) return;
      // Reduced motion gets the composed state: the mark lit and centred, the
      // list in order, without the movement that carries the same meaning.
      if (motion.matches) {
        paint(0);
        return;
      }
      startedAt = 0;
      cycleStart.current = 0;
      lift.current = pickLift();
      action.current = actionMs(lift.current);
      running.current = true;
      raf.current = requestAnimationFrame(frame);
    };

    let resizeTimer: number | undefined;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        const r = wrap.getBoundingClientRect();
        const L = layout.current;
        if (L && Math.abs(r.width - L.w) < 2 && Math.abs(r.height - L.h) < 2) return;
        rebuild();
      }, 180);
    };

    const onVisibility = () => (document.hidden ? stop() : resume());

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    motion.addEventListener("change", rebuild);

    const io =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => entries.forEach((e) => (e.isIntersecting ? resume() : stop())),
            { threshold: 0.05 },
          )
        : null;
    io?.observe(wrap);

    rebuild();
    if (document.fonts?.ready) void document.fonts.ready.then(onResize);

    return () => {
      stop();
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      motion.removeEventListener("change", rebuild);
      io?.disconnect();
    };
  }, [build]);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      /*
       * Its own band below the copy on a phone, where the hero is one column and
       * body text over the glowing mark measured 5.02:1. From md up it takes the
       * right-hand side for the full height of the hero.
       */
      className="u-field-mask pointer-events-none relative h-[260px] w-full pb-[clamp(28px,5vw,48px)] md:absolute md:inset-y-0 md:right-0 md:z-0 md:h-auto md:w-[46%] md:pb-0"
    >
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />
    </div>
  );
}
