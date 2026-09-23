import { DerrickMark } from "./DerrickMark";

/**
 * The brand lockup: derrick mark plus a single tracked line of capitals, at a
 * fixed size. The size is a property of the lockup, not a step on the type
 * ramp — it should not rescale with the document's reading sizes.
 */
export function Wordmark() {
  return (
    <span className="flex items-center gap-3">
      <DerrickMark className="block h-6 w-[18px] shrink-0" />
      <span className="whitespace-nowrap text-[0.75rem] font-semibold uppercase tracking-[0.16em] sm:text-[0.875rem] sm:tracking-[0.2em]">
        Derrick Digital
      </span>
    </span>
  );
}
