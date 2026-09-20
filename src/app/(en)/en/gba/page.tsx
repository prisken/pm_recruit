import PageShell from "@/components/PageShell";
import GbaView from "@/components/gba/GbaView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "en",
  path: "/gba",
  title: "GBA opportunity",
  description: "The Greater Bay Area one-hour living circle and the three border branches of the rail network's only insurance partner.",
});

export default function EnGbaPage() {
  return (
    <PageShell lang="en" active="/gba">
      <GbaView lang="en" />
    </PageShell>
  );
}
