// Central image registry — every photo on the site is referenced from here,
// so swapping in curated Unsplash shots or the client's own photography later
// is a one-line change per slot.
//
// Current values: deterministic, on-theme photos (resolve at runtime) used as
// a styling pass. Brand assets (logo, retreat art) are pulled from the live
// site — download these into /public before the old WordPress site is retired.

const flickr = (w: number, h: number, tags: string, lock: number) =>
  `https://loremflickr.com/${w}/${h}/${tags}?lock=${lock}`;

export const images = {
  // Hero / landscape — the property is the thesis
  heroLand: flickr(1920, 1200, "australia,paddock,sunrise,countryside", 21),
  grounds: flickr(1400, 1000, "farm,dam,pond,trees", 33),
  eucalyptus: flickr(1200, 1600, "eucalyptus,gumtree,australia", 47),

  // Yoga & Pilates
  studio: flickr(1200, 1500, "yoga,studio,interior,light", 8),
  yogaClass: flickr(1400, 1000, "yoga,mat,practice", 12),
  pilates: flickr(1400, 1000, "pilates,reformer,studio", 5),

  // Retreats
  retreatGathering: flickr(1400, 1000, "yoga,retreat,nature,wellness", 19),
  pool: flickr(1400, 1000, "swimming,pool,garden,sunlight", 27),

  // Accommodation (priority)
  accExterior: flickr(1600, 1100, "cottage,countryside,exterior", 14),
  accGallery: [
    flickr(1000, 800, "cottage,bedroom,cozy", 3),
    flickr(1000, 800, "rustic,interior,wood", 9),
    flickr(1000, 800, "ensuite,bathroom,modern", 15),
    flickr(1000, 800, "coffee,morning,window", 22),
    flickr(1000, 800, "countryside,porch,view", 31),
    flickr(1000, 800, "reading,nook,armchair", 44),
  ],

  // Contact
  contact: flickr(1200, 1500, "wildflowers,meadow,calm", 38),

  // Brand assets from the live site (localise before WP retirement)
  retreatArt:
    "https://havenharmony.com.au/wp-content/uploads/2024/09/retreat-final-final-final.png",
  warriorWomen:
    "https://havenharmony.com.au/wp-content/uploads/2024/09/haven-hrmoney-warrior-women-5.png",
  logo: "https://havenharmony.com.au/wp-content/uploads/2023/10/HH-Logo.jpg",
} as const;
