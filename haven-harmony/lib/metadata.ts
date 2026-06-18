import type { Metadata } from "next";
import { siteConfig } from "./siteConfig";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Yoga, Pilates & Retreats near Canberra`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_AU",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export function pageMetadata(title: string, description?: string): Metadata {
  return {
    title,
    description: description ?? siteConfig.tagline,
    openGraph: { title, description: description ?? siteConfig.tagline },
  };
}
