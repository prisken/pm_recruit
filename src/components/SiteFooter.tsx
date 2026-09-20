import Link from "next/link";
import type { Lang } from "@/lib/site";
import { BRANCHES, SITE, route, waLink } from "@/lib/site";
import { content } from "@/lib/content";
import { pages } from "@/lib/pages-content";

export default function SiteFooter({ lang }: { lang: Lang }) {
  const c = content(lang);
  const p = pages(lang);
  const waText =
    lang === "zh" ? "你好，我想了解資產管理區域的顧問事業。" : "Hi, I'd like to know more about a career in the district.";

  const links: Array<{ href: string; label: string }> = [
    { href: route(lang, "/why-join-us"), label: p.nav.why },
    { href: route(lang, "/our-story"), label: p.nav.story },
    { href: route(lang, "/career-path"), label: p.nav.career },
    { href: route(lang, "/achievements"), label: p.nav.achievements },
    { href: route(lang, "/gba"), label: p.nav.gba },
    { href: route(lang, "/clients"), label: p.nav.clients },
    { href: route(lang, "/insights"), label: p.nav.insights },
    { href: route(lang, "/events"), label: p.nav.events },
    { href: route(lang, "/contact"), label: p.nav.contact },
    { href: route(lang, "/book"), label: c.nav.book },
  ];

  return (
    <footer className="bg-navy-deep pb-[calc(env(safe-area-inset-bottom,0px)+4.5rem)] pt-14 text-white/70 sm:pb-10">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Branches */}
          <div className="md:col-span-2">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
              {c.footer.branchesHeading}
            </h2>
            <ul className="mt-4 space-y-4">
              {BRANCHES.map((b) => (
                <li key={b.id} className="text-sm">
                  <p className="font-semibold text-white">{b.name[lang]}</p>
                  <p className="mt-0.5 text-white/60">{b.address[lang]}</p>
                  <p className="mt-0.5 text-white/50">{b.hours[lang]}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Office + join */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
              {c.footer.officeHeading}
            </h2>
            <address className="mt-4 space-y-1 text-sm not-italic text-white/70">
              <p className="text-white/80">{SITE.office[lang]}</p>
              <p>
                Tel:{" "}
                <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
                  {SITE.phone}
                </a>
              </p>
              <p>Fax: {SITE.fax}</p>
            </address>

            <h2 className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-gold">
              {c.footer.joinHeading}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  className="underline decoration-white/20 underline-offset-4 hover:text-white"
                  href={`mailto:${SITE.email}`}
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  className="underline decoration-white/20 underline-offset-4 hover:text-white"
                  href={waLink(waText)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.footer.wa}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links — all real routes, no stubs */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
              {c.footer.quickLinks}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link className="hover:text-white" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className="hover:text-white"
                  href={lang === "zh" ? "/en" : "/"}
                  hrefLang={lang === "zh" ? "en" : "zh-Hant"}
                >
                  {c.otherLangName}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="max-w-3xl text-[11px] leading-relaxed text-white/45">{c.footer.disclaimer}</p>
          <p className="mt-3 text-[11px] text-white/40">
            © {new Date().getFullYear()} {c.footer.rights}
          </p>
          <p className="mt-1 text-[11px] text-gold/70">{c.footer.previewNote}</p>
        </div>
      </div>
    </footer>
  );
}
