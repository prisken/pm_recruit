import type { Lang } from "@/lib/site";
import { pages } from "@/lib/pages-content";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ToConfirm from "@/components/ui/ToConfirm";
import CtaBand from "@/components/ui/CtaBand";

/** A simple chip cloud for the real name lists from the corpus. */
function NameCloud({ names, tone = "light" }: { names: string[]; tone?: "light" | "dark" }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {names.map((n) => (
        <li
          key={n}
          className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
            tone === "dark"
              ? "border-white/15 bg-white/5 text-white/80"
              : "border-navy/10 bg-paper text-navy"
          }`}
        >
          {n}
        </li>
      ))}
    </ul>
  );
}

/**
 * Phase 2 — Achievements & our people.
 * MDRT / COT name lists, award categories, magazine interviews and CSR —
 * all from the corpus. TOT members and per-award detail are TO CONFIRM.
 */
export default function AchievementsView({ lang }: { lang: Lang }) {
  const a = pages(lang).achievements;

  return (
    <main className="min-h-dvh overflow-x-hidden bg-paper">
      <PageHero eyebrow={a.eyebrow} title={a.title} intro={a.intro} />

      {/* MDRT */}
      <section className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <SectionHeading eyebrow="MDRT" title={a.mdrtHeading} sub={a.mdrtIntro} />
        </FadeIn>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {a.mdrtFacts.map((f) => (
            <li key={f} className="rounded-2xl border border-navy/10 bg-white p-4 text-sm text-ink/80 shadow-card">
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-gold-dark">{a.mdrtLeadersHeading}</h3>
            <NameCloud names={a.mdrtLeaderNames} />
          </FadeIn>
          <FadeIn delay={60}>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-gold-dark">{a.mdrtMembersHeading}</h3>
            <NameCloud names={a.mdrtMemberNames} />
          </FadeIn>
        </div>
        <p className="mt-6 text-xs text-muted">{a.listNote}</p>
      </section>

      {/* COT + TOT */}
      <section className="border-y border-navy/10 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-content gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading title={a.cotHeading} sub={a.cotIntro} />
            <NameCloud names={a.cotMembers} />
            <p className="mt-5 text-xs text-muted">{a.listNote}</p>
          </FadeIn>
          <FadeIn delay={60}>
            <SectionHeading title={a.totHeading} />
            <div className="mt-5">
              <ToConfirm lang={lang}>{a.totNote}</ToConfirm>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Awards + media */}
      <section className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading title={a.awardsHeading} sub={a.awardsIntro} />
            <NameCloud names={a.awards} />
            <div className="mt-5">
              <ToConfirm lang={lang}>{a.awardsNote}</ToConfirm>
            </div>
          </FadeIn>
          <FadeIn delay={60}>
            <SectionHeading title={a.mediaHeading} sub={a.mediaIntro} />
            <ul className="mt-5 space-y-3">
              {a.media.map((m) => (
                <li
                  key={`${m.outlet}-${m.issue}`}
                  className="rounded-2xl border border-navy/10 bg-white p-4 shadow-card"
                >
                  <p className="text-sm font-semibold text-navy">
                    {m.outlet}
                    {m.issue ? <span className="ml-2 text-xs font-normal text-muted">{m.issue}</span> : null}
                  </p>
                  {m.topic ? <p className="prose-cjk mt-1 text-xs text-muted">{m.topic}</p> : null}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* CSR */}
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <FadeIn>
            <SectionHeading eyebrow="CSR" title={a.csrHeading} onDark />
          </FadeIn>
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4">
              {a.csrParas.map((p) => (
                <p key={p} className="prose-cjk text-[15px] text-white/75">
                  {p}
                </p>
              ))}
            </div>
            <FadeIn delay={60}>
              <NameCloud names={a.csrItems} tone="dark" />
            </FadeIn>
          </div>
        </div>
      </section>

      <CtaBand lang={lang} heading={a.ctaHeading} body={a.ctaBody} />
    </main>
  );
}
