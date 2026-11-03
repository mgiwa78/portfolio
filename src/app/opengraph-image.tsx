import { ImageResponse } from "next/og";

export const alt = "Giwa Muhammad, Senior Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "80px",
          background: "#01010d",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-0.03em" }}>Giwa Muhammad</div>
          <div style={{ fontSize: 38, marginTop: 16, color: "#c4c4d0" }}>Senior Full-Stack Engineer</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 28, color: "#8b8b9c" }}>
          <div>Founder & CTO, SmartEdu</div>
          <div style={{ marginTop: 8, color: "#a88bff" }}>mgiwa.vercel.app</div>
        </div>
      </div>
    ),
    size
  );
}
