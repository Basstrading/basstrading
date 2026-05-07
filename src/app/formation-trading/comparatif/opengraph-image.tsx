import { ogContentType, ogSize, ogImageResponse } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Comparatif Formation Trading 2026 — 5 formats comparés";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImageResponse({
    title: "Comparatif Formation Trading.\n5 formats comparés.",
    category: "Comparatif",
    subtitle:
      "Autodidacte, VOD, en ligne CPF, présentiel, mentorat premium — analyse objective.",
  });
}
