import type { MetadataRoute } from "next";
import { articles } from "@/content/blog/_meta";
import { villes } from "@/content/pages/villes/_data";
import { terms } from "@/content/glossaire/_data";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = articles.map((a) => ({
    url: `${SITE.url}/blog/${a.slug}/`,
    lastModified: new Date(a.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const villeUrls = villes.map((v) => ({
    url: `${SITE.url}/formation-trading/${v.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const glossaireUrls = terms.map((t) => ({
    url: `${SITE.url}/glossaire/${t.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
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
    {
      url: `${SITE.url}/formation-trading/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/sebastien-constant/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE.url}/avis-bass-trading/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE.url}/prix-formation-trading/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE.url}/bass-trading-vs-xeilos/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE.url}/bass-trading-arnaque-ou-pas/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE.url}/formation-trading-qui-marche/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE.url}/market-profile/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/order-flow/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/footprint/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/volume-profile/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE.url}/glossaire/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...glossaireUrls,
    ...villeUrls,
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
