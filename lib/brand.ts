/**
 * Literal brand values for renderers that cannot resolve CSS custom properties.
 *
 * Satori — which draws the favicon and the Open Graph card — runs with no
 * stylesheet and no `:root`, so `var(--color-lime)` is unavailable there. These
 * are the only places in the project allowed to carry a literal. `app/globals.css`
 * remains the source of truth; keep these in step with it.
 *
 * Anything rendered in a browser reads the token instead.
 */
export const BRAND = {
  ink: "#0C0D0A",
  lime: "#C6F24E",
  paper: "#F2F0E6",
  dim: "#8D9179",
  orange: "#FF5A1F",
} as const;
