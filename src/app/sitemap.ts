import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Phase 1 routes only. Blog list/detail routes and the remaining Phase 2 pages
 * get added here when they ship.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: Array<{ path: string; priority: number }> = [
    { path: "/", priority: 1 },
    { path: "/book", priority: 0.9 },
    { path: "/why-join-us", priority: 0.7 },
  ];

  return routes.flatMap(({ path, priority }) => {
    const en = `/en${path === "/" ? "" : path}`;
    return [
      {
        url: `${SITE.url}${path}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority,
        alternates: { languages: { "zh-Hant": `${SITE.url}${path}`, en: `${SITE.url}${en}` } },
      },
      {
        url: `${SITE.url}${en}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: priority - 0.1,
        alternates: { languages: { "zh-Hant": `${SITE.url}${path}`, en: `${SITE.url}${en}` } },
      },
    ];
  });
}
