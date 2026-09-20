import type { ReactNode } from "react";
import FadeIn from "@/components/FadeIn";

/**
 * Standard inner-page hero. Solid navy-deep so it sits flush under the sticky
 * header with no seam (the header is the same colour).
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-navy-deep py-14 text-white sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <FadeIn>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-snug sm:text-4xl">{title}</h1>
          {intro ? <p className="prose-cjk mt-4 max-w-2xl text-[15px] text-white/75">{intro}</p> : null}
          {children}
        </FadeIn>
      </div>
    </section>
  );
}
