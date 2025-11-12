// app/sitemap.ts
import type { MetadataRoute } from "next";

const site = "https://isectra.com";
export const revalidate = 3600; // refresh sitemap hourly

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Core pages
  const core: MetadataRoute.Sitemap = [
    {
      url: `${site}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${site}/about-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site}/contact-us`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${site}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site}/industries`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site}/faqs`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site}/careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${site}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.7,
    },
  ];

  // Services
  const services: MetadataRoute.Sitemap = [
    {
      url: `${site}/services/managed-it`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site}/services/cybersecurity-data-protection`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site}/services/cloud-microsoft-365-migrations`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site}/services/projects-infrastructure-office-moves`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site}/services/help-desk-end-user-support`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Blog posts
  const blog: MetadataRoute.Sitemap = [
    {
      url: `${site}/blog/most-microsoft-365-users-are-missing-out-are-you-one-of-them`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${site}/blog/you-dont-buy-a-porsche-just-to-listen-to-the-radio-so-why-underuse-microsoft-365`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${site}/blog/dcat-week-2025-the-premier-event-for-global-pharmaceutical-manufacturing-value-chain`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${site}/blog/essential-cybersecurity-tips-everyone-should-know`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${site}/blog/isectra-origin-story`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${site}/blog/it-compliant-solutions-for-pharmaceutical-companies`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${site}/blog/top-it-support-trends-every-business-needs-to-know`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${site}/blog/how-to-create-and-manage-a-companys-it-department`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${site}/blog/how-work-from-home-is-impacting-it-security-in-organizations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${site}/blog/the-importance-of-establishing-an-annual-it-budget-for-small-businesses`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  return [...core, ...services, ...blog];
}
