import PageShell from "@/components/PageShell";
import InsightPostView from "@/components/insights/InsightPostView";
import { pageMetadata } from "@/lib/metadata";
import { insightPost, pages } from "@/lib/pages-content";
import { INSIGHT_SLUGS } from "@/lib/insights";

export const dynamicParams = false;

export function generateStaticParams() {
  return INSIGHT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = insightPost("zh", slug);
  const fallback = pages("zh").insights;
  return pageMetadata({
    lang: "zh",
    path: `/insights/${slug}`,
    title: post ? post.title : fallback.title,
    description: post ? post.excerpt : fallback.intro,
  });
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <PageShell lang="zh" active="/insights">
      <InsightPostView lang="zh" slug={slug} />
    </PageShell>
  );
}
