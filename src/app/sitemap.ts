import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { INSIGHT_SLUGS } from "@/lib/insights";

/** Every route in the site, zh-Hant + EN, plus the insight article pages. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: Array<{ path: string; priority: number }> = [
    { path: "/", priority: 1 },
    { path: "/why-join-us", priority: 0.9 },
    { path: "/our-story", priority: 0.8 },
    { path: "/career-path", priority: 0.9 },
    { path: "/achievements", priority: 0.7 },
    { path: "/gba", priority: 0.8 },
    { path: "/clients", priority: 0.7 },
    { path: "/insights", priority: 0.7 },
    { path: "/events", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
    { path: "/book", priority: 0.9 },
    ...INSIGHT_SLUGS.map((slug) => ({ path: `/insights/${slug}`, priority: 0.5 })),
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
