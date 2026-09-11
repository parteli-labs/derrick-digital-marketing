import { DerrickMark } from "./DerrickMark";

/**
 * The brand lockup: derrick mark plus the stacked wordmark, at a fixed size.
 *
 * The 1.2rem is a property of the lockup, not a step on the type ramp — the
 * wordmark is drawn artwork that happens to be set in type, and it should not
 * rescale with the document's reading sizes. Keeping it here stops it reading as
 * an off-ramp literal in two separate files.
 */
export function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <DerrickMark className="block h-[34px] w-[26px] shrink-0" />
      <span className="font-display text-[1.2rem]/[0.82] font-black uppercase">
        <span className="block">Derrick</span>
        <span className="block text-lime">Digital</span>
      </span>
    </span>
  );
}
