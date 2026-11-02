import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/pricing";

export const alt = "Mindak Creative Agency — Tarifs 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#F1EEE8";
const INK = "#0E0E0E";
const INK_2 = "#5C5A55";
const LIME = "#E3F06B";

export default async function Image() {
  const dir = join(process.cwd(), "src/app/og-fonts");
  const [semi, medium, italic] = await Promise.all([
    readFile(join(dir, "InterTight-SemiBold.ttf")),
    readFile(join(dir, "InterTight-Medium.ttf")),
    readFile(join(dir, "InstrumentSerif-Italic.ttf")),
  ]);

  const meta = { fontFamily: "Inter Tight", fontWeight: 500, fontSize: 18, letterSpacing: 0.6, color: INK_2 } as const;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: PAPER,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "28px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", ...meta }}>
          <span>{site.studio.toUpperCase()}</span>
          <span>{site.year}</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 52px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Inter Tight",
              fontWeight: 600,
              fontSize: 132,
              lineHeight: 0.88,
              letterSpacing: -5.5,
              color: INK,
            }}
          >
            <span>Mindak</span>
            <span>Creative</span>
            <span>Agency©</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", paddingBottom: 12 }}>
            <span
              style={{
                fontFamily: "Instrument Serif",
                fontStyle: "italic",
                fontSize: 84,
                lineHeight: 1,
                color: INK,
                background: LIME,
                padding: "0 14px",
                transform: "rotate(-1.5deg)",
              }}
            >
              Tarifs 2026
            </span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", ...meta }}>
          <span>{site.rights.toUpperCase()}</span>
          <span>{site.phonePrefix}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter Tight", data: semi, weight: 600, style: "normal" },
        { name: "Inter Tight", data: medium, weight: 500, style: "normal" },
        { name: "Instrument Serif", data: italic, weight: 400, style: "italic" },
      ],
    },
  );
}
