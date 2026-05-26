import type { MetadataRoute } from "next";
import { blogArticles } from "./blog/articles";

export const dynamic = "force-static";

const siteUrl = "https://archepattern.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-26");

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9
    },
    ...blogArticles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
