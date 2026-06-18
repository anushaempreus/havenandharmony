import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PillButton from "@/components/ui/PillButton";
import Photo from "@/components/ui/Photo";
import FadeUp from "@/components/motion/FadeUp";
import { pageMetadata } from "@/lib/metadata";
import { images } from "@/lib/images";

export const metadata = pageMetadata(
  "Retreats",
  "Day retreats near Canberra — an easily accessible escape, tucked away in a peaceful rural setting."
);

const pastRetreats = [
  {
    year: "2024",
    title: "Rest & Reset Day Retreat",
    img: images.retreatArt,
    copy: "A sweet Saturday to rest and reset — a day just for you, to reconnect and feel nourished in mind, body and with good food. Led by qualified yoga teachers, a Pilates instructor and a hypnotherapist. Between sessions there was time to wander the rural setting, feed the ducks on the dam, read a book, or relax and swim by the pool.",
  },
];

export default function RetreatsPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-forest-deep text-bone">
        <div className="kenburns absolute inset-0 scale-110 bg-cover bg-center" style={{ backgroundImage: `url(${images.pool})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" aria-hidden="true" />
        <Container className="relative z-10 pb-16 pt-32">
          <Eyebrow className="text-apricot">Retreats</Eyebrow>
          <h1 className="display-1 mt-4">Day retreats</h1>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-xl leading-relaxed text-ink/80">
                We host day retreats several times a year — an easily accessible
                escape close to Canberra, but tucked away in the peace and quiet
                of a rural setting. These special days are designed just for you:
                time to rest, reset, recharge and reconnect.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">
                Our space is also available for hire — the perfect setting for
                other studios to run their own retreats.
              </p>
              <div className="mt-8"><PillButton href="/contact" className="bg-coral text-bone hover:bg-coral-deep">Enquire about upcoming retreats</PillButton></div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl bg-blush/40 p-4 ring-1 ring-forest/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={images.warriorWomen} alt="Haven & Harmony retreat artwork" className="mx-auto w-full max-w-sm rounded-xl object-contain" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-bone-dark py-20">
        <Container className="max-w-4xl">
          <Eyebrow className="text-coral">Previous retreats</Eyebrow>
          <h2 className="display-2 mt-4">A look back</h2>
          <div className="mt-10 space-y-8">
            {pastRetreats.map((r, i) => (
              <FadeUp key={r.title} delay={i * 0.08}>
                <article className="grid gap-6 overflow-hidden rounded-2xl border border-forest/15 bg-bone sm:grid-cols-5">
                  <Photo src={r.img} alt={r.title} rounded={false} tint="blush" className="h-56 w-full sm:col-span-2 sm:h-full" />
                  <div className="p-7 sm:col-span-3">
                    <span className="eyebrow text-coral">{r.year}</span>
                    <h3 className="display-3 mt-2 text-forest">{r.title}</h3>
                    <p className="mt-3 text-ink/70">{r.copy}</p>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink/55">
            These are past retreats, shared as a taste of what our days involve.
            For dates and details of what&rsquo;s coming up, please get in touch.
          </p>
        </Container>
      </section>
    </>
  );
}
