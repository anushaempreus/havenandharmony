import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PillButton from "@/components/ui/PillButton";
import Photo from "@/components/ui/Photo";
import FadeUp from "@/components/motion/FadeUp";
import { siteConfig } from "@/lib/siteConfig";
import { pageMetadata } from "@/lib/metadata";
import { images } from "@/lib/images";

export const metadata = pageMetadata(
  "Accommodation",
  "A charming, self-contained studio apartment on forty rural acres near Canberra — private, peaceful and suitable for two."
);

const amenities = [
  "Self-contained studio apartment",
  "Sleeps two",
  "Private ensuite",
  "Tea & coffee",
  "Microwave & fridge",
  "Ample parking",
  "Heated pool",
  "Forty acres of open space",
];

export default function AccommodationPage() {
  return (
    <>
      {/* Immersive hero */}
      <section className="relative flex min-h-[75vh] items-end overflow-hidden bg-forest-deep text-bone">
        <div className="kenburns absolute inset-0 scale-110 bg-cover bg-center" style={{ backgroundImage: `url(${images.accExterior})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent" aria-hidden="true" />
        <Container className="relative z-10 pb-16 pt-32">
          <Eyebrow className="text-apricot">Stay with us</Eyebrow>
          <h1 className="display-1 mt-4 max-w-3xl">Accommodation</h1>
        </Container>
      </section>

      {/* Quick facts strip */}
      <section className="bg-forest text-bone">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-bone/15 py-8 text-center sm:grid-cols-4">
            {[
              { k: "Sleeps", v: "2 guests" },
              { k: "Bathroom", v: "Private ensuite" },
              { k: "Setting", v: "40 acres" },
              { k: "Extras", v: "Heated pool" },
            ].map((f) => (
              <div key={f.k} className="px-4">
                <p className="eyebrow text-apricot">{f.k}</p>
                <p className="mt-1.5 font-[family-name:var(--font-display)] text-xl">{f.v}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Description */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-xl leading-relaxed text-ink/80">
                Escape to this charming, self-contained studio apartment,
                offering a simple yet comfortable stay in a peaceful rural
                setting, suitable for two. Nestled on forty acres and separated
                from the main house, this private retreat provides the perfect
                balance of seclusion and convenience.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">
                Located just a short drive from Canberra, local wineries and
                popular wedding venues, it&rsquo;s an ideal base for exploring the
                region. Enjoy ample parking, open space and a tranquil
                atmosphere.
              </p>
            </div>
            <div className="md:col-span-5">
              <Eyebrow className="text-coral">What&rsquo;s included</Eyebrow>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                {amenities.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-ink/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery — editorial mosaic */}
      <section className="pb-8">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {images.accGallery.map((src, i) => (
              <FadeUp key={i} delay={i * 0.05} className={i === 0 ? "col-span-2 row-span-2" : ""}>
                <div className="group h-full overflow-hidden rounded-2xl">
                  <Photo src={src} alt={`Accommodation photo ${i + 1}`} rounded={false} zoom className={i === 0 ? "h-64 w-full md:h-full" : "h-40 w-full md:h-44"} />
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* On the property */}
      <section className="bg-bone-dark py-20">
        <Container className="max-w-3xl text-center">
          <Eyebrow className="text-coral">On the property</Eyebrow>
          <h2 className="display-2 mt-5 text-forest">Time to simply be</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Wander the grounds, feed the ducks on the dam, sit under the trees
            with a book, or swim and relax by the heated pool. Unwind in a cosy
            nook and simply do nothing.
          </p>
        </Container>
      </section>

      {/* Booking */}
      <section className="bg-forest py-24 text-bone">
        <Container className="max-w-2xl text-center">
          <Eyebrow className="text-apricot">Reservations</Eyebrow>
          <h2 className="display-2 mt-5">Book your stay</h2>
          <p className="mt-5 text-lg text-bone/85">
            Contact {siteConfig.contactName} to check availability and book
            directly with us. You&rsquo;re also welcome to book through Airbnb if
            you prefer.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <PillButton href="/contact" className="bg-coral text-bone hover:bg-coral-deep">Contact us to book</PillButton>
            {siteConfig.airbnbUrl ? (
              <PillButton href={siteConfig.airbnbUrl} variant="outline" external className="border-bone/60 text-bone hover:bg-bone hover:text-forest">Book on Airbnb</PillButton>
            ) : null}
          </div>
        </Container>
      </section>
    </>
  );
}
