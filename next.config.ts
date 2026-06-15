import type { NextConfig } from "next";

// The site is served from a GitHub Pages project sub-path in production
// (https://iftekhariasif.github.io/iftekhariasif/). basePath only applies to
// production builds so local dev stays at http://localhost:3000.
// When moving to a root URL (custom domain iftekhariasif.com), remove this.
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Emit a fully static site to `out/` so it can be hosted on GitHub Pages.
  output: "export",
  // GitHub Pages has no image optimizer; serve images as-is.
  images: { unoptimized: true },
  // Serve assets from the project sub-path in production.
  basePath: isProd ? "/iftekhariasif" : undefined,
  // Hide the Next.js dev tools indicator (the "N" badge) in development.
  devIndicators: false,
};

export default nextConfig;
