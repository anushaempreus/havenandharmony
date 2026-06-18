import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-forest-deep text-bone">
      <span className="amp pointer-events-none absolute -bottom-24 -left-6 text-[40vw] leading-none text-bone/[0.05] sm:text-[28vw]">
        &amp;
      </span>

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-display)] text-3xl">
            Haven <span className="italic text-coral">&amp;</span> Harmony
          </p>
          <p className="mt-4 max-w-xs text-sm text-bone/70">{siteConfig.tagline}</p>
        </div>

        <div className="text-sm">
          <p className="eyebrow text-apricot">Get in touch</p>
          <p className="mt-4">Contact {siteConfig.contactName} for bookings</p>
          <a href={`mailto:${siteConfig.email}`} className="link-underline mt-2 block">{siteConfig.email}</a>
          <a href={siteConfig.phoneHref} className="link-underline mt-1 block">{siteConfig.phone}</a>
          <p className="mt-2 text-bone/70">{siteConfig.address.full}</p>
        </div>

        <div className="text-sm">
          <p className="eyebrow text-apricot">Follow</p>
          <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="link-underline mt-4 block">Instagram</a>
          <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="link-underline mt-1 block">Facebook</a>
        </div>
      </div>

      <div className="relative border-t border-bone/15">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-bone/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {year} Haven &amp; Harmony. All rights reserved.</p>
          <p>
            Website by{" "}
            <Link href="https://empreus.com.au" className="link-underline">Empreus IT Support</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
