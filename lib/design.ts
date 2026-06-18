// Design tokens — warm, high-contrast: deep forest green grounded by a vivid
// coral/apricot pop on a warm cream canvas. Hex values mirror the CSS vars in
// app/globals.css (@theme).

export const colors = {
  forest: "#23402f", // primary / dark sections
  forestDeep: "#15261b", // deepest sections, hero base
  coral: "#dd6e4c", // primary warm accent — CTAs, marquee, links
  coralDeep: "#b8502f", // coral hover / accent text on light
  apricot: "#eca06f", // lighter accent / stat numbers
  gold: "#e3a24a", // secondary warm accent
  blush: "#ecc9b5", // soft tertiary
  bone: "#f7f0e4", // warm cream canvas
  boneDark: "#ece2d0",
  ink: "#2a211c", // warm near-black text
} as const;

export const type = {
  display: "var(--font-display)", // Fraunces
  body: "var(--font-body)", // Hanken Grotesk
} as const;

export const motion = {
  ease: [0.22, 1, 0.36, 1] as const,
  duration: 0.7,
} as const;
