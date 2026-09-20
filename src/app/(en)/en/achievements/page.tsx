import PageShell from "@/components/PageShell";
import AchievementsView from "@/components/achievements/AchievementsView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "en",
  path: "/achievements",
  title: "Achievements",
  description: "MDRT and COT members, district awards, magazine interviews, social responsibility and volunteering.",
});

export default function EnAchievementsPage() {
  return (
    <PageShell lang="en" active="/achievements">
      <AchievementsView lang="en" />
    </PageShell>
  );
}
