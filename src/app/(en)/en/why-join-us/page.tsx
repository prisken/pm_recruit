import PageShell from "@/components/PageShell";
import WhyJoinUsView from "@/components/why/WhyJoinUsView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "en",
  path: "/why-join-us",
  title: "Why join us",
  description: "Why 500 people chose this family: no income ceiling, exclusive rail-border access, a strong back office and a clear ladder — plus a comparison and FAQ.",
});

export default function EnWhyJoinUsPage() {
  return (
    <PageShell lang="en" active="/why-join-us">
      <WhyJoinUsView lang="en" />
    </PageShell>
  );
}
