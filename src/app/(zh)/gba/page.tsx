import PageShell from "@/components/PageShell";
import GbaView from "@/components/gba/GbaView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "zh",
  path: "/gba",
  title: "大灣區機會",
  description: "大灣區「一小時生活圈」與全港鐵路唯一保險合作夥伴的三間口岸分行：西九龍、羅湖、落馬洲。",
});

export default function ZhGbaPage() {
  return (
    <PageShell lang="zh" active="/gba">
      <GbaView lang="zh" />
    </PageShell>
  );
}
