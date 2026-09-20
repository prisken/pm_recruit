import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/lib/site";
import { BRANCHES, SITE, route, waLink } from "@/lib/site";
import { content } from "@/lib/content";
import FadeIn from "@/components/FadeIn";

/**
 * All homepage sections, shared by / (zh-Hant) and /en.
 * Section order: Hero → Stats → 4 pillars → GBA (+ branches) → Testimonials
 * → Insights → Booking CTA.
 */
export default function HomeView({ lang }: { lang: Lang }) {
  const c = content(lang);
  const waText = lang === "zh" ? "你好，我想了解顧問事業。" : "Hi, I'd like to know more about a career here.";

  return (
    <main className="min-h-dvh overflow-x-hidden bg-paper">
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-navy-deep">
        <Image
          src="/images/hero-team.jpg"
          alt={c.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/75 to-navy-deep"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-content px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              {c.hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-[30px] font-bold leading-[1.25] text-white sm:text-5xl sm:leading-[1.2]">
              <span className="block">{c.hero.titleLine1}</span>
              <span className="mt-2 block text-gold-light">{c.hero.titleLine2}</span>
            </h1>
            <p className="prose-cjk mt-6 max-w-2xl text-[15px] text-white/75 sm:text-base">{c.hero.sub}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={route(lang, "/book")}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-bold text-navy-deep transition-colors hover:bg-gold-light"
              >
                {c.hero.ctaPrimary}
              </Link>
              <Link
                href={route(lang, "/why-join-us")}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10"
              >
                {c.hero.ctaSecondary}
              </Link>
            </div>
            <p className="mt-5 text-xs text-white/50">{c.hero.softNote}</p>
          </FadeIn>
        </div>
      </section>

      {/* ── Stats bar ──────────────────────────────────────── */}
      <section className="border-y border-navy-line/40 bg-navy" aria-label={c.stats.map((s) => s.label).join(", ")}>
        <div className="mx-auto grid max-w-content grid-cols-2 gap-x-4 gap-y-7 px-4 py-9 sm:px-6 lg:grid-cols-4">
          {c.stats.map((s) => (
            <div key={s.label}>
              <p className="text-xl font-bold leading-tight text-gold sm:text-2xl">{s.value}</p>
              <p className="mt-1.5 text-sm font-semibold text-white">{s.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-white/50">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4 value pillars ────────────────────────────────── */}
      <section className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{c.pillarsHeading}</h2>
          <p className="mt-2 text-sm text-muted">{c.pillarsSub}</p>
          <div className="hairline-gold mt-5 h-px w-24" aria-hidden="true" />
        </FadeIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {c.pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 60}>
              <article className="h-full rounded-2xl border border-navy/10 bg-white p-6 shadow-card transition-shadow hover:shadow-gold sm:p-7">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-sm font-bold text-gold-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-navy">{p.title}</h3>
                <p className="prose-cjk mt-3 text-sm text-muted">{p.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Greater Bay Area + rail branches ───────────────── */}
      <section id="branches" className="scroll-mt-20 bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">{c.gba.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-2xl font-bold leading-snug sm:text-3xl">{c.gba.title}</h2>
            <div className="mt-8 max-w-3xl space-y-4">
              {c.gba.paras.map((p) => (
                <p key={p} className="prose-cjk text-[15px] text-white/75">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>

          <h3 className="mt-14 text-sm font-bold uppercase tracking-[0.18em] text-gold">
            {c.gba.branchesHeading}
          </h3>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {BRANCHES.map((b, i) => (
              <FadeIn key={b.id} delay={i * 60}>
                <article className="h-full overflow-hidden rounded-2xl border border-white/10 bg-navy-soft">
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
                    <h4 className="text-base font-bold text-white">{b.name[lang]}</h4>
                    <p className="mt-2 text-sm text-white/65">{b.address[lang]}</p>
                    <p className="mt-1 text-sm text-gold-light">{b.hours[lang]}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials (PLACEHOLDER quotes) ─────────────── */}
      <section className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{c.testimonials.heading}</h2>
          <p className="mt-3 inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-gold-dark">
            {c.testimonials.note}
          </p>
        </FadeIn>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.testimonials.items.map((t, i) => (
            <FadeIn key={t.name} delay={i * 50}>
              <figure className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-card">
                <span className="font-serif text-3xl leading-none text-gold" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="prose-cjk mt-3 flex-1 text-sm text-ink/85">{t.quote}</blockquote>
                <figcaption className="mt-5 border-t border-navy/10 pt-4">
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-muted">{t.detail}</p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Latest insights ───────────────────────────────── */}
      <section id="insights" className="scroll-mt-20 border-t border-navy/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">{c.insights.heading}</h2>
            <p className="mt-2 text-sm text-muted">{c.insights.sub}</p>
          </FadeIn>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.insights.items.map((it, i) => (
              <FadeIn key={it.title} delay={i * 50}>
                {/* Blog routes arrive in a later phase — teasers link nowhere for now. */}
                <Link
                  href="#"
                  aria-disabled="true"
                  className="flex h-full flex-col rounded-2xl border border-navy/10 bg-paper p-6 transition-colors hover:border-gold/50"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-dark">
                    {it.tag}
                  </span>
                  <h3 className="mt-3 text-base font-bold leading-snug text-navy">{it.title}</h3>
                  <p className="prose-cjk mt-2 flex-1 text-sm text-muted">{it.excerpt}</p>
                  <span className="mt-4 text-xs font-semibold text-gold-dark">{c.insights.readMore} →</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking CTA block ─────────────────────────────── */}
      <section className="bg-navy-deep py-16 text-white sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <FadeIn>
            <div className="rounded-3xl border border-gold/25 bg-navy-soft/60 p-7 sm:p-10">
              <h2 className="text-2xl font-bold sm:text-3xl">{c.bookingCta.heading}</h2>
              <p className="prose-cjk mt-4 max-w-2xl text-[15px] text-white/75">{c.bookingCta.body}</p>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/65">
                {c.bookingCta.points.map((p) => (
                  <li key={p} className="inline-flex items-center gap-2">
                    <span className="text-gold" aria-hidden="true">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={route(lang, "/book")}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-bold text-navy-deep transition-colors hover:bg-gold-light"
                >
                  {c.bookingCta.cta}
                </Link>
                <a
                  href={waLink(waText)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10"
                >
                  {c.bookingCta.alt}
                </a>
              </div>
              <p className="mt-5 text-xs text-white/45">
                {SITE.office[lang]} · {SITE.phone}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
