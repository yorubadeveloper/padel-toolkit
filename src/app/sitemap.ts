import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://padeltoolkit.com";

  const tools = [
    "americano",
    "scoreboard",
    "drills",
    "side-picker",
    "quiz",
    "excuses",
    "court-finder",
    "rules",
    "shot-of-the-day",
    "bingo",
    "what-to-wear",
    "warm-up",
    "rating",
    "mvp",
  ];

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/tools`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...tools.map((tool) => ({
      url: `${base}/tools/${tool}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
