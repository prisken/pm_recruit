import type { Lang } from "@/lib/site";
import FadeIn from "@/components/FadeIn";
import { SeedChip } from "@/components/ui/SeedNote";

/**
 * FAQ list built on native <details> — works with JS disabled, keyboard
 * accessible, and produces no console noise. An entry carrying `seedId` shows
 * the 示範 · seed chip next to its (demonstration) answer.
 */
export default function FaqList({
  items,
  lang,
}: {
  items: Array<{ q: string; a: string; seedId?: string }>;
  lang: Lang;
}) {
  return (
    <div className="mt-8 space-y-3">
      {items.map((f, i) => (
        <FadeIn key={f.q} delay={i * 40}>
          <details className="group rounded-2xl border border-navy/10 bg-white shadow-card">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[15px] font-bold text-navy">
              <span>{f.q}</span>
              <span
                className="shrink-0 text-gold transition-transform group-open:rotate-45"
                aria-hidden="true"
              >
                ＋
              </span>
            </summary>
            <div className="prose-cjk border-t border-navy/10 px-5 py-4 text-sm text-muted">
              {f.seedId ? (
                <span className="mb-3 inline-block align-middle">
                  <SeedChip lang={lang} id={f.seedId} />
                </span>
              ) : null}
              <p>{f.a}</p>
            </div>
          </details>
        </FadeIn>
      ))}
    </div>
  );
}
