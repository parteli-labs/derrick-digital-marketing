import type { ComponentPropsWithoutRef } from "react";

/**
 * The Two Signals Rule: chartreuse means go. Never orange on a call to action.
 * Hover lifts into a hard 4px offset — the system's only shadow.
 */
const base =
  "inline-flex items-center gap-2.5 cursor-pointer font-cond font-bold uppercase tracking-[0.13em] " +
  "text-label border-[3px] border-lime transition-[transform,background-color,color,box-shadow] " +
  "duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 " +
  "hover:shadow-[4px_4px_0_var(--color-forest-2)] active:translate-x-0 active:translate-y-0 active:shadow-none";

const variants = {
  primary: "bg-lime text-ink",
  ghost: "bg-transparent text-lime hover:bg-lime hover:text-ink",
} as const;

const sizes = {
  default: "px-[22px] py-[13px]",
  compact: "px-4 py-2.5",
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
