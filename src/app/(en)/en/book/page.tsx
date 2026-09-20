import PageShell from "@/components/PageShell";
import BookView from "@/components/book/BookView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "en",
  path: "/book",
  title: "Book a career chat",
  description:
    "Book a relaxed 30-minute conversation. Leave your name, phone, email and a preferred time slot and we will confirm shortly. Meeting us commits you to nothing.",
});

export default function EnBookPage() {
  return (
    <PageShell lang="en" active="/book">
      <BookView lang="en" />
    </PageShell>
  );
}
