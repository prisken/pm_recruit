import PageShell from "@/components/PageShell";
import WhyJoinUsView from "@/components/why/WhyJoinUsView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "en",
  path: "/why-join-us",
  title: "Why choose us",
  description:
    "The Portfolio Management District was founded in 2009 by Mr Chan Wing Yip and has grown from 50 people to 500 consultants. Our Customer Centricity philosophy, exclusive rail-branch access and training ladder.",
});

export default function EnWhyJoinUsPage() {
  return (
    <PageShell lang="en" active="/why-join-us">
      <WhyJoinUsView lang="en" />
    </PageShell>
  );
}
