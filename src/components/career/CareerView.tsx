import type { Lang } from "@/lib/site";
import { pages } from "@/lib/pages-content";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Ladder from "@/components/ui/Ladder";
import ToConfirm from "@/components/ui/ToConfirm";
import SeedNote from "@/components/ui/SeedNote";
import CtaBand from "@/components/ui/CtaBand";

/**
 * Phase 2 — Career path & opportunities.
 * Promotion ladder as a visual (Ladder), the two tracks, how leaders are
 * developed, current openings (SEED-1: demo roles, labelled 示範 · seed; the
 * district's confirmed vacancy list is still TO CONFIRM).
 */
export default function CareerView({ lang }: { lang: Lang }) {
  const cd = pages(lang).career;

  return (
    <main className="min-h-dvh overflow-x-hidden bg-paper">
      <PageHero eyebrow={cd.eyebrow} title={cd.title} intro={cd.intro} />

      {/* Ladder */}
      <section className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <SectionHeading
            eyebrow={cd.ladderHeading}
            title={cd.ladderHeading}
            sub={cd.ladderIntro}
          />
        </FadeIn>
        <Ladder stages={cd.ladder} />
      </section>

      {/* Two tracks */}
      <section className="border-y border-navy/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <FadeIn>
            <SectionHeading title={cd.tracksHeading} sub={cd.tracksIntro} />
          </FadeIn>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {cd.tracks.map((t, i) => (
              <FadeIn key={t.title} delay={i * 60} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-navy/10 bg-paper p-6 shadow-card">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-sm font-bold text-gold-dark">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-navy">{t.title}</h3>
                  <p className="prose-cjk mt-2 text-sm text-muted">{t.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership development */}
      <section className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <SectionHeading title={cd.leadershipHeading} sub={cd.leadershipIntro} />
        </FadeIn>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div className="space-y-4">
            {cd.leadershipParas.map((p) => (
              <p key={p} className="prose-cjk text-[15px] text-ink/80">
                {p}
              </p>
            ))}
          </div>
          <FadeIn delay={80}>
            <blockquote className="rounded-2xl border border-gold/30 bg-white p-6 shadow-card">
              <span className="font-serif text-3xl leading-none text-gold" aria-hidden="true">
                &ldquo;
              </span>
              <p className="prose-cjk mt-2 text-[15px] font-medium text-navy">{cd.leadershipQuestion}</p>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* Openings */}
      <section className="border-t border-navy/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <FadeIn>
            <SectionHeading title={cd.openingsHeading} />
            <div className="mt-5 space-y-5">
              <SeedNote lang={lang} id="SEED-1-openings">{cd.openingsSeedNote}</SeedNote>
              <ul className="grid gap-4 sm:grid-cols-3">
                {cd.openings.map((o) => (
                  <li key={o.role} className="rounded-2xl border border-navy/10 bg-paper p-5">
                    <p className="text-base font-bold text-navy">{o.role}</p>
                    <p className="prose-cjk mt-2 text-sm text-muted">{o.note}</p>
                  </li>
                ))}
              </ul>
              <div>
                <ToConfirm lang={lang}>{cd.openingsNote}</ToConfirm>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBand lang={lang} heading={cd.ctaHeading} body={cd.ctaBody} />
    </main>
  );
}
