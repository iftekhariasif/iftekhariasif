import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site to `out/` so it can be hosted on GitHub Pages.
  output: "export",
  // GitHub Pages has no image optimizer; serve images as-is.
  images: { unoptimized: true },
  // Hide the Next.js dev tools indicator (the "N" badge) in development.
  devIndicators: false,
  // Served at the root of the custom domain (iftekhariasif.com), so no
  // basePath. The custom domain is pinned via public/CNAME.
};

export default nextConfig;
