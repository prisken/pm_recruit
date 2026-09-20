import PageShell from "@/components/PageShell";
import ClientsView from "@/components/clients/ClientsView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "en",
  path: "/clients",
  title: "Client services",
  description: "The client service you will represent: risk and wealth management, brokerage, loans, retail & private banking, medical, plus lifestyle events and talks.",
});

export default function EnClientsPage() {
  return (
    <PageShell lang="en" active="/clients">
      <ClientsView lang="en" />
    </PageShell>
  );
}
