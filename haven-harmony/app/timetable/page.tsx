import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PillButton from "@/components/ui/PillButton";
import { siteConfig } from "@/lib/siteConfig";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Timetable",
  "Class timetable for Haven & Harmony — contact us for the current schedule."
);

// Intentional placeholder (Barb asked to leave the timetable blank).
export default function TimetablePage() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-28">
      <span className="amp pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[45vw] text-forest/[0.06]">
        &amp;
      </span>
      <Container className="relative max-w-xl text-center">
        <Eyebrow>Timetable</Eyebrow>
        <h1 className="display-1 mt-4">Coming soon</h1>
        <p className="mt-6 text-lg text-ink/75">
          Our class timetable is being finalised. In the meantime, please
          contact {siteConfig.contactName} for the current schedule and to book
          your spot.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <PillButton href="/contact">Contact us</PillButton>
          <a href={`mailto:${siteConfig.email}`} className="link-underline self-center text-sm font-semibold text-gold">
            {siteConfig.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
