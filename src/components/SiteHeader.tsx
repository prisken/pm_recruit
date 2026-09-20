import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/lib/site";
import { route } from "@/lib/site";
import { content } from "@/lib/content";
import { pages } from "@/lib/pages-content";
import LangToggle from "@/components/LangToggle";

/**
 * Sticky header.
 *
 * Solid `bg-navy-deep` (same colour as every page hero) so there is no seam
 * where the header meets the hero image below it — previously a translucent
 * header showed a faint band and a 1px border line against the hero.
 *
 * Desktop: primary nav. Below `md`: a native <details> menu, no JS needed.
 */
export default function SiteHeader({ lang, active = "" }: { lang: Lang; active?: string }) {
  const c = content(lang);
  const p = pages(lang);

  const items: Array<{ href: string; label: string; wide?: boolean }> = [
    { href: route(lang, "/why-join-us"), label: p.nav.why },
    { href: route(lang, "/our-story"), label: p.nav.story, wide: true },
    { href: route(lang, "/career-path"), label: p.nav.career },
    { href: route(lang, "/achievements"), label: p.nav.achievements, wide: true },
    { href: route(lang, "/gba"), label: p.nav.gba, wide: true },
    { href: route(lang, "/insights"), label: p.nav.insights },
    { href: route(lang, "/events"), label: p.nav.events, wide: true },
    { href: route(lang, "/contact"), label: p.nav.contact, wide: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-navy-deep">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-2 px-4 sm:px-6">
        <Link
          href={route(lang, "")}
          className="inline-flex min-h-11 items-center gap-2.5"
          aria-label={c.footer.rights}
        >
          <Image
            src="/images/logo-pm-mark.png"
            alt=""
            width={36}
            height={36}
            priority
            className="h-8 w-8 object-contain"
          />
          <span className="leading-tight">
            <span className="block text-[13px] font-bold tracking-wide text-white">
              {lang === "zh" ? "資產管理區域" : "Portfolio Management"}
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-gold">
              {lang === "zh" ? "Portfolio Management District" : "AIA · District"}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label={lang === "zh" ? "主選單" : "Main"}>
          {items.map((it) => {
            const isActive = active === it.href.replace(/^\/en/, "") || active === it.href;
            return (
              <Link
                key={it.href}
                href={it.href}
                aria-current={isActive ? "page" : undefined}
                className={`whitespace-nowrap rounded-full px-2.5 py-2 text-[12.5px] font-medium transition-colors ${
                  isActive ? "text-gold" : "text-white/75 hover:bg-white/5 hover:text-white"
                } ${it.wide ? "" : ""}`}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle lang={lang} path={active} />
          <Link
            href={route(lang, "/book")}
            className="hidden min-h-11 items-center rounded-full bg-gold px-5 text-[13px] font-bold text-navy-deep transition-colors hover:bg-gold-light sm:inline-flex"
          >
            {c.nav.book}
          </Link>

          {/* Mobile menu — native <details>, no JS. */}
          <details className="relative lg:hidden">
            <summary
              className="inline-flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/15 text-white"
              aria-label={lang === "zh" ? "開啟選單" : "Open menu"}
            >
              <span aria-hidden="true" className="text-lg leading-none">
                ☰
              </span>
            </summary>
            <nav
              className="absolute right-0 top-[calc(100%+0.5rem)] w-60 rounded-2xl border border-white/10 bg-navy-deep p-2 shadow-card"
              aria-label={lang === "zh" ? "主選單" : "Main"}
            >
              {items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  aria-current={active === it.href.replace(/^\/en/, "") ? "page" : undefined}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {it.label}
                </Link>
              ))}
              <Link
                href={route(lang, "/book")}
                className="mt-1 block rounded-xl bg-gold px-3 py-2.5 text-center text-sm font-bold text-navy-deep"
              >
                {c.nav.book}
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
