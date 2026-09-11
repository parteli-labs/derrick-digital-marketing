/**
 * Product Principle 1: never dress a placeholder as proof.
 *
 * Every figure and contact detail on this site passes through here. Anything
 * the client has not supplied is withheld from the production build — the
 * component receives `null` and renders nothing, rather than a number nobody
 * can stand behind. In development the same value renders behind a visible
 * marker, so whoever is preparing the launch keeps seeing the outstanding list
 * instead of forgetting it.
 *
 * The rule this replaces: `lib/content.ts` used to annotate placeholders in
 * comments and a `verified` flag that nothing read, so every one of them
 * shipped anyway.
 */

export type Evidence<T> = {
  readonly value: T;
  readonly verified: boolean;
  /** What has to land for this to become verified. Listed in the dev notice. */
  readonly needs?: string;
  /** Short name for the dev notice. */
  readonly label?: string;
};

/** Client-supplied, or independently checkable. Safe to publish. */
export const confirmed = <T>(value: T): Evidence<T> => ({ value, verified: true });

/** Authored to make the design concrete. Never reaches production. */
export const awaiting = <T>(value: T, label: string, needs: string): Evidence<T> => ({
  value,
  verified: false,
  label,
  needs,
});

/**
 * Development shows placeholders (marked); production withholds them.
 * Set NEXT_PUBLIC_SHOW_UNVERIFIED=1 to preview the filled-in page in a build —
 * for client review only, never for a live deploy.
 */
export const SHOW_UNVERIFIED =
  process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_SHOW_UNVERIFIED === "1";

/** The publishable value, or `null` when the claim is not ours to make yet. */
export function shown<T>(e: Evidence<T>): T | null {
  return e.verified || SHOW_UNVERIFIED ? e.value : null;
}

/** True when this value is standing in and is visibly marked as such. */
export const isProvisional = (e: Evidence<unknown>) => !e.verified && SHOW_UNVERIFIED;

/** Everything still outstanding, for the development notice. */
export function outstanding(items: readonly Evidence<unknown>[]) {
  return items.filter((e) => !e.verified).map((e) => ({ label: e.label ?? "—", needs: e.needs ?? "" }));
}
