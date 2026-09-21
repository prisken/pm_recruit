import Link from "next/link";
import type { Lang } from "@/lib/site";
import { route } from "@/lib/site";
import { pages, listPosts } from "@/lib/pages-content";
import { INSIGHT_POSTS } from "@/lib/insights";
import { blogImageFor } from "@/lib/brand-assets";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import InsightCard from "@/components/ui/InsightCard";
import CtaBand from "@/components/ui/CtaBand";

/**
 * Phase 2 — Insights index.
 * Two groups: recruitment insights (incl. the Month-1 content-calendar posts)
 * and 陳總專欄 (the real director columns from the corpus).
 */
export default function InsightsView({ lang }: { lang: Lang }) {
  const ins = pages(lang).insights;
  const posts = listPosts(lang);

  const meta = (slug: string) => INSIGHT_POSTS.find((p) => p.slug === slug);
  const card = (post: (typeof posts)[number], i: number) => {
    const m = meta(post.slug);
    return (
      <InsightCard
        key={post.slug}
        href={route(lang, `/insights/${post.slug}`)}
        tag={post.tag}
        title={post.title}
        excerpt={post.excerpt}
        readMore={ins.readMore}
        slot={m?.slot === "calendar" ? ins.calendarLabel : undefined}
        delay={i * 50}
        image={blogImageFor(post.slug)}
        lang={lang}
      />
    );
  };

  const insightPosts = posts.filter((p) => meta(p.slug)?.group === "insight");
  const columnPosts = posts.filter((p) => meta(p.slug)?.group === "column");

  return (
    <main className="min-h-dvh overflow-x-hidden bg-paper">
      <PageHero eyebrow={ins.eyebrow} title={ins.title} intro={ins.intro} />

      {[
        { id: "insight", heading: ins.groups[0].heading, items: insightPosts, note: ins.calendarNote },
        { id: "column", heading: ins.groups[1].heading, items: columnPosts, note: "" },
      ].map((group, gi) => (
        <section
          key={group.id}
          className={`py-16 sm:py-20 ${gi % 2 === 1 ? "border-t border-navy/10 bg-white" : ""}`}
        >
          <div className="mx-auto max-w-content px-4 sm:px-6">
            <FadeIn>
              <SectionHeading title={group.heading} sub={group.note || undefined} />
            </FadeIn>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map(card)}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-navy/10 bg-white pb-4 pt-10">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <p className="text-xs text-muted">
            <Link className="underline decoration-navy/20 underline-offset-4 hover:text-navy" href={route(lang, "")}>
              {lang === "zh" ? "返回首頁" : "Back to home"}
            </Link>
          </p>
        </div>
      </section>

      <CtaBand lang={lang} heading={ins.ctaHeading} body={ins.ctaBody} />
    </main>
  );
}
