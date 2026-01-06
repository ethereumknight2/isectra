// app/blog/page.tsx
import { getStoryblokApi } from "@storyblok/react/rsc";
import { renderRichText } from "@storyblok/react";
import "../../lib/storyblok";
import BlogListing from "./BlogListing";
import { blogPosts, BlogPost } from "./posts";

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories", {
      version: "published",
      starts_with: "blog/",
      is_startpage: false,
      cv: Date.now(),
    });

    // Transform Storyblok posts to match BlogPost format
    const storyblokPosts: BlogPost[] = data.stories.map((story: any) => {
      const contentHtml =
        renderRichText(story.content.body ?? story.content.content) || "";

      return {
        slug: story.slug,
        title: story.content.title,
        description: story.content.excerpt || story.content.description || "",
        date: story.content.date || story.created_at,
        author: story.content.author || "iSectra",
        readingTime: story.content.reading_time || "5 min read",
        categories: story.content.category ? [story.content.category] : [],
        image:
          story.content.featured_image?.filename || "/images/default-blog.jpg",
        content: contentHtml, // HTML string
      };
    });

    // Combine Storyblok posts + existing posts from posts.ts
    const allPosts: BlogPost[] = [...storyblokPosts, ...blogPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return allPosts;
  } catch (error) {
    console.error("Error fetching Storyblok posts:", error);
    // Fallback to just existing posts if Storyblok fails
    return blogPosts;
  }
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
