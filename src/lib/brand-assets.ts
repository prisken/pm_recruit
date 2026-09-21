import type { Lang } from "@/lib/site";

/**
 * Anderson's delivered brand asset set (2026-09-21) — files copied to
 * `/public/images/brand/`, 1× + `@2x` WebP pairs kept intact.
 *
 * Alt text is reproduced VERBATIM from the delivered `MANIFEST.md`.
 * Do not rewrite it: it is the only place that tells a screen-reader user
 * which chips and portraits are placeholders.
 *
 * Some artwork carries baked-in sample copy (pillar one-liners, ladder stage
 * names, blog titles) and is labelled as such on the artwork itself.
 */

export type BrandImage = {
  /** 1× file under /public (the `@2x` sibling is derived by AssetImage) */
  src: string;
  /** intrinsic size of the 1× file — passed to <img> to prevent layout shift */
  width: number;
  height: number;
  alt: { zh: string; en: string };
};

const BASE = "/images/brand";

export const BRAND = {
  heroDesktop: {
    src: `${BASE}/hero-desktop.webp`,
    width: 1920,
    height: 1080,
    alt: {
      en: "Illustration of an advisory team standing together at dusk before a Greater Bay Area skyline, with a gold rail arc curving toward High Speed Rail West Kowloon; the left half is deliberately left empty for the page headline.",
      zh: "黃昏時分，顧問團隊並肩立於大灣區天際線前，金色鐵路弧線伸延至高鐵西九龍；左半畫面刻意留白，預留作頁面標題。",
    },
  },
  heroMobile: {
    src: `${BASE}/hero-mobile.webp`,
    width: 828,
    height: 1200,
    alt: {
      en: "Portrait hero: an advisory team silhouetted before a Greater Bay Area skyline at dusk, with a gold rail arc above them; the upper half is deliberately left empty for the headline.",
      zh: "直向主視覺：顧問團隊剪影立於黃昏的大灣區天際線前，上方為金色鐵路弧線；上半部分刻意留白，預留作標題。",
    },
  },
  gbaSection: {
    src: `${BASE}/gba-section.webp`,
    width: 1600,
    height: 900,
    alt: {
      en: 'Schematic map of the Greater Bay Area with one-hour living-circle rings radiating from the High Speed Rail West Kowloon hub to Shenzhen, Dongguan, Guangzhou and Foshan, and a dashed bridge link to Zhuhai. Captioned "illustrative map — not to scale".',
      zh: "大灣區示意圖：以高鐵西九龍為樞紐，一圈圈顯示「一小時生活圈」，連接深圳、東莞、廣州及佛山，並以虛線標示往珠海的橋樑連接。圖上註明「示意圖，非按比例」。",
    },
  },
  pillars: {
    income: {
      src: `${BASE}/pillar-income.webp`,
      width: 720,
      height: 720,
      alt: {
        en: "Icon card for income prospects — four ascending gold bars beneath a rising arrow, titled 收入前景 / INCOME.",
        zh: "收入前景圖示卡：四根向上遞增的金色柱狀圖與上升箭頭，標題「收入前景 / INCOME」。",
      },
    },
    gbaAccess: {
      src: `${BASE}/pillar-gba-access.webp`,
      width: 720,
      height: 720,
      alt: {
        en: "Icon card for Greater Bay Area access — a gold rail arc with three station dots above a simplified skyline, titled 大灣區機遇 / GBA ACCESS.",
        zh: "大灣區機遇圖示卡：金色鐵路弧線與三個站點圓點，下方為簡化天際線，標題「大灣區機遇 / GBA ACCESS」。",
      },
    },
    backoffice: {
      src: `${BASE}/pillar-backoffice.webp`,
      width: 720,
      height: 720,
      alt: {
        en: "Icon card for back-office support — three stacked translucent planes beneath an upward chevron, titled 後勤支援 / BACK-OFFICE SUPPORT.",
        zh: "後勤支援圖示卡：三層堆疊半透明層板，上方為向上箭頭，標題「後勤支援 / BACK-OFFICE SUPPORT」。",
      },
    },
    career: {
      src: `${BASE}/pillar-career.webp`,
      width: 720,
      height: 720,
      alt: {
        en: "Icon card for career progression — four ascending steps with milestone dots, titled 職涯階梯 / CAREER LADDER.",
        zh: "職涯階梯圖示卡：四級向上階梯與里程碑圓點，標題「職涯階梯 / CAREER LADDER」。",
      },
    },
  },
  careerLadder: {
    src: `${BASE}/career-ladder.webp`,
    width: 1200,
    height: 1500,
    alt: {
      en: "Bilingual career-path infographic with three ascending stages — 核心階段 FOUNDATION, 發展階段 GROWTH and 領導階段 LEADERSHIP — each listing three qualitative development milestones.",
      zh: "雙語職涯發展路徑資訊圖：三個向上階段 — 核心階段 FOUNDATION、發展階段 GROWTH、領導階段 LEADERSHIP，每階段列出三項發展重點。",
    },
  },
  branchMap: {
    src: `${BASE}/branch-map.webp`,
    width: 1600,
    height: 1000,
    alt: {
      en: 'Stylised map of Hong Kong marking three recruitment branches — Lo Wu, Lok Ma Chau and the High Speed Rail West Kowloon hub. Captioned "illustrative map — not to scale".',
      zh: "香港示意地圖，標示三個招募據點：羅湖、落馬洲，以及高鐵西九龍樞紐。圖上註明「示意圖，非按比例」。",
    },
  },
  trustBadges: {
    src: `${BASE}/trust-badges.webp`,
    width: 1440,
    height: 240,
    alt: {
      en: "Placeholder trust-badge strip: six dashed outlines for MDRT, COT, TOT, the company mark, partners and awards, each labelled 示範佔位 · PLACEHOLDER because the official marks have not been supplied.",
      zh: "信任標誌列示意佔位：六個虛線框分別為 MDRT、COT、TOT、公司標誌、合作夥伴及獎項，並標示「示範佔位 · PLACEHOLDER」，正式標誌尚未提供。",
    },
  },
  testimonials: [
    { src: `${BASE}/testimonial-01.webp` },
    { src: `${BASE}/testimonial-02.webp` },
    { src: `${BASE}/testimonial-03.webp` },
    { src: `${BASE}/testimonial-04.webp` },
  ].map((t) => ({
    ...t,
    width: 400,
    height: 400,
    alt: {
      en: "Placeholder testimonial portrait — a faceless illustrated bust on navy inside a gold hairline frame, labelled 示範頭像 · PLACEHOLDER. No real person is depicted.",
      zh: "客戶見證頭像示意佔位：深藍背景上的無面部插畫半身像，配金色細線外框，標示「示範頭像 · PLACEHOLDER」，並非任何真實人物。",
    },
  })) as BrandImage[],
  blog: {
    mindset: {
      src: `${BASE}/blog-career-mindset.webp`,
      width: 1200,
      height: 675,
      alt: {
        en: "Blog card for career mindset — a rising gold line and focus ring beside the sample title 心態，決定事業的高度.",
        zh: "網誌卡片（職涯心態）：金色上升線條與聚焦圓環，配示意標題「心態，決定事業的高度」。",
      },
    },
    gbaTrend: {
      src: `${BASE}/blog-gba-trend.webp`,
      width: 1200,
      height: 675,
      alt: {
        en: "Blog card for GBA trends — a gold arc with station dots above a simplified skyline, beside the sample title 一小時生活圈，正在成形.",
        zh: "網誌卡片（大灣區趨勢）：金色弧線與站點圓點置於簡化天際線上方，配示意標題「一小時生活圈，正在成形」。",
      },
    },
    successStory: {
      src: `${BASE}/blog-success-story.webp`,
      width: 1200,
      height: 675,
      alt: {
        en: "Blog card for a success story — four ascending steps with a highlighted milestone dot, beside the sample title 由零開始的專業之路.",
        zh: "網誌卡片（成功故事）：四級向上階梯與高亮里程碑圓點，配示意標題「由零開始的專業之路」。",
      },
    },
    financialPlanning: {
      src: `${BASE}/blog-financial-planning.webp`,
      width: 1200,
      height: 675,
      alt: {
        en: "Blog card for financial planning — gold pie segments and ascending bars, beside the sample title 財務策劃，從了解自己開始.",
        zh: "網誌卡片（財務策劃）：金色圓餅分區與向上柱狀圖，配示意標題「財務策劃，從了解自己開始」。",
      },
    },
  },
  /** Social share card — the PNG is used for og:image (scrapers reject WebP). */
  ogShare: {
    src: `${BASE}/og-share.png`,
    webp: `${BASE}/og-share.webp`,
    width: 1200,
    height: 630,
    alt: {
      en: "Social share card with the headline 與我們一起，把專業帶到大灣區 over a dusk skyline and a gold rail arc, with the branch line 高鐵西九龍 · 羅湖 · 落馬洲 beneath.",
      zh: "社交分享圖：標題「與我們一起，把專業帶到大灣區」置於黃昏天際線與金色鐵路弧線之上，下方標示據點「高鐵西九龍 · 羅湖 · 落馬洲」。",
    },
  },
} as const;

