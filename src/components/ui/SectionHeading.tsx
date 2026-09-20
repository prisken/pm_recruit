import type { ReactNode } from "react";

/**
 * Shared section heading: optional gold eyebrow, title, optional sub-copy and
 * the gold hairline used across the site. `onDark` flips the colours for the
 * navy sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  sub,
  onDark = false,
  as: As = "h2",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  onDark?: boolean;
  as?: "h2" | "h3";
  children?: ReactNode;
}) {
  return (
    <div>
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
      ) : null}
      <As
        className={`${eyebrow ? "mt-4" : ""} text-2xl font-bold leading-snug sm:text-3xl ${
          onDark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </As>
      {sub ? (
        <p className={`prose-cjk mt-3 max-w-3xl text-sm ${onDark ? "text-white/70" : "text-muted"}`}>{sub}</p>
      ) : null}
      <div className="hairline-gold mt-5 h-px w-24" aria-hidden="true" />
      {children}
    </div>
  );
}
