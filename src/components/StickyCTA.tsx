import Link from "next/link";
import type { Lang } from "@/lib/site";
import { route } from "@/lib/site";
import { content } from "@/lib/content";

/**
 * Persistent "立即預約" call to action.
 * Small screens: a fixed bottom bar (the header CTA is hidden at that width).
 * Larger screens: the sticky header keeps its gold CTA visible, and this bar
 * collapses — so there is exactly one persistent primary CTA at any width.
 */
export default function StickyCTA({ lang }: { lang: Lang }) {
  const c = content(lang);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-deep/95 px-4 pb-[calc(env(safe-area-inset-bottom,0px)+0.6rem)] pt-2.5 backdrop-blur sm:hidden">
      <div className="flex items-center gap-2">
        <Link
          href={route(lang, "/book")}
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-gold px-5 text-sm font-bold text-navy-deep active:bg-gold-light"
        >
          {c.hero.ctaPrimary}
        </Link>
        <Link
          href={route(lang, "/why-join-us")}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-4 text-xs font-semibold text-white/80"
        >
          {c.nav.why}
        </Link>
      </div>
    </div>
  );
}
