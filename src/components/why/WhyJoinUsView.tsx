import Link from "next/link";
import type { Lang } from "@/lib/site";
import { route } from "@/lib/site";
import { content } from "@/lib/content";
import { pages } from "@/lib/pages-content";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CompareTable from "@/components/ui/CompareTable";
import FaqList from "@/components/ui/FaqList";
import ToConfirm from "@/components/ui/ToConfirm";
import CtaBand from "@/components/ui/CtaBand";

/**
 * Phase 2 — full "Why join us" page.
 * Hero → top CTA → 4 pillars with proof → comparison → FAQ → bottom CTA.
 */
export default function WhyJoinUsView({ lang }: { lang: Lang }) {
  const w = pages(lang).why;
  const c = content(lang);

  return (
    <main className="min-h-dvh overflow-x-hidden bg-paper">
      <PageHero eyebrow={w.eyebrow} title={w.title} intro={w.intro}>
        {/* CTA at the top, as briefed */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={route(lang, "/book")}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-bold text-navy-deep transition-colors hover:bg-gold-light"
          >
            {c.hero.ctaPrimary}
          </Link>
          <Link
            href={route(lang, "/our-story")}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10"
          >
            {pages(lang).nav.story}
          </Link>
        </div>
        <p className="mt-5 text-xs text-white/50">{c.hero.softNote}</p>
      </PageHero>

      {/* 4 pillars, expanded, each with its evidence */}
      <section className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <SectionHeading eyebrow={w.pillarsHeading} title={w.pillarsHeading} sub={w.pillarsSub} />
        </FadeIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {w.pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 60} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-card sm:p-7">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-sm font-bold text-gold-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-navy">{p.title}</h3>
                <p className="prose-cjk mt-3 text-sm text-muted">{p.body}</p>
                <p className="prose-cjk mt-4 rounded-xl border border-gold/25 bg-gold/5 px-3 py-2 text-xs text-gold-dark">
                  {p.proof}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="border-t border-navy/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <FadeIn>
            <SectionHeading eyebrow={w.compareHeading} title={w.compareHeading} sub={w.compareIntro} />
          </FadeIn>
          <div className="mt-9">
            <CompareTable
              lang={lang}
              rows={w.compareRows}
              usLabel={w.usLabel}
              otherLabel={w.otherLabel}
              note={w.compareNote}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <SectionHeading title={w.faqHeading} />
        </FadeIn>
        <FaqList items={w.faq} />
        <div className="mt-5">
          <p className="text-xs leading-relaxed text-muted">{w.faqNote}</p>
        </div>
        <div className="mt-4">
          <ToConfirm lang={lang}>FAQ 第 6 條（入職要求與流程）</ToConfirm>
        </div>
      </section>

      <CtaBand lang={lang} heading={w.ctaHeading} body={w.ctaBody} />
    </main>
  );
}
