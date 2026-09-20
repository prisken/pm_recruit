import PageShell from "@/components/PageShell";
import StoryView from "@/components/story/StoryView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "en",
  path: "/our-story",
  title: "Our story",
  description: "Founded in 2009 by Mr Chan Wing Yip and grown from 50 to 500 consultants: Customer Centricity, district culture and the Chairman's message.",
});

export default function EnOurStoryPage() {
  return (
    <PageShell lang="en" active="/our-story">
      <StoryView lang="en" />
    </PageShell>
  );
}
