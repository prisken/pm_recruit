import PageShell from "@/components/PageShell";
import CareerView from "@/components/career/CareerView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "zh",
  path: "/career-path",
  title: "事業發展",
  description: "核心階段與發展階段課程、個人銷售與營業管理兩條晉升階梯，以及領袖培育與現正招聘。",
});

export default function ZhCareerPathPage() {
  return (
    <PageShell lang="zh" active="/career-path">
      <CareerView lang="zh" />
    </PageShell>
  );
}
