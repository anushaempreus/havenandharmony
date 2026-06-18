"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { images } from "@/lib/images";

const links = [
  { href: "/", label: "Home" },
  { href: "/yoga", label: "Yoga & Pilates" },
  { href: "/retreats", label: "Retreats" },
  { href: "/accommodation", label: "Accommodation" },
  { href: "/timetable", label: "Timetable" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-bone">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 sm:px-8">
        <Link
          href="/"
          className="flex items-center py-1"
          aria-label={siteConfig.name}
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images.logo}
            alt={siteConfig.name}
            className="block h-9 w-auto object-contain mix-blend-multiply sm:h-10"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink/80 transition-colors hover:text-forest"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-forest px-5 py-2 text-sm font-semibold text-bone transition-colors hover:bg-forest-deep"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-forest"
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-forest/10 bg-bone md:hidden">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-ink/80"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-forest px-5 py-2 text-center text-sm font-semibold text-bone"
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
