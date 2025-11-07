/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // EITHER use remotePatterns...
    remotePatterns: [
      { protocol: "https", hostname: "isectra.com" },
      // HubSpot CDN (wildcard): use **.domain, not *.
      { protocol: "https", hostname: "**.hubspotusercontent-na1.net" },
    ],
    // ...OR the simpler images.domains approach:
    // domains: ["isectra.com", "hubspotusercontent-na1.net"],
    formats: ["image/avif", "image/webp"],
  },

  // Strict mode is good for dev; harmless in prod
  reactStrictMode: true,

  // (Optional in Next 13/14; safe to leave on, but not required)
  // optimizeFonts is ignored in modern Next, you can remove it if you want.
  optimizeFonts: true,

  compiler: {
    // Strip console.* in production builds
    removeConsole: process.env.NODE_ENV === "production",
  },

  swcMinify: true,

  // Nice-to-have headers for Vercel
  async headers() {
    return [
      // Cache static assets aggressively
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Basic security hardening (tweak CSP later if you want)
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
