/**
 * Insight article slugs.
 *
 * Slugs are language-independent so zh-Hant and EN pages can never drift:
 * the text for each slug lives under `PAGES[lang].insightPosts`.
 *
 * `group`     — "insight" = recruitment opinion, "column" = 陳總專欄 (director column)
 * `slot`      — "calendar" marks the Month-1 content-calendar posts (a plan label,
 *               not a publication date).
 */
export const INSIGHT_POSTS = [
  // Recruitment opinion posts
  { slug: "one-hour-living-circle", group: "insight", slot: "" },
  { slug: "three-questions-before-switching", group: "insight", slot: "" },
  { slug: "mdrt-is-not-the-finish-line", group: "insight", slot: "" },
  { slug: "aia-premier-academy-two-weeks", group: "insight", slot: "" },
  // Month-1 content-calendar posts
  { slug: "career-mindset-beyond-effort", group: "insight", slot: "calendar" },
  { slug: "gba-cross-border-trend", group: "insight", slot: "calendar" },
  { slug: "success-story-50-to-500", group: "insight", slot: "calendar" },
  // 陳總專欄 — director columns (real articles from the current site)
  { slug: "directors-quote-effort", group: "column", slot: "" },
  { slug: "directors-quote-barbie", group: "column", slot: "" },
  { slug: "directors-quote-goalposts", group: "column", slot: "" },
  { slug: "directors-quote-mandela", group: "column", slot: "" },
  { slug: "directors-quote-income-contribution", group: "column", slot: "" },
  { slug: "directors-quote-sharpest-knife", group: "column", slot: "" },
] as const;

export type InsightSlug = (typeof INSIGHT_POSTS)[number]["slug"];
export type InsightGroup = "insight" | "column";

export const INSIGHT_SLUGS: string[] = INSIGHT_POSTS.map((p) => p.slug);
