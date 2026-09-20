import type { Lang } from "@/lib/site";
import { BRANCHES, SITE, waLink } from "@/lib/site";
import { pages } from "@/lib/pages-content";
import { content } from "@/lib/content";
import FadeIn from "@/components/FadeIn";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ToConfirm from "@/components/ui/ToConfirm";
import CtaBand from "@/components/ui/CtaBand";

/**
 * Phase 2 — Contact & apply.
 * Reuses the same booking flow as /book (the LeadForm component), with the
 * real HQ address, phone, fax, branches, WhatsApp and the placeholder email.
 */
export default function ContactView({ lang }: { lang: Lang }) {
  const ct = pages(lang).contact;
  const c = content(lang);
  const waText = lang === "zh" ? "你好，我想了解顧問事業。" : "Hi, I'd like to know more about a career here.";

  const channels: Array<{ label: string; value: string; href?: string }> = [
    { label: ct.whatsappLabel, value: ct.whatsappValue, href: waLink(waText) },
    { label: ct.emailLabel, value: SITE.email, href: `mailto:${SITE.email}` },
    { label: ct.phoneLabel, value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
    { label: ct.faxLabel, value: SITE.fax },
  ];

  return (
    <main className="min-h-dvh overflow-x-hidden bg-paper">
      <PageHero eyebrow={ct.eyebrow} title={ct.title} intro={ct.intro}>
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
      </PageHero>

      <section className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <FadeIn>
            <h2 className="text-xl font-bold text-navy sm:text-2xl">{c.book.heading}</h2>
            <p className="prose-cjk mt-2 text-sm text-muted">{c.book.intro}</p>
            <div className="mt-6">
              <LeadForm lang={lang} idPrefix="contact" />
            </div>
          </FadeIn>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card">
              <SectionHeading title={ct.channelsHeading} />
              <ul className="mt-5 space-y-4">
                {channels.map((ch) => (
                  <li key={ch.label}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-dark">{ch.label}</p>
                    {ch.href ? (
                      <a
                        className="text-sm font-medium text-ink underline decoration-navy/20 underline-offset-4 hover:text-navy"
                        href={ch.href}
                        {...(ch.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                      >
                        {ch.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-ink">{ch.value}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card">
              <SectionHeading title={ct.officeHeading} />
              <address className="mt-4 space-y-1 text-sm not-italic text-muted">
                <p className="font-medium text-ink">{SITE.office[lang]}</p>
                <p>Tel: {SITE.phone}</p>
                <p>Fax: {SITE.fax}</p>
              </address>
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-dark">
                {ct.officeHoursHeading}
              </p>
              <div className="mt-3">
                <ToConfirm lang={lang}>{ct.officeHoursNote}</ToConfirm>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Branches */}
      <section className="border-y border-navy/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <FadeIn>
            <SectionHeading title={ct.branchesHeading} sub={ct.branchesNote} />
          </FadeIn>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {BRANCHES.map((b, i) => (
              <FadeIn key={b.id} delay={i * 50} className="h-full">
                <article className="h-full rounded-2xl border border-navy/10 bg-paper p-5">
                  <h3 className="text-base font-bold text-navy">{b.name[lang]}</h3>
                  <p className="mt-2 text-sm text-muted">{b.address[lang]}</p>
                  <p className="mt-1 text-sm font-medium text-gold-dark">{b.hours[lang]}</p>
                </article>
              </FadeIn>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted">{c.footer.disclaimer}</p>
        </div>
      </section>

      <CtaBand lang={lang} heading={ct.ctaHeading} body={ct.ctaBody} />
    </main>
  );
}
