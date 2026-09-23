import { ImageResponse } from "next/og";
import { markDataUri } from "./_assets/mark";
import { BRAND } from "@/lib/brand";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Derrick Digital - Bring your brand into production.";

/**
 * The hero headline, rendered as the share card. It is set in the sans that
 * ships inside next/og rather than Libre Franklin: Satori needs a static TTF,
 * and fetching one at build time would let a network hiccup silently change the
 * card. Vendor a Libre Franklin TTF into app/_assets to match the page exactly.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BRAND.ink,
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markDataUri({ size: 30 })} width={30} height={39} alt="" />
          <span style={{ fontSize: 24, color: BRAND.paper, letterSpacing: 5 }}>DERRICK DIGITAL</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1, letterSpacing: -4 }}>
          <span style={{ fontSize: 112, color: BRAND.paper }}>Bring your brand</span>
          <span style={{ fontSize: 112, color: BRAND.gold }}>into production.</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `1px solid ${BRAND.forest}`,
            paddingTop: 26,
          }}
        >
          <span style={{ fontSize: 22, color: BRAND.dim, letterSpacing: 4 }}>GEO · SEO · BRAND</span>
          <span style={{ fontSize: 22, color: BRAND.dim, letterSpacing: 4 }}>ALBERTA, CANADA</span>
        </div>
      </div>
    ),
    size,
  );
}
