import { notFound } from "next/navigation";
import { villes, getVilleBySlug } from "@/content/pages/villes/_data";
import { ogContentType, ogSize, ogImageResponse } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Formation Trading — Présentiel BASS";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return villes.map((v) => ({ ville: v.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ ville: string }>;
}) {
  const { ville: slug } = await params;
  const v = getVilleBySlug(slug);
  if (!v) notFound();

  return ogImageResponse({
    title: `Formation Trading\n${v.ville}.`,
    category: `Présentiel — ${v.region}`,
    subtitle:
      "8 places maximum. Animée par Sebastien Constant. Éligible CPF.",
  });
}
