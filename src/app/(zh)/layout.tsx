import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import "../globals.css";
import Analytics from "@/components/Analytics";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "加入港鐵唯一保險合作夥伴 | 資產管理區域 Portfolio Management District",
    template: "%s | 資產管理區域",
  },
  description:
    "資產管理區域（Portfolio Management District）——友邦保險旗下財務策劃團隊，全港鐵路唯一保險合作夥伴，於西九龍、羅湖及落馬洲口岸設有分行。誠邀你了解顧問事業的發展機會。",
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "64x64" }],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071426",
};

export default function ZhLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body className="min-h-dvh antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
