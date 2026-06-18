// Single source of truth for contact + brand details.
// Header, Footer, forms, and metadata all read from here so the
// wrong "...andharmony..." email can never reappear across pages.

export const siteConfig = {
  name: "Haven & Harmony",
  tagline: "A cosy home studio, day retreats & rural escape near Canberra.",
  url: "https://havenharmony.com.au",

  // Contact — verified correct address (NOT Havenandharmonyyoga@gmail.com)
  email: "Havenharmonyyoga@gmail.com",
  phone: "0428 413 801",
  phoneHref: "tel:+61428413801",
  contactName: "Barbara",

  address: {
    street: "Kaveneys Road",
    suburb: "Jeir",
    region: "NSW",
    full: "Kaveneys Road, Jeir NSW",
  },

  socials: {
    facebook:
      "https://www.facebook.com/people/Haven-and-Harmony/100093215967363/",
    instagram: "https://www.instagram.com/haven_and_harmony_yoga_/",
  },

  // Secondary booking option for accommodation (Barb wants Airbnb kept, not primary)
  airbnbUrl: "", // TODO: add the real Airbnb listing URL

  responseTime: "We endeavour to answer all enquiries within 24 hours on business days.",
} as const;

export type SiteConfig = typeof siteConfig;
