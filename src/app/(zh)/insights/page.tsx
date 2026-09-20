import PageShell from "@/components/PageShell";
import InsightsView from "@/components/insights/InsightsView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "zh",
  path: "/insights",
  title: "見解",
  description: "招募觀點與陳總專欄：大灣區趨勢、事業心態、成功故事、財務策劃知識。",
});

export default function ZhInsightsPage() {
  return (
    <PageShell lang="zh" active="/insights">
      <InsightsView lang="zh" />
    </PageShell>
  );
}
