import { BRAND } from "@/lib/brand";

/**
 * The derrick mark as a standalone SVG string, for contexts that cannot render
 * React components — favicon and Open Graph image generation. Kept in step with
 * components/DerrickMark.tsx by hand; it is nineteen lines and changes rarely.
 */
export function markSvg({ size = 40, stroke = BRAND.gold }: { size?: number; stroke?: string } = {}) {
  const h = Math.round((size / 40) * 52);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${h}" viewBox="0 0 40 52" fill="none" stroke="${stroke}" stroke-width="2.2">
  <path d="M6 50 L15.5 4 M34 50 L24.5 4"/>
  <path d="M13.4 15H26.6M11.2 26H28.8M9 37H31"/>
  <path d="M13.4 15 L28.8 26 M26.6 15 L11.2 26 M11.2 26 L31 37 M28.8 26 L9 37 M9 37 L34 50 M31 37 L6 50" stroke="${stroke}" stroke-opacity=".4" stroke-width="1.5"/>
</svg>`;
}

export const markDataUri = (opts?: { size?: number; stroke?: string }) =>
  `data:image/svg+xml;base64,${Buffer.from(markSvg(opts)).toString("base64")}`;
