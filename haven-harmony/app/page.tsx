import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PillButton from "@/components/ui/PillButton";
import Photo from "@/components/ui/Photo";
import Marquee from "@/components/ui/Marquee";
import Scribble from "@/components/ui/Scribble";
import FadeUp from "@/components/motion/FadeUp";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import PlanStay from "@/components/forms/PlanStay";
import NewsletterSignup from "@/components/forms/NewsletterSignup";
import { images } from "@/lib/images";

const services = [
  { href: "/yoga", title: "Yoga & Pilates", copy: "A safe, welcoming space to immerse yourself in your practice.", img: images.yogaClass },
  { href: "/retreats", title: "Day Retreats", copy: "A day just for you — to rest, reset, recharge and reconnect.", img: images.retreatGathering },
  { href: "/accommodation", title: "The Stay", copy: "A charming, self-contained studio in a peaceful rural setting.", img: images.accExterior },
];

const stats = [
  { end: 8, label: "students per class, max" },
  { end: 3, label: "class styles" },
  { end: 40, label: "acres of quiet" },
];

const facts = ["Sleeps two", "Private ensuite", "Tea & coffee", "Forty acres"];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-forest-deep text-bone">
        <div className="kenburns absolute inset-0 scale-110 bg-cover bg-center" style={{ backgroundImage: `url(${images.heroLand})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/45 to-forest-deep/20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/40 to-transparent" aria-hidden="true" />
        <span className="amp floaty absolute -right-4 top-10 text-[32vw] leading-none text-coral/25 sm:text-[24vw]">&amp;</span>

        <Container className="relative z-10 pb-28 pt-32">
          <FadeUp><Eyebrow className="text-apricot">A cosy home studio · near Canberra</Eyebrow></FadeUp>
          <h1 className="display-1 mt-5 max-w-4xl">
            <Reveal>Haven</Reveal>{" "}
            <span className="amp inline-block translate-y-2 text-coral italic">&amp;</span>{" "}
            <span className="relative inline-block">
              <Reveal delay={0.12}>Harmony</Reveal>
              <Scribble variant="underline" className="absolute -bottom-2 left-0 h-3 w-full text-coral" />
            </span>
          </h1>
          <FadeUp delay={0.25}>
            <p className="mt-8 max-w-md text-lg text-bone/85">
              Your class, your practice — no pressure, no expectations.
            </p>
          </FadeUp>
        </Container>
      </section>

      {/* Plan-your-stay bar (overlaps hero) */}
      <Container className="relative z-20 -mt-16"><FadeUp><PlanStay /></FadeUp></Container>

      {/* ── About ────────────────────────────────────────── */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Eyebrow className="text-coral">About</Eyebrow>
              <FadeUp>
                <h2 className="display-2 mt-5">
                  Welcome to Haven <em className="not-italic text-coral">&amp;</em> Harmony
                </h2>
              </FadeUp>
            </div>
            <div className="md:col-span-7">
              <FadeUp delay={0.1}>
                <p className="text-lg leading-relaxed text-ink/75">
                  Your cosy home studio, where we prioritise a personal and
                  relaxed yoga experience. Our intimate classes, capped at a
                  maximum of eight students, ensure you receive personalised
                  attention and support as you begin or continue your yoga
                  journey.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-ink/75">
                  We integrate movement with breathwork, connection and
                  meditation. Whether your goal is to relax, ease body aches and
                  pains, improve flexibility, or simply enjoy the act of moving,
                  we&rsquo;re here to help you achieve it. Our smaller class sizes
                  let us work closely with each student, fostering a deeper
                  understanding and connection with their body.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-ink/75">
                  Being part of the local community matters to us, and we&rsquo;re
                  committed to providing a service that meets the needs of our
                  neighbours.
                </p>
              </FadeUp>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-12">
            <FadeUp className="sm:col-span-8"><Photo src={images.grounds} alt="The rural grounds — dam, trees and open paddock" className="h-72 w-full sm:h-[26rem]" /></FadeUp>
            <FadeUp delay={0.1} className="sm:col-span-4"><Photo src={images.eucalyptus} alt="Eucalyptus on the property" tint="gold" className="h-72 w-full sm:h-[26rem]" /></FadeUp>
          </div>
        </Container>
      </section>

      {/* ── Marquee band ─────────────────────────────────── */}
      <div className="bg-coral text-bone"><Marquee items={["Rest", "Reset", "Recharge", "Reconnect"]} className="py-6" /></div>

      {/* ── Stats band ───────────────────────────────────── */}
      <section className="bg-forest text-bone">
        <Container>
          <div className="grid gap-10 py-16 sm:grid-cols-3">
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.1} className="text-center">
                <p className="font-[family-name:var(--font-display)] text-6xl text-apricot sm:text-7xl"><CountUp end={s.end} /></p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-bone/70">{s.label}</p>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* ── "Me time" band (site copy) ───────────────────── */}
      <section className="bg-blush/40 py-24 sm:py-28">
        <Container className="max-w-3xl text-center">
          <FadeUp>
            <Eyebrow className="text-coral">Make time for you</Eyebrow>
            <h2 className="display-2 mt-5 text-forest">Do you need some quality <em className="not-italic text-coral">&ldquo;me time&rdquo;</em>?</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              At Haven &amp; Harmony, it&rsquo;s all about movement, breathwork,
              connection, joy and relaxation.
            </p>
            <Scribble variant="underline" className="mx-auto mt-8 h-3 w-40 text-coral/70" />
          </FadeUp>
        </Container>
      </section>

      {/* ── Accommodation feature (priority) ─────────────── */}
      <section className="bg-bone-dark">
        <div className="mx-auto grid max-w-7xl items-stretch gap-0 lg:grid-cols-2">
          <div className="group relative min-h-[24rem] overflow-hidden lg:min-h-[42rem]">
            <Photo src={images.accExterior} alt="The self-contained studio accommodation" rounded={false} zoom className="absolute inset-0 h-full w-full" />
            <span className="amp absolute bottom-4 right-6 text-[14rem] leading-none text-bone/20">&amp;</span>
          </div>
          <div className="flex items-center px-8 py-16 sm:px-14">
            <FadeUp>
              <Eyebrow className="text-coral">Stay with us</Eyebrow>
              <h2 className="display-2 mt-5 text-forest">A charming, <em className="not-italic text-coral">self-contained</em> studio</h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/75">
                A simple yet comfortable stay in a peaceful rural setting,
                suitable for two. Nestled on forty acres and separated from the
                main house, it offers the perfect balance of seclusion and
                convenience — a short drive from Canberra, local wineries and
                popular wedding venues.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {facts.map((f) => (
                  <li key={f} className="rounded-full bg-forest/10 px-4 py-1.5 text-sm text-forest">{f}</li>
                ))}
              </ul>
              <div className="mt-9"><PillButton href="/accommodation" className="bg-coral text-bone hover:bg-coral-deep">Explore the stay</PillButton></div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section className="py-24 sm:py-28">
        <Container>
          <Eyebrow className="text-coral">What we offer</Eyebrow>
          <h2 className="display-2 mt-5 max-w-2xl">Three ways to <em className="not-italic text-coral">slow down</em></h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <FadeUp key={s.href} delay={i * 0.08}>
                <Link href={s.href} className="lift group block rounded-2xl bg-bone">
                  <div className="overflow-hidden rounded-2xl"><Photo src={s.img} alt={s.title} rounded={false} zoom className="h-64 w-full" /></div>
                  <div className="p-5">
                    <h3 className="display-3 text-forest">{s.title}</h3>
                    <p className="mt-2 text-ink/70">{s.copy}</p>
                    <span className="link-underline mt-4 inline-block text-sm font-semibold text-coral-deep">Learn more</span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Keep in touch ────────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest py-24 text-bone">
        <Container className="relative">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <Eyebrow className="text-apricot">Get in touch</Eyebrow>
              <h2 className="display-2 mt-4">Let&rsquo;s keep in <em className="not-italic text-coral">touch</em></h2>
              <p className="mt-4 max-w-md text-bone/80">Give us a call or drop by anytime — we endeavour to answer all enquiries within 24 hours on business days.</p>
            </div>
            <div className="md:justify-self-end"><NewsletterSignup /></div>
          </div>
        </Container>
      </section>
    </>
  );
}
