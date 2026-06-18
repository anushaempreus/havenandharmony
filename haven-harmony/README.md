# Haven & Harmony

Next.js (App Router) rebuild of havenharmony.com.au — Empreus-managed, Vercel-deployed.

## Run
```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY
npm run dev
```

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 (tokens in `app/globals.css` @theme, mirrored in `lib/design.ts`)
- Fonts: Fraunces (display) + Hanken Grotesk (body) via `next/font`
- Forms: react-hook-form → `/api/contact` → Resend

## Key files
- `lib/siteConfig.ts` — single source of truth for contact details (email, phone, socials, Airbnb). Edit here only.
- `lib/design.ts` / `app/globals.css` — palette + type tokens.
- `next.config.ts` — 301 redirects from old `/yoga-canberra` and `/retreats-canberra` slugs.

## Outstanding (from client)
- Accommodation photography (live site images aren't loading) — drop into `public/accommodation/` and wire up `app/accommodation/page.tsx`.
- Airbnb listing URL → `lib/siteConfig.ts` (`airbnbUrl`).
- Registration form file → `public/forms/` (referenced from the Yoga page).
- Confirm Stripe scope before adding `app/api/checkout/route.ts`.
- Replace hero placeholder with a golden-hour property photo.
