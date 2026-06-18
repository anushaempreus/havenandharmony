import { Suspense } from "react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Photo from "@/components/ui/Photo";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/siteConfig";
import { pageMetadata } from "@/lib/metadata";
import { images } from "@/lib/images";

export const metadata = pageMetadata(
  "Contact us",
  "Get in touch with Haven & Harmony to book classes, retreats or accommodation."
);

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <Eyebrow>Get in touch</Eyebrow>
            <h1 className="display-2 mt-5">Let&rsquo;s talk</h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              Give us a call or send a message anytime. {siteConfig.responseTime}
            </p>

            <dl className="mt-10 space-y-5 text-ink/80">
              <div>
                <dt className="eyebrow text-coral">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${siteConfig.email}`} className="link-underline">{siteConfig.email}</a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-coral">Phone</dt>
                <dd className="mt-1">
                  <a href={siteConfig.phoneHref} className="link-underline">{siteConfig.phone}</a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-coral">Where we are</dt>
                <dd className="mt-1">{siteConfig.address.full}</dd>
              </div>
            </dl>

            <Photo src={images.contact} alt="Wildflowers on the property" className="mt-10 hidden h-64 w-full md:block" />
          </div>

          <div className="rounded-2xl border border-forest/15 bg-bone-dark/40 p-7 sm:p-9">
            <Suspense fallback={<div className="h-96" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Container>
    </section>
  );
}
