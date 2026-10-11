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
          background: "#0c0c0e",
          color: "#e7e7ea",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-0.03em" }}>Giwa Muhammad</div>
          <div style={{ fontSize: 38, marginTop: 16, color: "#a1a1aa" }}>Senior Full-Stack Engineer</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 28, color: "#82828c" }}>
          <div>Founder & CTO, SmartEdu</div>
          <div style={{ marginTop: 8, color: "#7aa2ff" }}>mgiwa.vercel.app</div>
        </div>
      </div>
    ),
    size
  );
}
