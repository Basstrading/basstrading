import { ogContentType, ogSize, ogImageResponse } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Footprint Chart — Hub thématique BASS Trading";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImageResponse({
    title: "Footprint Chart.\nLe volume éclaté par prix.",
    category: "Hub thématique",
    subtitle:
      "Delta, imbalance, absorption, CVD — lire l'agression institutionnelle.",
  });
}
