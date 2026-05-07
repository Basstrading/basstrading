import { ogContentType, ogSize, ogImageResponse } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Market Profile — Hub thématique BASS Trading";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImageResponse({
    title: "Market Profile.\nLa carte de la valeur.",
    category: "Hub thématique",
    subtitle:
      "Value Area, POC, Initial Balance, types de journées, lecture TPO.",
  });
}
