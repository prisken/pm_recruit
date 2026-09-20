import PageShell from "@/components/PageShell";
import WhyJoinUsView from "@/components/why/WhyJoinUsView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "zh",
  path: "/why-join-us",
  title: "為什麼選擇我們",
  description: "為什麼 500 人選擇加入這個家庭：收入無限、獨家鐵路口岸優勢、強大後勤、清晰晉升階梯，附與一般保險公司的分別與常見問題。",
});

export default function ZhWhyJoinUsPage() {
  return (
    <PageShell lang="zh" active="/why-join-us">
      <WhyJoinUsView lang="zh" />
    </PageShell>
  );
}
