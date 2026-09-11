import { ImageResponse } from "next/og";
import { markDataUri } from "./_assets/mark";
import { BRAND } from "@/lib/brand";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: BRAND.ink,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markDataUri({ size: 36 })} width={36} height={47} alt="" />
      </div>
    ),
    size,
  );
}
