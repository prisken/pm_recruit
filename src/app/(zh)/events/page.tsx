import PageShell from "@/components/PageShell";
import EventsView from "@/components/events/EventsView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "zh",
  path: "/events",
  title: "活動",
  description: "路演活動、大型展覽、區域內部活動與培訓；每項活動均可留位。",
});

export default function ZhEventsPage() {
  return (
    <PageShell lang="zh" active="/events">
      <EventsView lang="zh" />
    </PageShell>
  );
}
