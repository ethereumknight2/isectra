// app/blog/page.tsx
import { getStoryblokApi } from "@storyblok/react/rsc";
import { renderRichText } from "@storyblok/react";
import "../../lib/storyblok";
import BlogListing from "./BlogListing";
import { blogPosts, BlogPost } from "./posts";

// Always fetch fresh — the listing shouldn't be baked at build time,
// otherwise new Storyblok articles won't appear until the next deploy.
export const dynamic = "force-dynamic";
export const revalidate = 0;

function storyToPost(story: any): BlogPost {
  const c = story.content ?? {};

  // Prefer raw HTML field when the client hands us pre-formatted markup;
  // fall back to the rich-text field otherwise.
  const rawHtml =
    typeof c.html_content === "string" && c.html_content.trim().length > 0
      ? c.html_content
      : null;
  const richtext = c.body ?? c.content ?? c.long_text ?? null;

  const contentHtml =
    rawHtml ?? (richtext ? renderRichText(richtext) ?? "" : "");

  return {
    slug: story.slug,
    title: c.title || story.name || "Untitled",
    description: c.excerpt || c.description || "",
    date: c.date || story.created_at,
    author: c.author || "iSectra",
    readingTime: c.reading_time || "5 min read",
    categories: c.category ? [c.category] : [],
    image: c.featured_image?.filename || "/images/default-blog.jpg",
    content: contentHtml,
  };
}

async function getBlogPosts(): Promise<BlogPost[]> {
  let storyblokPosts: BlogPost[] = [];

  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories", {
      version: "published",
      starts_with: "blog/",
      is_startpage: false,
      per_page: 100,
      cv: Date.now(),
    });

    // Transform each story individually so one bad story does not
    // wipe out the entire list.
    storyblokPosts = (data.stories ?? [])
      .map((story: any) => {
        try {
          return storyToPost(story);
        } catch (err) {
          console.error(
            `[blog index] failed to transform story ${story?.slug}:`,
            err
          );
          return null;
        }
      })
      .filter((p: BlogPost | null): p is BlogPost => p !== null);
  } catch (error) {
    console.error("[blog index] Storyblok fetch failed:", error);
  }

  // De-duplicate by slug (Storyblok wins over posts.ts if both exist)
  const bySlug = new Map<string, BlogPost>();
  for (const p of blogPosts) bySlug.set(p.slug, p);
  for (const p of storyblokPosts) bySlug.set(p.slug, p);

  return Array.from(bySlug.values()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export const metadata = {
  title: "iSectra Blog",
  description:
    "Stay updated with expert insights on IT management, cybersecurity, pharmaceutical compliance, and technology trends for growing businesses.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return <BlogListing posts={posts} />;
}