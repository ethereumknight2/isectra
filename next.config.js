/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "isectra.com" },
      // HubSpot CDN (wildcard)
      { protocol: "https", hostname: "**.hubspotusercontent-na1.net" },
    ],
    formats: ["image/avif", "image/webp"],
  },

  reactStrictMode: true,
  // optimizeFonts is removed - it's enabled by default in Next.js 15
  // swcMinify is removed - it's enabled by default in Next.js 15

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    styledComponents: true,
  },

  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
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

  async redirects() {
    return [
      // ===== ABOUT roll-up =====
      { source: "/our-mission", destination: "/about-us", permanent: true },
      { source: "/our-vision", destination: "/about-us", permanent: true },
      { source: "/our-values", destination: "/about-us", permanent: true },
      { source: "/our-team", destination: "/about-us", permanent: true },
      { source: "/our-process", destination: "/about-us", permanent: true },

      // If legacy also had /about, normalize it too:
      { source: "/about", destination: "/about-us", permanent: true },

      // ===== Contact =====
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/contact/", destination: "/contact-us", permanent: true },

      // ===== Examples for new Services (fill in as needed) =====
      // { source: "/managed-it-services", destination: "/services/managed-it", permanent: true },
      // { source: "/cybersecurity",       destination: "/services/cybersecurity", permanent: true },
      // { source: "/m365-migrations",     destination: "/services/microsoft-365-migrations", permanent: true },

      // ===== Optional: catch a trailing slash for about variants =====
      { source: "/our-mission/", destination: "/about-us", permanent: true },
      { source: "/our-vision/", destination: "/about-us", permanent: true },
      { source: "/our-values/", destination: "/about-us", permanent: true },
      { source: "/our-team/", destination: "/about-us", permanent: true },
      { source: "/our-process/", destination: "/about-us", permanent: true },
    ];
  },
};

module.exports = nextConfig;
