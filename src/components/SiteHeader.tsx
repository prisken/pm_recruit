import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/lib/site";
import { route } from "@/lib/site";
import { content } from "@/lib/content";
import LangToggle from "@/components/LangToggle";

export default function SiteHeader({
  lang,
  active = "",
}: {
  lang: Lang;
  active?: "" | "/book" | "/why-join-us";
}) {
  const c = content(lang);
  const navLink = (href: string, label: string, isActive: boolean) => (
    <Link
      key={href}
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`rounded-full px-3 py-2 text-[13px] font-medium transition-colors ${
        isActive ? "text-gold" : "text-white/75 hover:bg-white/5 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-deep/95 backdrop-blur supports-[backdrop-filter]:bg-navy-deep/85">
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

        <nav className="hidden items-center gap-1 md:flex" aria-label={lang === "zh" ? "主選單" : "Main"}>
          {navLink(route(lang, "/why-join-us"), c.nav.why, active === "/why-join-us")}
          {navLink(`${route(lang, "")}#branches`, c.nav.branches, false)}
          {navLink(`${route(lang, "")}#insights`, c.nav.insights, false)}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle lang={lang} path={active} />
          <Link
            href={route(lang, "/book")}
            className="hidden min-h-11 items-center rounded-full bg-gold px-5 text-[13px] font-bold text-navy-deep transition-colors hover:bg-gold-light sm:inline-flex"
          >
            {c.nav.book}
          </Link>
        </div>
      </div>
    </header>
  );
}
