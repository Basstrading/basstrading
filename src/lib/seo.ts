import type { Metadata } from "next";
import { SITE } from "./constants";

interface SeoOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateSeoMetadata({
  title,
  description,
  path,
  ogImage,
  type = "website",
  noIndex = false,
  publishedTime,
  modifiedTime,
}: SeoOptions): Metadata {
  const url = `${SITE.url}${path}`;
  const isHomepage = path === "/";

  // Homepage uses absolute title, other pages use the template from root layout
  const titleValue = isHomepage ? { absolute: title } : title;
  const ogTitle = isHomepage ? title : `${title} | ${SITE.name}`;

  // When ogImage is not explicitly provided, omit images from the metadata
  // so the file-based opengraph-image.tsx convention populates them
  // automatically. Explicit ogImage still wins when passed.
  const explicitImage = ogImage
    ? [{ url: ogImage, width: 1200, height: 630 }]
    : undefined;

  return {
    title: titleValue,
    description,
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type,
      ...(explicitImage && { images: explicitImage }),
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
