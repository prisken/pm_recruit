import PageShell from "@/components/PageShell";
import StoryView from "@/components/story/StoryView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "zh",
  path: "/our-story",
  title: "我們的故事",
  description: "資產管理區域 2009 年由陳永業先生創立，由 50 人發展至 500 位顧問；Customer Centricity 理念、區域文化與陳總的話。",
});

export default function ZhOurStoryPage() {
  return (
    <PageShell lang="zh" active="/our-story">
      <StoryView lang="zh" />
    </PageShell>
  );
}
