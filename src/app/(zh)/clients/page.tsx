import PageShell from "@/components/PageShell";
import ClientsView from "@/components/clients/ClientsView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "zh",
  path: "/clients",
  title: "客戶服務",
  description: "你會代表的客戶服務：風險管理、財富管理、經紀、貸款、零售及私人銀行、醫療，以及品味生活活動與講座。",
});

export default function ZhClientsPage() {
  return (
    <PageShell lang="zh" active="/clients">
      <ClientsView lang="zh" />
    </PageShell>
  );
}
