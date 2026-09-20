import Link from "next/link";
import type { Lang } from "@/lib/site";

/**
 * Language toggle. zh-Hant lives at "/", English at "/en".
 * Each route has its own root layout with the correct <html lang>, and every
 * page declares hreflang alternates, so this is a plain link pair.
 */
export default function LangToggle({
  lang,
  path = "",
  className = "",
}: {
  lang: Lang;
  path?: string;
  className?: string;
}) {
  const zhHref = path || "/";
  const enHref = `/en${path}`;

  const base =
    "inline-flex min-h-9 items-center justify-center rounded-full px-3 text-xs font-semibold transition-colors";

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-white/15 bg-white/5 p-0.5 ${className}`}
      role="group"
      aria-label="Language / 語言"
    >
      <Link
        href={zhHref}
        hrefLang="zh-Hant"
        lang="zh-Hant"
        aria-current={lang === "zh" ? "true" : undefined}
        className={`${base} ${
          lang === "zh" ? "bg-gold text-navy-deep" : "text-white/70 hover:text-white"
        }`}
      >
        中文
      </Link>
      <Link
        href={enHref}
        hrefLang="en"
        lang="en"
        aria-current={lang === "en" ? "true" : undefined}
        className={`${base} ${
          lang === "en" ? "bg-gold text-navy-deep" : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
