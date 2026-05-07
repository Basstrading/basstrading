import { ogContentType, ogSize, ogImageResponse } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Volume Profile — Hub thématique BASS Trading";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImageResponse({
    title: "Volume Profile.\nLe volume distribué par prix.",
    category: "Hub thématique",
    subtitle:
      "HVN, LVN, Naked POC, Session/Daily/Composite — niveaux institutionnels.",
  });
}
