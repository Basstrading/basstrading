import { ogContentType, ogSize, ogImageResponse } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Order Flow — Hub thématique BASS Trading";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImageResponse({
    title: "Order Flow.\nLe flux d'ordres en direct.",
    category: "Hub thématique",
    subtitle:
      "DOM, Tape Reading, Footprint, CVD, absorption, imbalance, spoofing.",
  });
}
