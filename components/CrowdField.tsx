"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Mark = {
  hx: number; hy: number;   // home position, piled over the centre
  dx: number; dy: number;   // displacement when the crowd clears
  w: number; h: number;
  a: number; ph: number; sp: number; dr: number;
};

const YOU_W = 54;
const YOU_H = 12;

/**
 * The others, crowding you out. Hover (or tap) clears them and you're finally
 * visible underneath. Sits behind the hero copy and dissolves at every edge —
 * never framed in a hard-edged box.
 */
export function CrowdField() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const marks = useRef<Mark[]>([]);
  const size = useRef({ w: 0, h: 0 });
  const reveal = useRef(0);
  const target = useRef(0);
  const raf = useRef<number | null>(null);
  const running = useRef(false);
  const pinned = useRef(false);

  const [revealed, setRevealed] = useState(false);

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

    size.current = { w, h };

    const cx = w / 2;
    const cy = h / 2;
    const maxR = Math.min(w, h) * 0.52;
    const n = Math.round(Math.max(52, Math.min(110, (w * h) / 1500)));
    const next: Mark[] = [];

    for (let i = 0; i < n; i++) {
      const ang = Math.random() * Math.PI * 2;
      // biased toward the centre so the crowd genuinely piles on top of you
      const rad = Math.pow(Math.random(), 1.55) * maxR;
      const hx = cx + Math.cos(ang) * rad * 1.18;
      const hy = cy + Math.sin(ang) * rad * 0.9;
      const push = 1.9 + Math.random() * 1.3;
      next.push({
        hx,
        hy,
        dx: Math.cos(ang) * (rad * push + w * 0.42) - Math.cos(ang) * rad * 1.18,
        dy: Math.sin(ang) * (rad * push + h * 0.42) - Math.sin(ang) * rad * 0.9,
        w: 12 + Math.random() * 52,
        h: 4 + Math.random() * 9,
        a: 0.3 + Math.random() * 0.55,
        ph: Math.random() * Math.PI * 2,
        sp: 0.55 + Math.random(),
        dr: 2 + Math.random() * 4,
      });
    }
    marks.current = next;
    return true;
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const cv = canvasRef.current;
    if (!wrap || !cv) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const draw = (t: number) => {
      reveal.current += (target.current - reveal.current) * 0.075;
      if (Math.abs(target.current - reveal.current) < 0.002) reveal.current = target.current;

      const { w, h } = size.current;
      const r = reveal.current;
      ctx.clearRect(0, 0, w, h);

      // you — underneath, only visible once the crowd moves off
      ctx.save();
      ctx.shadowColor = "rgba(198,242,78,.75)";
      ctx.shadowBlur = 10 + r * 22;
      ctx.fillStyle = "#C6F24E";
      ctx.fillRect(w / 2 - YOU_W / 2, h / 2 - YOU_H / 2, YOU_W, YOU_H);
      ctx.restore();

      for (const m of marks.current) {
        const bob = reduced ? 0 : Math.sin(t * 0.00045 * m.sp + m.ph) * m.dr;
        ctx.fillStyle = `rgba(141,145,121,${(m.a * (1 - r * 0.55)).toFixed(3)})`;
        ctx.fillRect(m.hx + m.dx * r, m.hy + m.dy * r + bob, m.w, m.h);
      }

      if (reduced && reveal.current === target.current) {
        running.current = false;
        raf.current = null;
        return;
      }
      raf.current = requestAnimationFrame(draw);
    };

    const stop = () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
      raf.current = null;
      running.current = false;
    };

    const start = () => {
      stop();
      if (!build()) return;
      running.current = true;
      raf.current = requestAnimationFrame(draw);
    };

    const kick = () => {
      if (!running.current) start();
    };

    const setTarget = (v: number) => {
      target.current = v;
      setRevealed(v > 0.5);
      kick();
    };

    const onEnter = (e: PointerEvent) => {
      if (e.pointerType === "touch" || pinned.current) return;
      setTarget(1);
    };
    const onLeave = (e: PointerEvent) => {
      if (e.pointerType === "touch" || pinned.current) return;
      setTarget(0);
    };
    const onClick = () => {
      pinned.current = !pinned.current;
      setTarget(pinned.current ? 1 : 0);
    };

    let resizeTimer: number | undefined;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(start, 180);
    };
    const onVisibility = () => (document.hidden ? stop() : kick());

    wrap.addEventListener("pointerenter", onEnter);
    wrap.addEventListener("pointerleave", onLeave);
    wrap.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    const io =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => entries.forEach((en) => (en.isIntersecting ? kick() : stop())),
            { threshold: 0.05 },
          )
        : null;
    io?.observe(wrap);

    start();
    if (document.fonts?.ready) void document.fonts.ready.then(start);

    return () => {
      stop();
      window.clearTimeout(resizeTimer);
      wrap.removeEventListener("pointerenter", onEnter);
      wrap.removeEventListener("pointerleave", onLeave);
      wrap.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      io?.disconnect();
    };
  }, [build]);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="u-field-mask absolute inset-y-0 left-0 -right-[10%] z-0 cursor-crosshair opacity-[0.42] md:left-[34%] md:-right-[8%] md:opacity-100"
    >
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />
      <span
        className={`pointer-events-none absolute left-1/2 top-1/2 -ml-[60px] -mt-[42px] hidden w-[120px] text-center font-cond text-[0.78rem] font-bold uppercase tracking-[0.24em] text-lime transition-opacity duration-500 md:block ${
          revealed ? "opacity-100" : "opacity-0"
        }`}
      >
        You
      </span>
      <span
        className={`pointer-events-none absolute left-1/2 top-1/2 -ml-[90px] mt-[34px] hidden w-[180px] text-center u-label-sm text-dim transition-opacity duration-300 md:block ${
          revealed ? "opacity-0" : "opacity-80"
        }`}
      >
        Hover to clear
      </span>
    </div>
  );
}
