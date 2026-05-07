import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

interface OgOptions {
  title: string;
  category?: string;
  subtitle?: string;
  author?: string;
}

/**
 * Branded OG image (1200x630) for BASS Trading.
 * Dark theme with gold accent — works for all page types.
 * Uses system fonts (no remote font fetch) for fastest build-time
 * generation under output:export.
 */
export function ogImageResponse({
  title,
  category = "BASS Trading",
  subtitle,
  author = "Sebastien Constant",
}: OgOptions) {
  // Hard cap title at ~140 chars to avoid overflow.
  const safeTitle = title.length > 140 ? title.slice(0, 137) + "..." : title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "radial-gradient(ellipse at top right, #1a1a1f 0%, #0a0a0c 50%, #060608 100%)",
          padding: "64px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Gold accent line top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 4,
            background:
              "linear-gradient(90deg, transparent 0%, #C9A84C 30%, #C9A84C 70%, transparent 100%)",
          }}
        />

        {/* Header row: BASS wordmark + category */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 54,
                height: 54,
                background: "#1D1D1F",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                fontWeight: 900,
                color: "#fff",
              }}
            >
              B
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: "#fff",
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              BASS Trading
            </div>
          </div>
          <div
            style={{
              padding: "8px 18px",
              border: "1.5px solid rgba(201, 168, 76, 0.5)",
              borderRadius: 999,
              fontSize: 16,
              fontWeight: 700,
              color: "#C9A84C",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {category}
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: "92%",
          }}
        >
          <div
            style={{
              fontSize: safeTitle.length > 80 ? 52 : safeTitle.length > 50 ? 64 : 76,
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {safeTitle}
          </div>
          {subtitle ? (
            <div
              style={{
                fontSize: 26,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.4,
                fontWeight: 400,
              }}
            >
              {subtitle.length > 110 ? subtitle.slice(0, 107) + "..." : subtitle}
            </div>
          ) : null}
        </div>

        {/* Spacer */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Footer row: author + URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.55)",
              fontWeight: 500,
            }}
          >
            {author}
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#C9A84C",
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            basstrading.fr
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
    }
  );
}
