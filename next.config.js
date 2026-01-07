/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "isectra.com" },
      // HubSpot CDN (wildcard)
      { protocol: "https", hostname: "**.hubspotusercontent-na1.net" },
      // Storyblok CDN
      { protocol: "https", hostname: "a.storyblok.com" },
      { protocol: "https", hostname: "a2.storyblok.com" },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // ← OPTIMIZED: 1 year cache for production images
  },

  reactStrictMode: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    styledComponents: true,
  },

  // Enable compression
  compress: true,

  // Optimize CSS loading
  experimental: {
    optimizeCss: true,
  },

  async headers() {
    return [
      // Cache static assets forever
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache images for 1 year
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Security headers for all pages
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Allow Storyblok Visual Editor to iframe the site
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://app.storyblok.com;",
          },
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
