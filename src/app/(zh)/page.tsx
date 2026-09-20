import PageShell from "@/components/PageShell";
import HomeView from "@/components/home/HomeView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "zh",
  path: "",
  title: "加入港鐵唯一保險合作夥伴 | 資產管理區域 招募",
  description:
    "500+ 精英顧問、眾多 MDRT · TOT · COT 會員、全港鐵路唯一保險合作夥伴、清晰晉升階梯。在大灣區「一小時生活圈」開創無限可能。立即預約職業諮詢。",
});

export default function ZhHomePage() {
  return (
    <PageShell lang="zh" active="">
      <HomeView lang="zh" />
    </PageShell>
  );
}
