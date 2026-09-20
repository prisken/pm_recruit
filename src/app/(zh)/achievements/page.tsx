import PageShell from "@/components/PageShell";
import AchievementsView from "@/components/achievements/AchievementsView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "zh",
  path: "/achievements",
  title: "成就與團隊",
  description: "MDRT、COT 名單、區域獎項、雜誌專訪，以及社會責任與義工活動。",
});

export default function ZhAchievementsPage() {
  return (
    <PageShell lang="zh" active="/achievements">
      <AchievementsView lang="zh" />
    </PageShell>
  );
}
