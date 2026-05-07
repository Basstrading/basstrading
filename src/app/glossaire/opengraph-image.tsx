import { ogContentType, ogSize, ogImageResponse } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Glossaire Trading — BASS Trading";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImageResponse({
    title: "Glossaire Trading.\nLe vocabulaire institutionnel.",
    category: "Référence",
    subtitle:
      "POC, VAH, VAL, CVD, Delta, VWAP, HVN, LVN, Imbalance, Absorption, TPO, Naked POC.",
  });
}
