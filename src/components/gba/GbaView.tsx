import Image from "next/image";
import type { Lang } from "@/lib/site";
import { BRANCHES } from "@/lib/site";
import { pages } from "@/lib/pages-content";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import StationMap from "@/components/ui/StationMap";
import CtaBand from "@/components/ui/CtaBand";

/**
 * Phase 2 — Greater Bay Area opportunity & locations.
 * The real branch addresses/hours, the one-hour living circle story, a simple
 * station diagram, and the branch photos already in /public/images.
 */
export default function GbaView({ lang }: { lang: Lang }) {
  const g = pages(lang).gba;

  return (
    <main className="min-h-dvh overflow-x-hidden bg-paper">
      <PageHero eyebrow={g.eyebrow} title={g.title} intro={g.intro} />

      {/* One-hour living circle */}
      <section className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <SectionHeading title={g.oneHourHeading} />
        </FadeIn>
        <div className="mt-6 max-w-3xl space-y-4">
          {g.oneHourParas.map((p) => (
            <p key={p} className="prose-cjk text-[15px] text-ink/80">
              {p}
            </p>
          ))}
        </div>
        <div className="mt-10">
          <StationMap lang={lang} caption={g.mapCaption} />
        </div>
      </section>

      {/* Branches with real photos */}
      <section className="border-y border-navy/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <FadeIn>
            <SectionHeading title={g.branchesHeading} sub={g.branchesIntro} />
          </FadeIn>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {BRANCHES.map((b, i) => (
              <FadeIn key={b.id} delay={i * 60} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-paper shadow-card">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={b.image}
                      alt={b.name[lang]}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-navy">{b.name[lang]}</h3>
                    <p className="mt-2 text-sm text-muted">{b.address[lang]}</p>
                    <p className="mt-1 text-sm font-medium text-gold-dark">{b.hours[lang]}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What it means for you */}
      <section className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <SectionHeading title={g.whyHeading} />
        </FadeIn>
        <div className="mt-6 max-w-3xl space-y-4">
          {g.whyParas.map((p) => (
            <p key={p} className="prose-cjk text-[15px] text-ink/80">
              {p}
            </p>
          ))}
        </div>
      </section>

      <CtaBand lang={lang} heading={g.ctaHeading} body={g.ctaBody} />
    </main>
  );
}
