import { notFound } from "next/navigation";
import { articles } from "@/content/blog/_meta";
import { ogContentType, ogSize, ogImageResponse } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "BASS Trading — Article";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return ogImageResponse({
    title: article.title,
    category: article.category,
    subtitle: article.shortDescription,
  });
}
