// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getStoryblokApi } from "@storyblok/react/rsc";
import { renderRichText } from "@storyblok/react";
import "../../../lib/storyblok";
import BlogShell from "@/components/Blogshell";
import { blogPosts, BlogPost } from "../posts";

// Fetch a single post: Storyblok first, then fallback to posts.ts
async function getPost(slug: string): Promise<BlogPost | undefined> {
  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories/blog/${slug}`, {
      version: "published",
    });

    // Use the correct richtext field name from Storyblok:
    // often "body" (recommended) or "content" depending on your schema.
    const contentHtml =
      renderRichText(data.story.content.body ?? data.story.content.content) ||
      "";

    const post: BlogPost = {
      slug: data.story.slug,
      title: data.story.content.title,
      description:
        data.story.content.excerpt || data.story.content.description || "",
      date: data.story.content.date || data.story.created_at,
      author: data.story.content.author || "iSectra",
      readingTime: data.story.content.reading_time || "5 min read",
      categories: data.story.content.category
        ? [data.story.content.category]
        : [],
      image:
        data.story.content.featured_image?.filename ||
        "/images/default-blog.jpg",
      content: contentHtml, // always a string
    };

    return post;
  } catch (error) {
    console.log(`Post ${slug} not found in Storyblok, checking posts.ts...`);
    // Fallback to static posts
    return blogPosts.find((p) => p.slug === slug);
  }
}

// Build static params from both local posts and Storyblok
export async function generateStaticParams() {
  const staticSlugs = blogPosts.map((post) => ({
    slug: post.slug,
  }));

  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories", {
      version: "published",
      starts_with: "blog/",
      is_startpage: false,
    });

    const storyblokSlugs = data.stories.map((story: any) => ({
      slug: story.slug,
    }));

    return [...staticSlugs, ...storyblokSlugs];
  } catch (error) {
    return staticSlugs;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | iSectra Blog",
    };
  }

  return {
    title: `${post.title} | iSectra Blog`,
    description: post.description,
    keywords: post.categories.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 628,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogShell post={post} />;
}
