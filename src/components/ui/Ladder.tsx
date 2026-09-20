import FadeIn from "@/components/FadeIn";

export type LadderStage = {
  stage: string;
  label: string;
  items: Array<{ phase: string; title: string; body: string }>;
};

/**
 * Career ladder visual: stacked stage cards joined by a gold spine.
 * No images — pure CSS so it stays crisp on any screen and needs no new assets.
 */
export default function Ladder({ stages }: { stages: LadderStage[] }) {
  return (
    <ol className="mt-8 space-y-5">
      {stages.map((s, i) => (
        <FadeIn key={s.stage} delay={i * 70}>
          <li className="relative rounded-2xl border border-navy/10 bg-white p-6 shadow-card sm:p-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
                {i + 1}
              </span>
              <h3 className="text-lg font-bold text-navy">{s.label}</h3>
              <span className="rounded-full border border-gold/40 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-dark">
                {s.stage}
              </span>
            </div>
            <ul className="mt-5 space-y-4">
              {s.items.map((it) => (
                <li key={it.title} className="border-l-2 border-gold/30 pl-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">{it.phase}</p>
                  <p className="mt-1 text-sm font-semibold text-navy">{it.title}</p>
                  <p className="prose-cjk mt-1 text-sm text-muted">{it.body}</p>
                </li>
              ))}
            </ul>
          </li>
        </FadeIn>
      ))}
    </ol>
  );
}
