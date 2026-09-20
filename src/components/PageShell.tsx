import type { ReactNode } from "react";
import type { Lang } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyCTA from "@/components/StickyCTA";

/**
 * Every page carries: sticky header CTA, mobile sticky 立即預約 bar,
 * floating WhatsApp icon and the language toggle.
 */
export default function PageShell({
  lang,
  active = "",
  children,
}: {
  lang: Lang;
  active?: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader lang={lang} active={active} />
      {children}
      <SiteFooter lang={lang} />
      <StickyCTA lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </>
  );
}