/** Pillar artwork in the same order as `content(lang).pillars`. */
export const PILLAR_IMAGES: BrandImage[] = [
  BRAND.pillars.income,
  BRAND.pillars.gbaAccess,
  BRAND.pillars.backoffice,
  BRAND.pillars.career,
];

/**
 * Blog artwork per insight slug. Only slugs with a genuine topical match get a
 * card image — a card whose baked-in sample title contradicts its real title
 * would be worse than no image at all. 陳總專欄 columns stay text-only.
 */
const BLOG_IMAGE_BY_SLUG: Record<string, BrandImage> = {
  "one-hour-living-circle": BRAND.blog.gbaTrend,
  "gba-cross-border-trend": BRAND.blog.gbaTrend,
  "three-questions-before-switching": BRAND.blog.mindset,
  "career-mindset-beyond-effort": BRAND.blog.mindset,
  "mdrt-is-not-the-finish-line": BRAND.blog.successStory,
  "success-story-50-to-500": BRAND.blog.successStory,
  "aia-premier-academy-two-weeks": BRAND.blog.financialPlanning,
};

export function blogImageFor(slug: string | undefined): BrandImage | null {
  if (!slug) return null;
  return BLOG_IMAGE_BY_SLUG[slug] ?? null;
}

export function brandAlt(image: BrandImage, lang: Lang): string {
  return image.alt[lang];
}
