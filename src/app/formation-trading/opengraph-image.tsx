import { ogContentType, ogSize, ogImageResponse } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Formation Trading en France — Présentiel + CPF";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImageResponse({
    title: "Formation Trading\nen France.",
    category: "Présentiel + CPF",
    subtitle:
      "20 villes. 8 places maximum par session. Éligible CPF via EMSCA Qualiopi.",
  });
}
