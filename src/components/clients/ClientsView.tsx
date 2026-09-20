import Image from "next/image";
import type { Lang } from "@/lib/site";
import { pages } from "@/lib/pages-content";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ToConfirm from "@/components/ui/ToConfirm";
import CtaBand from "@/components/ui/CtaBand";

/**
 * Phase 2 — What we offer clients.
 * The district's existing high-end services from the corpus, framed as
 * "what you will represent": service platforms, lifestyle events, talks, and
 * the in-house telephone appointment team.
 */
export default function ClientsView({ lang }: { lang: Lang }) {
  const cl = pages(lang).clients;

  return (
    <main className="min-h-dvh overflow-x-hidden bg-paper">
      <PageHero eyebrow={cl.eyebrow} title={cl.title} intro={cl.intro} />

      {/* Service platforms */}
      <section className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <SectionHeading title={cl.platformsHeading} sub={cl.platformsIntro} />
        </FadeIn>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cl.platforms.map((p, i) => (
            <FadeIn key={p.title} delay={i * 50} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-card">
                <h3 className="text-base font-bold text-navy">{p.title}</h3>
                <p className="prose-cjk mt-2 text-sm text-muted">{p.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
          <div className="relative hidden w-64 shrink-0 overflow-hidden rounded-2xl border border-navy/10 shadow-card lg:block">
            <Image
              src="/images/service-platforms.png"
              alt={cl.platformsHeading}
              width={640}
              height={360}
              className="h-auto w-full object-cover"
            />
          </div>
          <ToConfirm lang={lang}>{cl.platformsNote}</ToConfirm>
        </div>
      </section>

      {/* Lifestyle + talks */}
      <section className="border-y border-navy/10 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-content gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading title={cl.lifestyleHeading} sub={cl.lifestyleIntro} />
            <ul className="mt-6 space-y-3">
              {cl.lifestyle.map((it) => (
                <li
                  key={it}
                  className="rounded-xl border border-navy/10 bg-paper px-4 py-3 text-sm font-medium text-navy"
                >
                  {it}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={60}>
            <SectionHeading title={cl.talksHeading} sub={cl.talksIntro} />
            <ul className="mt-6 space-y-3">
              {cl.talks.map((it) => (
                <li
                  key={it}
                  className="rounded-xl border border-navy/10 bg-paper px-4 py-3 text-sm font-medium text-navy"
                >
                  {it}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Telephone appointment team */}
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <FadeIn>
            <SectionHeading eyebrow="Support" title={cl.telemarketingHeading} onDark />
            <div className="mt-6 max-w-3xl space-y-4">
              {cl.telemarketingParas.map((p) => (
                <p key={p} className="prose-cjk text-[15px] text-white/75">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBand lang={lang} heading={cl.ctaHeading} body={cl.ctaBody} />
    </main>
  );
}
