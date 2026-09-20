import PageShell from "@/components/PageShell";
import ContactView from "@/components/contact/ContactView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "zh",
  path: "/contact",
  title: "預約及申請",
  description: "預約職業諮詢、WhatsApp 對話、招募電郵、辦公室地址與三間鐵路分行。",
});

export default function ZhContactPage() {
  return (
    <PageShell lang="zh" active="/contact">
      <ContactView lang="zh" />
    </PageShell>
  );
}
