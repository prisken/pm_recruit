import type { Lang } from "@/lib/site";

/**
 * Visible marker for SEED content.
 *
 * Seed copy exists so a preview page reads complete before the district has
 * supplied the real material. It is never presented as an approved fact: every
 * seeded block carries this chip *and* keeps the page's own note, so nobody can
 * mistake a demonstration figure for confirmed district data.
 *
 * Every seeded block also carries a stable id. Grep for `data-seed` (views) or
 * `SEED-<n>` (src/lib/pages-content.ts) to find and replace them one by one.
 */
export const SEED_LABEL = {
  zh: "示範 · seed",
  en: "Seed · sample",
} as const;

/** Label only — sits beside a seeded value (a date, a time, a name list). */
export function SeedChip({ lang, id }: { lang: Lang; id: string }) {
  return (
    <span
      data-seed={id}
      className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-dark"
    >
      <span aria-hidden="true">◇</span>
      {SEED_LABEL[lang]}
    </span>
  );
}

/** Label + one-line explanation, for the seeded block itself. */
export default function SeedNote({
  lang,
  id,
  children,
}: {
  lang: Lang;
  id: string;
  children?: string;
}) {
  return (
    <p className="inline-flex flex-wrap items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-xs font-medium text-gold-dark">
      <span data-seed={id} className="font-semibold">
        {SEED_LABEL[lang]}
      </span>
      {children ? <span className="text-ink/70">{children}</span> : null}
    </p>
  );
}
