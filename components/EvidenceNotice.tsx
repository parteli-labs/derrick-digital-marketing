import { evidenceLedger } from "@/lib/content";
import { outstanding, SHOW_UNVERIFIED } from "@/lib/evidence";

/**
 * Development-only. Lists what the client still owes and states plainly that
 * production is already withholding it, so the gap cannot be forgotten between
 * the build looking finished and the page actually being launchable.
 */
export function EvidenceNotice() {
  if (!SHOW_UNVERIFIED) return null;
  const items = outstanding(evidenceLedger);
  if (items.length === 0) return null;

  return (
    <details className="fixed bottom-0 left-0 right-0 z-[100] border-t-[3px] border-orange bg-ink text-paper">
      <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-2.5 [&::-webkit-details-marker]:hidden">
        <span className="border-2 border-orange px-2 py-0.5 u-label-sm font-bold text-orange">
          Not launchable
        </span>
        <span className="u-label-sm text-muted">
          {items.length} item{items.length === 1 ? "" : "s"} awaiting the client — withheld from production
        </span>
        <span className="ml-auto u-label-sm text-dim">Details</span>
      </summary>
      <ul className="flex list-none flex-col gap-2.5 border-t-2 border-field px-4 py-3.5">
        {items.map((i) => (
          <li key={i.label} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <b className="u-label-sm font-bold text-lime">{i.label}</b>
            <span className="max-w-[76ch] text-body-sm leading-[1.5] text-muted">{i.needs}</span>
          </li>
        ))}
      </ul>
    </details>
  );
}
