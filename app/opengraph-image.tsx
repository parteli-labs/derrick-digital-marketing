import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { markDataUri } from "./_assets/mark";
import { BRAND } from "@/lib/brand";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Derrick Digital — three names come back. Be one of them.";

/**
 * The hero lockup, rendered as the share card. Big Shoulders Black is vendored
 * rather than fetched at build time: the display face is the identity, and a
 * network hiccup must not silently swap it for a system sans.
 */
export default async function OpengraphImage() {
  const display = await readFile(join(process.cwd(), "app/_assets/BigShoulders-Black.ttf"));

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
          fontFamily: "Big Shoulders",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markDataUri({ size: 44 })} width={44} height={57} alt="" />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.82 }}>
            <span style={{ fontSize: 34, color: BRAND.paper, letterSpacing: 1 }}>DERRICK</span>
            <span style={{ fontSize: 34, color: BRAND.lime, letterSpacing: 1 }}>DIGITAL</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.86 }}>
          <span style={{ fontSize: 132, color: BRAND.paper }}>THREE NAMES</span>
          <span style={{ fontSize: 132, color: BRAND.paper }}>COME BACK.</span>
          <div style={{ display: "flex", alignItems: "center", marginTop: 8 }}>
            <span
              style={{
                fontSize: 132,
                color: BRAND.ink,
                background: BRAND.lime,
                padding: "0 14px",
                transform: "skewX(-6deg)",
              }}
            >
              BE ONE
            </span>
            <span style={{ fontSize: 132, color: BRAND.paper, marginLeft: 24 }}>OF THEM.</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 27, color: BRAND.dim, letterSpacing: 4 }}>
            GEO · SEO · BRAND FOR THE OIL PATCH
          </span>
          <span style={{ fontSize: 27, color: BRAND.orange, letterSpacing: 4 }}>ALBERTA · WCSB</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Big Shoulders", data: display, weight: 900, style: "normal" }],
    },
  );
}
