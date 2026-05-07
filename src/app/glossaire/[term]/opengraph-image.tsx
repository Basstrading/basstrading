import { notFound } from "next/navigation";
import { terms, getTermBySlug } from "@/content/glossaire/_data";
import { ogContentType, ogSize, ogImageResponse } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Glossaire Trading — BASS";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return terms.map((t) => ({ term: t.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term: slug } = await params;
  const t = getTermBySlug(slug);
  if (!t) notFound();

  const titleBase = t.acronym ? `${t.acronym}\n${t.term}` : t.term;

  return ogImageResponse({
    title: titleBase,
    category: "Glossaire",
    subtitle: t.short,
  });
}
