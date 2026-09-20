import Image from "next/image";
import type { Lang } from "@/lib/site";
import { pages } from "@/lib/pages-content";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ToConfirm from "@/components/ui/ToConfirm";
import CtaBand from "@/components/ui/CtaBand";

/**
 * Phase 2 — Our story & culture.
 * Founding story, vision, culture, the Chairman's message (陳總的話, verbatim
 * from the corpus) and the district photo gallery.
 */
export default function StoryView({ lang }: { lang: Lang }) {
  const s = pages(lang).story;

  return (
    <main className="min-h-dvh overflow-x-hidden bg-paper">
      <PageHero eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

      {/* Facts band */}
      <section className="border-y border-navy-line/40 bg-navy" aria-label={s.facts.map((f) => f.label).join(", ")}>
        <div className="mx-auto grid max-w-content grid-cols-3 gap-x-4 gap-y-5 px-4 py-6 sm:px-6 sm:py-8">
          {s.facts.map((f) => (
            <div key={f.label}>
              <p className="text-xl font-bold leading-tight text-gold sm:text-2xl">{f.value}</p>
              <p className="mt-1.5 text-sm font-semibold text-white">{f.label}</p>
            </div>
          ))}
        </div>
      </section>
      <p className="mx-auto max-w-content px-4 pt-3 text-xs text-muted sm:px-6">{s.factsNote}</p>

      {/* Founding */}
      <section className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <FadeIn>
              <SectionHeading title={s.foundingHeading} />
            </FadeIn>
            <div className="mt-6 space-y-4">
              {s.foundingParas.map((p) => (
                <p key={p} className="prose-cjk text-[15px] text-ink/80">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <FadeIn delay={80}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card">
              <Image
                src="/images/team-wide.jpg"
                alt={s.gallery[1].caption}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vision + culture */}
      <section className="border-t border-navy/10 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-content gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading title={s.visionHeading} />
            <div className="mt-6 space-y-4">
              {s.visionParas.map((p) => (
                <p key={p} className="prose-cjk text-[15px] text-ink/80">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={80}>
            <SectionHeading title={s.cultureHeading} />
            <div className="mt-6 space-y-4">
              {s.cultureParas.map((p) => (
                <p key={p} className="prose-cjk text-[15px] text-ink/80">
                  {p}
                </p>
              ))}
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {s.cultureItems.map((it) => (
                <li
                  key={it}
                  className="rounded-full border border-navy/10 bg-paper px-3 py-1.5 text-xs font-semibold text-navy"
                >
                  {it}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Chairman's message */}
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <FadeIn>
            <SectionHeading eyebrow={s.chairmanHeading} title={s.chairmanHeading} onDark />
            <p className="mt-5 text-sm font-semibold text-gold-light">{s.chairmanTitle}</p>
          </FadeIn>
          <div className="mt-8 grid gap-10 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start">
            <FadeIn>
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/images/leader-portrait.jpg"
                    alt={s.gallery[0].caption}
                    fill
                    sizes="(min-width: 1024px) 18rem, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
              <blockquote className="prose-cjk mt-5 rounded-2xl border border-gold/25 bg-navy-soft/60 p-5 text-[15px] font-semibold text-gold-light">
                「{s.chairmanQuote}」
              </blockquote>
            </FadeIn>
            <FadeIn delay={80}>
              <div className="space-y-4">
                {s.chairmanParas.map((p) => (
                  <p key={p} className="prose-cjk text-[15px] text-white/75">
                    {p}
                  </p>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="mx-auto max-w-content px-4 py-14 sm:px-6">
        <FadeIn>
          <SectionHeading title={s.bannerHeading} />
          <div className="mt-5">
            <ToConfirm lang={lang}>{s.bannerNote}</ToConfirm>
          </div>
        </FadeIn>
      </section>

      {/* Gallery */}
      <section className="border-t border-navy/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <FadeIn>
            <SectionHeading title={s.galleryHeading} sub={s.galleryNote} />
          </FadeIn>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.gallery.map((g, i) => (
              <FadeIn key={g.src} delay={i * 50}>
                <figure className="overflow-hidden rounded-2xl border border-navy/10 bg-paper shadow-card">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={g.src}
                      alt={g.caption}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-xs text-muted">{g.caption}</figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBand lang={lang} heading={s.ctaHeading} body={s.ctaBody} />
    </main>
  );
}
