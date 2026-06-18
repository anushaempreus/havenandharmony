import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preserve the old WordPress URLs' Canberra SEO after cutover.
  async redirects() {
    return [
      { source: "/yoga-canberra", destination: "/yoga", permanent: true },
      { source: "/retreats-canberra", destination: "/retreats", permanent: true },
    ];
  },
};

export default nextConfig;
