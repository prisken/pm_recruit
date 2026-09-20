import type { Lang } from "@/lib/site";

/**
 * Visible marker for anything the copy corpus does NOT support.
 * Nothing on this site is invented: unsupported sections say so in the open.
 */
export default function ToConfirm({ lang, children }: { lang: Lang; children?: string }) {
  const label = lang === "zh" ? "待確認 / TO CONFIRM" : "TO CONFIRM / 待確認";
  return (
    <p className="inline-flex flex-wrap items-center gap-2 rounded-full border border-amber-400/50 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-700">
      <span aria-hidden="true">⚠</span>
      <span className="font-semibold">{label}</span>
      {children ? <span className="text-amber-800/80">{children}</span> : null}
    </p>
  );
}
