import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PillButton from "@/components/ui/PillButton";
import Photo from "@/components/ui/Photo";
import FadeUp from "@/components/motion/FadeUp";
import { pageMetadata } from "@/lib/metadata";
import { images } from "@/lib/images";

export const metadata = pageMetadata(
  "Yoga & Pilates",
  "A cosy home studio near Canberra — a safe, welcoming space to immerse yourself in your yoga practice."
);

const classes = [
  { name: "Harmony Flow", copy: "A gentle flow to ease the body and quiet the mind." },
  { name: "Healthy Flow", copy: "A more invigorating flow to build strength and energy." },
  { name: "Meditative Yin", copy: "Slow, grounding holds to settle and open the body." },
];

const fees = [
  { label: "10 Class Pack (Term)", price: "$200" },
  { label: "20 Class Pack", price: "$300" },
  { label: "Casual Visit", price: "$25 per class" },
];

export default function YogaPage() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <Eyebrow className="text-coral">Classes</Eyebrow>
              <h1 className="display-2 mt-5">Yoga &amp; Pilates</h1>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                Our cosy home studio provides a safe and welcoming space for you
                to immerse yourself in your yoga practice.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                Whether you prefer a gentle Harmony Flow, an invigorating Healthy
                Flow, or a serene Meditative Yin, our teachers are here to support
                and guide you. Classes suit everyone, from beginners to seasoned
                yogis.
              </p>
            </div>
            <FadeUp delay={0.1}>
              <Photo src={images.studio} alt="The home studio" className="h-[28rem] w-full" />
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="bg-bone-dark py-20">
        <Container>
          <Eyebrow className="text-coral">The classes</Eyebrow>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {classes.map((c, i) => (
              <FadeUp key={c.name} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-forest/15 bg-bone p-7">
                  <h3 className="display-3 text-forest">{c.name}</h3>
                  <p className="mt-2 text-ink/70">{c.copy}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <p className="mt-8 text-center text-ink/70">Classes run over a 10-week term.</p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <Eyebrow className="text-coral">Fees</Eyebrow>
          <div className="mt-6 divide-y divide-forest/10 border-y border-forest/10">
            {fees.map((f) => (
              <div key={f.label} className="flex items-center justify-between py-4">
                <span className="text-lg">{f.label}</span>
                <span className="display-3 text-forest">{f.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <PillButton href="/contact" className="bg-coral text-bone hover:bg-coral-deep">Contact us to book</PillButton>
            <PillButton href="/forms/haven-harmony-registration.pdf" variant="outline" external>Download registration form</PillButton>
          </div>
        </Container>
      </section>
    </>
  );
}
