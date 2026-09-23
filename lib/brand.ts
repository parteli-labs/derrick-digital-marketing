/**
 * Literal brand values for renderers that cannot resolve CSS custom properties.
 *
 * Satori — which draws the favicon and the Open Graph card — runs with no
 * stylesheet and no `:root`, so `var(--color-gold)` is unavailable there. These
 * are the only places in the project allowed to carry a literal. `app/globals.css`
 * remains the source of truth; keep these in step with it.
 *
 * Anything rendered in a browser reads the token instead.
 */
export const BRAND = {
  ink: "#0A0D0B",
  gold: "#C9A55C",
  paper: "#F2F1EC",
  dim: "#7E8680",
  forest: "#006039",
} as const;
