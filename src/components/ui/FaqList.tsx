import FadeIn from "@/components/FadeIn";

/**
 * FAQ list built on native <details> — works with JS disabled, keyboard
 * accessible, and produces no console noise.
 */
export default function FaqList({ items }: { items: Array<{ q: string; a: string }> }) {
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
            <p className="prose-cjk border-t border-navy/10 px-5 py-4 text-sm text-muted">{f.a}</p>
          </details>
        </FadeIn>
      ))}
    </div>
  );
}
