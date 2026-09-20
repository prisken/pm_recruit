import PageShell from "@/components/PageShell";
import ContactView from "@/components/contact/ContactView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  lang: "en",
  path: "/contact",
  title: "Contact & apply",
  description: "Book a career chat, WhatsApp us, or find our office address and three rail branches.",
});

export default function EnContactPage() {
  return (
    <PageShell lang="en" active="/contact">
      <ContactView lang="en" />
    </PageShell>
  );
}
