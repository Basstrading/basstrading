import type { MetadataRoute } from "next";
import { articles } from "@/content/blog/_meta";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = articles.map((a) => ({
    url: `${SITE.url}/blog/${a.slug}/`,
    lastModified: new Date(a.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${SITE.url}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE.url}/malaga/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/blog/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogUrls,
    {
      url: `${SITE.url}/cgv/`,
      lastModified: new Date("2026-03-27"),
      priority: 0.2,
    },
    {
      url: `${SITE.url}/mentions-legales/`,
      lastModified: new Date("2026-03-27"),
      priority: 0.2,
    },
    {
      url: `${SITE.url}/confidentialite/`,
      lastModified: new Date("2026-03-27"),
      priority: 0.2,
    },
  ];
}
