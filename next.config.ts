import type { NextConfig } from "next";

const distDir =
  process.env.NEXT_DIST_DIR ??
  (process.env.NODE_ENV === "development" ? ".next-dev" : ".next");

const nextConfig: NextConfig = {
  distDir,
  // Force a unique build ID per deployment to avoid stale HTML/build references.
  generateBuildId: async () => `build-${Date.now()}`,
  images: {
    // Allow quality values used across the app in production.
    qualities: [75, 95, 100],
  },
  async headers() {
    return [
      {
        // Apply no-store to app routes so browsers/CDNs don't serve stale HTML.
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0, must-revalidate",
          },
        ],
      },
      {
        // Explicitly cover Next data payloads used by the app router.
        source: "/_next/data/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
