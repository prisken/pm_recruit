import PageShell from "@/components/PageShell";
import InsightsView from "@/components/insights/InsightsView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "en",
  path: "/insights",
  title: "Insights",
  description: "Recruitment insights and the Chairman's columns: GBA trends, career mindset, success stories and financial-planning knowledge.",
});

export default function EnInsightsPage() {
  return (
    <PageShell lang="en" active="/insights">
      <InsightsView lang="en" />
    </PageShell>
  );
}
