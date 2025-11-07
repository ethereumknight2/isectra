/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "isectra.com",
      },
      {
        protocol: "https",
        hostname: "*.hubspotusercontent-na1.net",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimize fonts
  optimizeFonts: true,

  // Compiler options for better performance
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Enable SWC minification
  swcMinify: true,
};

module.exports = nextConfig;
