import { ogContentType, ogSize, ogImageResponse } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Séminaire Trading Malaga 2026 — BASS";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImageResponse({
    title: "Séminaire Malaga.\n28 sept. — 2 oct. 2026.",
    category: "Séminaire intensif",
    subtitle:
      "5 jours. 20 places maximum. Cours le matin, trading live l'après-midi.",
  });
}
