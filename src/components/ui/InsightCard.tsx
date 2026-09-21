import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import AssetImage from "@/components/ui/AssetImage";
import type { Lang } from "@/lib/site";
import type { BrandImage } from "@/lib/brand-assets";

/**
 * Blog / insight card. Links to a real article route (`/insights/<slug>` or
 * `/en/insights/<slug>`) — no dead `#` links.
 */
export default function InsightCard({
  href,
  tag,
  title,
  excerpt,
  readMore,
  slot,
  delay = 0,
  image,
  lang,
}: {
  href: string;
  tag: string;
  title: string;
  excerpt: string;
  readMore: string;
  slot?: string;
  delay?: number;
  /** optional delivered blog artwork (slug-matched) */
  image?: BrandImage | null;
  lang: Lang;
}) {
  return (
    <FadeIn delay={delay} className="h-full">
      <Link
        href={href}
        className="flex h-full flex-col rounded-2xl border border-navy/10 bg-paper p-6 transition-colors hover:border-gold/50 hover:shadow-card"
      >
        {image ? (
          <div className="mb-4 overflow-hidden rounded-xl border border-navy/10">
            <AssetImage
              image={image}
              lang={lang}
              className="block w-full"
              imgClassName="block h-auto w-full object-cover"
            />
          </div>
        ) : null}
        <span className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-dark">{tag}</span>
          {slot ? (
            <span className="rounded-full border border-navy/15 px-2 py-0.5 text-[10px] font-semibold text-muted">
              {slot}
            </span>
          ) : null}
        </span>
        <h3 className="mt-3 text-base font-bold leading-snug text-navy">{title}</h3>
        <p className="prose-cjk mt-2 flex-1 text-sm text-muted">{excerpt}</p>
        <span className="mt-4 text-xs font-semibold text-gold-dark">{readMore} →</span>
      </Link>
    </FadeIn>
  );
}
