import type { Metadata } from "next";
import type { Lang } from "@/lib/site";
import { SITE } from "@/lib/site";
import { BRAND } from "@/lib/brand-assets";

/**
 * Shared per-page metadata with hreflang alternates.
 * zh-Hant is the primary route ("/"), English lives under "/en".
 */
export function pageMetadata({
  lang,
  path = "",
  title,
  description,
}: {
  lang: Lang;
  path?: string;
  title: string;
  description: string;
}): Metadata {
  const zhPath = path || "/";
  const enPath = `/en${path}`;
  const url = lang === "zh" ? zhPath : enPath;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "zh-Hant": zhPath,
        en: enPath,
        "x-default": zhPath,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: `${SITE.nameZh} ${SITE.nameEn}`,
      locale: lang === "zh" ? "zh_HK" : "en_HK",
      type: "website",
      // PNG, not WebP — some scrapers still reject WebP for og:image.
      images: [
        {
          url: BRAND.ogShare.src,
          width: BRAND.ogShare.width,
          height: BRAND.ogShare.height,
          alt: BRAND.ogShare.alt[lang],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [BRAND.ogShare.src],
    },
  };
}
