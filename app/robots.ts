// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const site = "https://isectra.com";

  return {
    rules: [
      // Allow everything for everyone
      { userAgent: "*", allow: "/" },

      // (Optional explicit AI agents — not required because of "*" above,
      // but kept for clarity that AI crawling is welcome)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
    ],
    sitemap: [`${site}/sitemap.xml`],
    host: site,
  };
}
