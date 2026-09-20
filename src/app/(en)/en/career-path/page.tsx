import PageShell from "@/components/PageShell";
import CareerView from "@/components/career/CareerView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "en",
  path: "/career-path",
  title: "Career path",
  description: "Core-stage and development-stage training, two promotion ladders, leadership development and current openings.",
});

export default function EnCareerPathPage() {
  return (
    <PageShell lang="en" active="/career-path">
      <CareerView lang="en" />
    </PageShell>
  );
}
