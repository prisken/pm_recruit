export type Lang = "zh" | "en";

/**
 * Business facts below are taken from the CURRENT live site
 * (https://www.portfoliomanagement.com.hk/ — rendered with headless Chrome,
 * the site is Wix and returns almost nothing to a plain fetch).
 */

export const SITE = {
  nameEn: "Portfolio Management District",
  nameZh: "資產管理區域",
  company: "AIA International Limited",
  companyZh: "友邦保險（國際）有限公司",
  /** Preview deployment URL — replaced once a real domain is attached. */
  url: "https://portfolio-management-preview.vercel.app",

  /** PLACEHOLDER — invented for the preview (per brief); not a live mailbox. */
  email: "join@portfoliomanagement.com.hk",
  /** PLACEHOLDER — WhatsApp click-to-chat only, no bulk messaging. */
  whatsapp: "85200000000",

  // Real office details, lifted from the live site footer.
  phone: "+852 3101 6500",
  fax: "+852 3101 6599",
  office: {
    zh: "香港鰂魚涌英皇道 633 號 23 樓",
    en: "23/F, 633 King's Road, Quarry Bay, Hong Kong",
  },
  founded: "2009",
} as const;

export type Branch = {
  id: string;
  name: { zh: string; en: string };
  address: { zh: string; en: string };
  hours: { zh: string; en: string };
  image: string;
};

/** The three rail branches — real shop numbers and opening hours from the live site. */
export const BRANCHES: Branch[] = [
  {
    id: "west-kowloon",
    name: { zh: "香港 高鐵西九龍站分行", en: "Hong Kong West Kowloon (High Speed Rail)" },
    address: { zh: "MTR 香港西九龍站 WEK L1-1 號鋪", en: "Shop WEK L1-1, MTR West Kowloon Station" },
    hours: { zh: "星期一至日 8am – 10pm", en: "Mon – Sun, 8am – 10pm" },
    image: "/images/branch-west-kowloon.jpg",
  },
  {
    id: "lo-wu",
    name: { zh: "香港 羅湖站分行", en: "Lo Wu Station" },
    address: {
      zh: "港鐵羅湖站 K12 號鋪（2/F 入閘區大堂）",
      en: "Shop K12, MTR Lo Wu Station (2/F, paid concourse)",
    },
    hours: { zh: "星期一至日 9am – 9pm", en: "Mon – Sun, 9am – 9pm" },
    image: "/images/branch-luohu.jpg",
  },
  {
    id: "lok-ma-chau",
    name: { zh: "香港 落馬洲站分行", en: "Lok Ma Chau Station" },
    address: {
      zh: "港鐵落馬洲站 LMC 309 & 310 號鋪（3/F 入閘區大堂）",
      en: "Shops LMC 309 & 310, MTR Lok Ma Chau Station (3/F, paid concourse)",
    },
    hours: { zh: "星期一至日 9am – 9pm", en: "Mon – Sun, 9am – 9pm" },
    image: "/images/branch-lok-ma-chau.jpg",
  },
];

/** WhatsApp click-to-chat link. Placeholder number — preview only. */
export function waLink(text: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function langHref(lang: Lang) {
  return lang === "zh" ? "/" : "/en";
}

/**
 * Every page route in the site (Phase 1 + Phase 2).
 * zh-Hant lives at the bare path, English is mirrored under /en.
 */
export const ROUTES = [
  "",
  "/why-join-us",
  "/our-story",
  "/career-path",
  "/achievements",
  "/gba",
  "/clients",
  "/insights",
  "/events",
  "/contact",
  "/book",
] as const;

export type RoutePath = (typeof ROUTES)[number];

/** Route helpers so zh/en pages always point at their counterpart. */
export function route(lang: Lang, path: string) {
  return lang === "zh" ? path || "/" : `/en${path}`;
}
