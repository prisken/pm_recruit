import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import "../globals.css";
import Analytics from "@/components/Analytics";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Join the MTR network's only insurance partner | Portfolio Management District",
    template: "%s | Portfolio Management District",
  },
  description:
    "Portfolio Management District — an AIA financial planning district and the only insurance partner across Hong Kong's rail network, with branches at West Kowloon, Lo Wu and Lok Ma Chau. Explore a career as a consultant.",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071426",
};

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
