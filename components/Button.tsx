import type { ComponentPropsWithoutRef } from "react";

/**
 * The Two Signals Rule: Hazard Orange is the go signal and carries every call to
 * action; chartreuse is the accent that labels and marks. Hover lifts into a
 * hard 4px offset — the system's only shadow.
 *
 * Border colour and the hover offset live in the variants rather than the base.
 * Two utilities for the same property in one class string resolve by stylesheet
 * order, not by the order they were written, so a variant cannot reliably
 * override a base it shares a property with.
 */
const base =
  "inline-flex items-center gap-2.5 cursor-pointer font-cond font-bold uppercase tracking-[0.13em] " +
  "text-label border-[3px] transition-[transform,background-color,color,box-shadow] " +
  "duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 " +
  "active:translate-x-0 active:translate-y-0 active:shadow-none";

const variants = {
  // Ink on orange is 6.3:1; paper on orange is 2.7:1 and never passed.
  primary: "bg-orange text-ink border-orange hover:shadow-[4px_4px_0_var(--color-orange-2)]",
  ghost:
    "bg-transparent text-lime border-lime hover:bg-lime hover:text-ink " +
    "hover:shadow-[4px_4px_0_var(--color-forest-2)]",
} as const;

const sizes = {
  default: "px-[22px] py-[13px]",
  compact: "px-4 py-[11px]",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

export function ButtonLink({
  variant = "primary",
  size = "default",
  className = "",
  ...props
}: ComponentPropsWithoutRef<"a"> & { variant?: Variant; size?: Size }) {
  return <a {...props} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} />;
}

export function Button({
  variant = "primary",
  size = "default",
  className = "",
  ...props
}: ComponentPropsWithoutRef<"button"> & { variant?: Variant; size?: Size }) {
  return <button {...props} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} />;
}
