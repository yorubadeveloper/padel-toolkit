import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Padel Toolkit - Simple tools for padel players";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAFAF8",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "#2D8B4E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "36px",
              fontWeight: 800,
            }}
          >
            PT
          </div>
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#1a1a1a",
            letterSpacing: "-2px",
            marginBottom: "16px",
          }}
        >
          Padel{" "}
          <span style={{ color: "#2D8B4E" }}>Toolkit</span>
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#666",
            maxWidth: "600px",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Simple, fun tools for padel players. All instant, all free.
        </div>
      </div>
    ),
    { ...size }
  );
}
