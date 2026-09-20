import PageShell from "@/components/PageShell";
import BookView from "@/components/book/BookView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "zh",
  path: "/book",
  title: "預約職業諮詢",
  description:
    "預約一個 30 分鐘、沒有壓力的對話。填寫姓名、電話、電郵與方便時段，我們會盡快跟你確認。見面不代表要決定什麼。",
});

export default function ZhBookPage() {
  return (
    <PageShell lang="zh" active="/book">
      <BookView lang="zh" />
    </PageShell>
  );
}
