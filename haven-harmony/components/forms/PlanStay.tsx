"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const interests = ["Accommodation", "Yoga & Pilates classes", "A retreat"];

export default function PlanStay() {
  const router = useRouter();
  const [interest, setInterest] = useState(interests[0]);
  const [guests, setGuests] = useState(2);

  function go() {
    const params = new URLSearchParams({ interest, guests: String(guests) });
    router.push(`/contact?${params.toString()}`);
  }

  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-bone p-5 shadow-[0_30px_60px_-30px_rgba(42,33,28,0.5)] ring-1 ring-forest/10 sm:flex-row sm:items-end sm:gap-3 sm:p-4">
      <div className="flex-1">
        <label className="eyebrow mb-1.5 block text-coral-deep">
          I&rsquo;m interested in
        </label>
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full rounded-lg border border-forest/15 bg-white/60 px-3 py-2.5 text-ink focus:border-forest focus:outline-none"
        >
          {interests.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div className="hidden w-px self-stretch bg-forest/10 sm:block" />

      <div className="sm:w-40">
        <span className="eyebrow mb-1.5 block text-coral-deep">Guests</span>
        <div className="flex items-center justify-between rounded-lg border border-forest/15 bg-white/60 px-3 py-1.5">
          <button
            type="button"
            aria-label="Fewer guests"
            onClick={() => setGuests((g) => Math.max(1, g - 1))}
            className="h-7 w-7 rounded-full text-lg leading-none text-forest hover:bg-forest/10"
          >
            −
          </button>
          <span className="tabular-nums">{guests}</span>
          <button
            type="button"
            aria-label="More guests"
            onClick={() => setGuests((g) => Math.min(2, g + 1))}
            className="h-7 w-7 rounded-full text-lg leading-none text-forest hover:bg-forest/10"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={go}
        className="rounded-full bg-coral px-7 py-3 text-sm font-semibold text-bone transition-colors hover:bg-coral-deep"
      >
        Enquire →
      </button>
    </div>
  );
}
