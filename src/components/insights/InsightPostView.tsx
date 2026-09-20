import Link from "next/link";
import type { Lang } from "@/lib/site";
import { route } from "@/lib/site";
import { pages, insightPost } from "@/lib/pages-content";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/FadeIn";
import CtaBand from "@/components/ui/CtaBand";

/**
 * Phase 2 — one insight article.
 * Renders the post body, an optional pull-quote, an optional author note
 * (used for the 陳總專欄 originals) and closes with the booking CTA.
 */
export default function InsightPostView({ lang, slug }: { lang: Lang; slug: string }) {
  const ins = pages(lang).insights;
  const post = insightPost(lang, slug);

  if (!post) {
    return (
      <main className="min-h-dvh overflow-x-hidden bg-paper">
        <PageHero
          eyebrow={ins.eyebrow}
          title={lang === "zh" ? "找不到文章" : "Article not found"}
          intro={lang === "zh" ? "此文章可能已經移動或不存在。" : "This article may have moved or no longer exists."}
        >
          <Link
            href={route(lang, "/insights")}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-bold text-navy-deep"
          >
            {ins.title}
          </Link>
        </PageHero>
      </main>
    );
  }

  return (
    <main className="min-h-dvh overflow-x-hidden bg-paper">
      <PageHero eyebrow={post.tag} title={post.title} intro={post.excerpt}>
        <p className="mt-6 text-xs text-white/50">
          <Link className="underline decoration-white/25 underline-offset-4 hover:text-white" href={route(lang, "/insights")}>
            ← {ins.title}
          </Link>
        </p>
      </PageHero>

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
        <FadeIn>
          <div className="space-y-5">
            {post.body.map((p) => (
              <p key={p} className="prose-cjk text-[16px] leading-relaxed text-ink/85">
                {p}
              </p>
            ))}
          </div>

          {post.quote ? (
            <blockquote className="prose-cjk mt-8 rounded-2xl border border-gold/30 bg-white p-6 text-lg font-semibold text-navy shadow-card">
              「{post.quote}」
            </blockquote>
          ) : null}

          {post.authorNote ? (
            <p className="mt-8 border-t border-navy/10 pt-4 text-xs leading-relaxed text-muted">{post.authorNote}</p>
          ) : null}
        </FadeIn>
      </article>

      <CtaBand lang={lang} heading={ins.ctaHeading} body={ins.ctaBody} />
    </main>
  );
}
