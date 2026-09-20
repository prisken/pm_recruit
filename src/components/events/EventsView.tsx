import type { Lang } from "@/lib/site";
import { pages } from "@/lib/pages-content";
import FadeIn from "@/components/FadeIn";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ToConfirm from "@/components/ui/ToConfirm";
import CtaBand from "@/components/ui/CtaBand";

/**
 * Phase 2 — Events & activities.
 * Roadshows, exhibitions, team activities and training from the corpus; open
 * days are TO CONFIRM. Each event carries an RSVP form (reuses LeadForm, with
 * a unique id prefix so multiple forms on one page stay valid HTML).
 */
export default function EventsView({ lang }: { lang: Lang }) {
  const ev = pages(lang).events;

  return (
    <main className="min-h-dvh overflow-x-hidden bg-paper">
      <PageHero eyebrow={ev.eyebrow} title={ev.title} intro={ev.intro} />

      <section className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-8">
          {ev.items.map((it, i) => {
            const isToConfirm = it.list.length === 0;
            return (
              <FadeIn key={it.id} delay={i * 40}>
                <article className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-dark">
                      {it.type}
                    </span>
                    <h2 className="text-xl font-bold text-navy">{it.heading}</h2>
                  </div>
                  {it.intro ? (
                    <p className="prose-cjk mt-3 max-w-3xl text-sm text-ink/80">{it.intro}</p>
                  ) : null}

                  {isToConfirm ? (
                    <div className="mt-4">
                      <ToConfirm lang={lang}>{it.note}</ToConfirm>
                    </div>
                  ) : (
                    <>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {it.list.map((l) => (
                          <li
                            key={l}
                            className="rounded-full border border-navy/10 bg-paper px-3 py-1.5 text-xs font-medium text-navy"
                          >
                            {l}
                          </li>
                        ))}
                      </ul>
                      {it.note ? <p className="mt-3 text-xs text-muted">{it.note}</p> : null}
                    </>
                  )}

                  {isToConfirm ? null : (
                    <details className="mt-6 rounded-2xl border border-navy/10 bg-paper p-4">
                      <summary className="cursor-pointer list-none text-sm font-bold text-navy">
                        {ev.rsvpHeading} · {it.heading}
                      </summary>
                      <p className="mt-3 text-xs text-muted">{ev.rsvpIntro}</p>
                      <div className="mt-4">
                        <LeadForm lang={lang} idPrefix={`rsvp-${it.id}`} />
                      </div>
                    </details>
                  )}
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <CtaBand lang={lang} heading={ev.ctaHeading} body={ev.ctaBody} />
    </main>
  );
}
