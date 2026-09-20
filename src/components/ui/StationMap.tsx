import type { Lang } from "@/lib/site";
import { BRANCHES } from "@/lib/site";
import FadeIn from "@/components/FadeIn";

const STATION_CODE: Record<string, string> = {
  "west-kowloon": "WEK",
  "lo-wu": "K12",
  "lok-ma-chau": "LMC",
};

/**
 * Simple rail-line diagram: the three border-crossing branches on one line,
 * with the one-hour living circle called out. Pure CSS/SVG — no map tiles, no
 * external requests, no fabricated geography.
 */
export default function StationMap({ lang, caption }: { lang: Lang; caption: string }) {
  const hourLabel = lang === "zh" ? "一小時生活圈" : "One-hour living circle";

  return (
    <FadeIn>
      <div className="rounded-2xl border border-white/10 bg-navy-soft p-6 sm:p-8">
        <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold-light">
          <span aria-hidden="true">◍</span>
          {hourLabel}
        </p>

        <ol className="relative mt-8 grid gap-6 sm:grid-cols-3">
          {/* the rail line */}
          <div
            className="absolute left-[13px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-gold/70 via-gold/40 to-gold/70 sm:left-4 sm:right-4 sm:top-[13px] sm:bottom-auto sm:h-0.5 sm:w-auto sm:bg-gradient-to-r"
            aria-hidden="true"
          />
          {BRANCHES.map((b, i) => (
            <li key={b.id} className="relative pl-10 sm:pl-0 sm:pt-10">
              <span
                className="absolute left-0 top-0 inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-gold bg-navy-deep text-[10px] font-bold text-gold sm:left-0"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <p className="text-sm font-bold text-white">{b.name[lang]}</p>
              <p className="mt-1 font-mono text-xs text-gold-light">{STATION_CODE[b.id]}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/60">{b.address[lang]}</p>
              <p className="mt-1 text-xs text-white/50">{b.hours[lang]}</p>
            </li>
          ))}
        </ol>

        <p className="mt-7 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/50">{caption}</p>
      </div>
    </FadeIn>
  );
}
