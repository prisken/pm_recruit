import type { Lang } from "@/lib/site";
import FadeIn from "@/components/FadeIn";

/**
 * "How we differ" comparison. Mobile-first: cards stacked on a phone, a real
 * table from sm upwards.
 *
 * Compliance note: the right-hand column is general industry framing, NOT an
 * attack on any named company — the note under the table says so explicitly.
 */
export default function CompareTable({
  lang,
  rows,
  usLabel,
  otherLabel,
  note,
}: {
  lang: Lang;
  rows: Array<{ topic: string; us: string; others: string }>;
  usLabel: string;
  otherLabel: string;
  note: string;
}) {
  return (
    <FadeIn>
      {/* Phone: stacked cards */}
      <div className="space-y-4 sm:hidden">
        {rows.map((r) => (
          <div key={r.topic} className="rounded-2xl border border-navy/10 bg-white p-5 shadow-card">
            <h3 className="text-sm font-bold text-navy">{r.topic}</h3>
            <div className="mt-3 rounded-xl border border-gold/30 bg-gold/5 p-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-dark">{usLabel}</p>
              <p className="prose-cjk mt-1 text-sm text-ink/85">{r.us}</p>
            </div>
            <div className="mt-2 rounded-xl border border-navy/10 bg-paper p-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">{otherLabel}</p>
              <p className="prose-cjk mt-1 text-sm text-muted">{r.others}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet + up: a real table */}
      <div className="hidden overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-card sm:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th scope="col" className="px-5 py-4 font-semibold">
                {lang === "zh" ? "比較項目" : "Topic"}
              </th>
              <th scope="col" className="px-5 py-4 font-semibold text-gold-light">
                {usLabel}
              </th>
              <th scope="col" className="px-5 py-4 font-semibold text-white/70">
                {otherLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.topic} className={i % 2 ? "bg-paper/60" : "bg-white"}>
                <th scope="row" className="w-1/5 px-5 py-4 align-top font-semibold text-navy">
                  {r.topic}
                </th>
                <td className="px-5 py-4 align-top">
                  <span className="prose-cjk text-ink/85">{r.us}</span>
                </td>
                <td className="px-5 py-4 align-top">
                  <span className="prose-cjk text-muted">{r.others}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted">{note}</p>
    </FadeIn>
  );
}
