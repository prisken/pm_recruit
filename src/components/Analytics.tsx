import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

/**
 * Analytics.
 *
 * GA4 is a PLACEHOLDER: no real measurement ID is configured and the external
 * gtag script is only injected when NEXT_PUBLIC_GA_ID is set (e.g.
 * "G-XXXXXXXXXX" — replace with the real property ID before launch). Keeping it
 * unset means the preview makes no third-party request, which also keeps the
 * browser console clean.
 *
 * Vercel Web Analytics runs out of the box on Vercel deployments.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
          </Script>
        </>
      ) : null}
      <VercelAnalytics />
    </>
  );
}
