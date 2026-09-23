import type { ComponentPropsWithoutRef } from "react";

/**
 * Gold fill is the one call to action; the text variant is the quieter route
 * beside it. The arrow, when a label carries one, nudges right on hover — the
 * only movement a button makes. There are no shadows and no lift.
 *
 * Colours live in the variants rather than the base. Two utilities for the same
 * property in one class string resolve by stylesheet order, not by the order
 * they were written, so a variant cannot reliably override a base it shares a
 * property with.
 */
const base =
  "group/btn inline-flex items-center gap-3.5 whitespace-nowrap cursor-pointer text-body-sm font-medium " +
  "tracking-[0.04em] transition-colors duration-300";

const variants = {
  primary: "bg-gold text-ink hover:bg-paper",
  text: "bg-transparent text-paper hover:text-gold",
} as const;

const sizes = {
  default: "px-[26px] py-[15px]",
  compact: "px-[18px] py-[11px]",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

const cls = (variant: Variant, size: Size, className: string) =>
  `${base} ${variants[variant]} ${variant === "text" ? "px-0 py-[15px]" : sizes[size]} ${className}`;

/** The trailing arrow. Kept out of the label so screen readers do not announce it. */
export function Arrow() {
  return (
    <span aria-hidden="true" className="transition-transform duration-300 ease-enter group-hover/btn:translate-x-1">
      →
    </span>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "default",
  className = "",
  ...props
}: ComponentPropsWithoutRef<"a"> & { variant?: Variant; size?: Size }) {
  return <a {...props} className={cls(variant, size, className)} />;
}

export function Button({
  variant = "primary",
  size = "default",
  className = "",
  ...props
}: ComponentPropsWithoutRef<"button"> & { variant?: Variant; size?: Size }) {
  return <button {...props} className={cls(variant, size, className)} />;
}
