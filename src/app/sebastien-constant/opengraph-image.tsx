import { ogContentType, ogSize, ogImageResponse } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Sebastien Constant — Trader, Formateur, Fondateur BASS Trading";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImageResponse({
    title: "Sebastien Constant.\nTrader. Formateur. Auteur.",
    category: "Auteur",
    subtitle:
      "10+ ans de trading. Spécialiste Market Profile, Order Flow, Footprint. Créateur de x-trade.ai.",
  });
}
