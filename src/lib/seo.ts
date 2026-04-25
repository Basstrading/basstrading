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
  const image = ogImage || `${SITE.url}/images/bass-presenting.jpg`;

  // Homepage uses absolute title, other pages use the template from root layout
  const titleValue = isHomepage
    ? { absolute: title }
    : title;
  const ogTitle = isHomepage ? title : `${title} | ${SITE.name}`;

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
      images: [{ url: image, width: 1200, height: 630 }],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
