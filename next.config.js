/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  outputFileTracingRoot: __dirname,

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
    qualities: [60, 75, 80, 85, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: isProduction ? 31536000 : 0,
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

  // Keep older cached About-page bundles working after the team portraits
  // moved from underscore-named PNG paths to JPG files.
  async rewrites() {
    return [
      { source: "/images/Adam_Looney.png", destination: "/images/Adam_Looney.jpg" },
      { source: "/images/Brian_Martins.png", destination: "/images/Brian_Martins.jpg" },
      { source: "/images/Christian_Park.png", destination: "/images/Christian_Park.jpg" },
      { source: "/images/Dalton_Thompson.png", destination: "/images/Dalton_Thompson.jpg" },
      { source: "/images/Damian_Colarte.png", destination: "/images/Damian_Colarte.jpg" },
      { source: "/images/Daniel_Park.png", destination: "/images/Daniel_Park.jpg" },
      { source: "/images/Joseph_Cerniglia.png", destination: "/images/Joseph_Cerniglia_v2.jpg" },
      { source: "/images/Michael_Colarte.png", destination: "/images/Michael_Colarte.jpg" },
      { source: "/images/Roni_Banerjee.png", destination: "/images/Roni_Banerjee.jpg" },
      { source: "/images/Santiago_Aristizabal.png", destination: "/images/Santiago_Aristizabal.jpg" },
      { source: "/images/Thomas_Mauro.png", destination: "/images/Thomas_Mauro.jpg" },
    ];
  },

  async headers() {
    const securityHeaders = {
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Content-Security-Policy",
          value: "frame-ancestors 'self' https://app.storyblok.com;",
        },
      ],
    };

    if (!isProduction) {
      const clearStaleLocalCache = {
        headers: [{ key: "Clear-Site-Data", value: '"cache"' }],
      };

      return [
        { source: "/", ...clearStaleLocalCache },
        { source: "/about-us", ...clearStaleLocalCache },
        securityHeaders,
      ];
    }

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
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      securityHeaders,
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
