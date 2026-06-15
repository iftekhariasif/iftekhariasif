import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site to `out/` so it can be hosted on GitHub Pages.
  output: "export",
  // GitHub Pages has no image optimizer; serve images as-is.
  images: { unoptimized: true },
  // Hide the Next.js dev tools indicator (the "N" badge) in development.
  devIndicators: false,
  // NOTE: For root URLs (custom domain or iftekhariasif.github.io) leave this
  // unset. If you keep the project-page sub-path, set:
  //   basePath: "/iftekhariasif",
};

export default nextConfig;
