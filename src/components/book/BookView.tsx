import type { Lang } from "@/lib/site";
import { SITE } from "@/lib/site";
import { content } from "@/lib/content";
import LeadForm from "@/components/LeadForm";
import FadeIn from "@/components/FadeIn";

/**
 * Phase 1 placeholder booking page.
 * No calendar integration, no email sending, no persistence — the form
 * validates in the browser and confirms on screen.
 */
export default function BookView({ lang }: { lang: Lang }) {
  const c = content(lang);

  return (
    <main className="min-h-dvh overflow-x-hidden bg-paper">
      <section className="bg-navy-deep py-14 text-white sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            {c.hero.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-snug sm:text-4xl">{c.book.heading}</h1>
          <p className="prose-cjk mt-4 max-w-2xl text-[15px] text-white/75">{c.book.intro}</p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/60">
            {c.bookingCta.points.map((p) => (
              <li key={p} className="inline-flex items-center gap-2">
                <span className="text-gold" aria-hidden="true">
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <FadeIn>
            <LeadForm lang={lang} />
          </FadeIn>
          <aside className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card">
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-gold-dark">
              {c.footer.officeHeading}
            </h2>
            <address className="mt-4 space-y-1 text-sm not-italic text-muted">
              <p className="font-medium text-ink">{SITE.office[lang]}</p>
              <p>Tel: {SITE.phone}</p>
              <p>Fax: {SITE.fax}</p>
              <p className="pt-2">
                <a
                  className="underline decoration-navy/20 underline-offset-4 hover:text-navy"
                  href={`mailto:${SITE.email}`}
                >
                  {SITE.email}
                </a>
              </p>
            </address>
            <p className="mt-6 border-t border-navy/10 pt-4 text-xs text-muted">{c.footer.disclaimer}</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
