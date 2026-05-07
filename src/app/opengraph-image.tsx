import { ogContentType, ogSize, ogImageResponse } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "BASS Trading — Mentorat Market Profile, Order Flow, Footprint";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImageResponse({
    title: "Comprendre les marches.\nPas les deviner.",
    category: "Mentorat",
    subtitle:
      "Market Profile, Order Flow, Footprint. 4.9/5 sur 126 avis. Eligible CPF.",
  });
}
