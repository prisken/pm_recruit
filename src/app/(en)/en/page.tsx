import PageShell from "@/components/PageShell";
import HomeView from "@/components/home/HomeView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "en",
  path: "",
  title: "Join the MTR network's only insurance partner | Portfolio Management District",
  description:
    "500+ consultants, MDRT · TOT · COT members, the only insurance partner across Hong Kong's rail network and a clear promotion ladder. Build your career in the Greater Bay Area's one-hour living circle.",
});

export default function EnHomePage() {
  return (
    <PageShell lang="en" active="">
      <HomeView lang="en" />
    </PageShell>
  );
}
