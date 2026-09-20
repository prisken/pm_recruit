import PageShell from "@/components/PageShell";
import EventsView from "@/components/events/EventsView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "en",
  path: "/events",
  title: "Events",
  description: "Roadshows, major exhibitions, internal team activities and training — reserve a place on each.",
});

export default function EnEventsPage() {
  return (
    <PageShell lang="en" active="/events">
      <EventsView lang="en" />
    </PageShell>
  );
}
