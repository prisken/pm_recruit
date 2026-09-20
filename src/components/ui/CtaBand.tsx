import Link from "next/link";
import type { Lang } from "@/lib/site";
import { SITE, route, waLink } from "@/lib/site";
import { content } from "@/lib/content";
import FadeIn from "@/components/FadeIn";

/**
 * The recurring bottom CTA band (navy card, gold button, WhatsApp alternative).
 * Used at the end of every Phase 2 page so each one closes on the booking offer.
 */
export default function CtaBand({
  lang,
  heading,
  body,
  showWhatsApp = true,
}: {
  lang: Lang;
  heading: string;
  body: string;
  showWhatsApp?: boolean;
}) {
  const c = content(lang);
  const waText = lang === "zh" ? "你好，我想了解顧問事業。" : "Hi, I'd like to know more about a career here.";

  return (
    <section className="bg-navy-deep py-16 text-white sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <FadeIn>
          <div className="rounded-3xl border border-gold/25 bg-navy-soft/60 p-7 sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">{heading}</h2>
            <p className="prose-cjk mt-4 max-w-2xl text-[15px] text-white/75">{body}</p>
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
              {showWhatsApp ? (
                <a
                  href={waLink(waText)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10"
                >
                  {c.bookingCta.alt}
                </a>
              ) : null}
            </div>
            <p className="mt-5 text-xs text-white/45">
              {SITE.office[lang]} · {SITE.phone}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
