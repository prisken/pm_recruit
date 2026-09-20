import PageShell from "@/components/PageShell";
import WhyJoinUsView from "@/components/why/WhyJoinUsView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "zh",
  path: "/why-join-us",
  title: "為什麼選擇我們",
  description:
    "資產管理區域於 2009 年由陳永業先生創立，由 50 人發展至 500 位精英顧問。了解我們的 Customer Centricity 理念、獨家鐵路口岸優勢與培訓階梯。",
});

export default function ZhWhyJoinUsPage() {
  return (
    <PageShell lang="zh" active="/why-join-us">
      <WhyJoinUsView lang="zh" />
    </PageShell>
  );
}
