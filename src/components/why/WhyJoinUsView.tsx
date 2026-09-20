import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/lib/site";
import { route } from "@/lib/site";
import { content } from "@/lib/content";

/**
 * Phase 1 stub for the hero's secondary CTA.
 * Kept short on purpose — the full "why join us" page is a later phase.
 */
export default function WhyJoinUsView({ lang }: { lang: Lang }) {
  const c = content(lang);

  return (
    <main className="min-h-dvh overflow-x-hidden bg-paper">
      <section className="bg-navy-deep py-14 text-white sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            {c.hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-snug sm:text-4xl">{c.why.heading}</h1>
          <p className="mt-4 text-sm text-gold-light">{c.why.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            {c.why.body.map((p) => (
              <p key={p} className="prose-cjk text-[15px] text-ink/80">
                {p}
              </p>
            ))}
            <Link
              href={route(lang, "/book")}
              className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-bold text-navy-deep transition-colors hover:bg-gold-light"
            >
              {c.why.cta}
            </Link>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card">
            <Image
              src="/images/team-wide.jpg"
              alt={c.hero.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.pillars.map((p, i) => (
            <article key={p.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-sm font-bold text-gold-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-4 text-base font-bold leading-snug text-navy">{p.title}</h2>
              <p className="prose-cjk mt-3 text-sm text-muted">{p.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
