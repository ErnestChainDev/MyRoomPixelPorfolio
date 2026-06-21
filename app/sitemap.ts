import type { MetadataRoute } from "next";

const siteUrl = "https://ernest-windel-dreo-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-06-21"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
