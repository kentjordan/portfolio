import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// The link preview on Facebook, LinkedIn, X and the like. Without it they
// scrape the hero photo (me.png) instead. Generated once at build time, and
// used by every page, since none sets its own.

export const alt = "Kent John B. Jordan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Anton is the section-heading font. ImageResponse can't read next/font's
  // woff2 files, so the TTF lives in src/assets/fonts (OFL licensed).
  const anton = await readFile(
    join(process.cwd(), "src/assets/fonts/Anton-Regular.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
        }}>
        {/* The section headings' gradient: light on the left, #0ED2F7 on
            the right. */}
        <div
          style={{
            fontFamily: "Anton",
            fontSize: 128,
            backgroundImage: "linear-gradient(to left, #0ED2F7, #B2FEFA)",
            backgroundClip: "text",
            color: "transparent",
          }}>
          Kent John B. Jordan
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Anton", data: anton, style: "normal", weight: 400 }],
    },
  );
}
