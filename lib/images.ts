// Central image registry — every photo now points at a local file in
// /public/photos/. Drop the matching files into that folder.

export const images = {
  // Property / hero
  heroLand: "/photos/hero.jpg",
  grounds: "/photos/grounds.jpg",
  eucalyptus: "/photos/eucalyptus.jpg",

  // Yoga & Pilates
  studio: "/photos/studio.jpg",
  yogaClass: "/photos/yoga.jpg",
  pilates: "/photos/yoga.jpg", // reuse class shot — no separate Pilates photo yet

  // Retreats
  retreatGathering: "/photos/retreat.jpg",
  pool: "/photos/pool.jpg",

  // Accommodation
  accExterior: "/photos/acc-exterior.jpg",
  accGallery: [
    "/photos/acc-1.jpg", // bedroom w/ rural view (lead tile)
    "/photos/acc-2.jpg", // living room
    "/photos/acc-3.jpg", // navy bedroom
    "/photos/acc-4.jpg", // daybed nook
    "/photos/acc-5.jpg", // knit/wool detail
  ],

  // Contact
  contact: "/photos/contact.jpg",

  // Brand assets — still hotlinked from the live WP site.
  // Localise these before the old site is retired.
  retreatArt:
    "https://havenharmony.com.au/wp-content/uploads/2024/09/retreat-final-final-final.png",
  warriorWomen:
    "https://havenharmony.com.au/wp-content/uploads/2024/09/haven-hrmoney-warrior-women-5.png",
  logo: "https://havenharmony.com.au/wp-content/uploads/2023/10/HH-Logo.jpg",
} as const;