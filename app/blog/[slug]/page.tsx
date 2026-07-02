// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import type { Metadata } from "next";
import { getStoryblokApi } from "@storyblok/react/rsc";
import { renderRichText } from "@storyblok/react";
import "../../../lib/storyblok";
import BlogShell from "@/components/Blogshell";
import { blogPosts, BlogPost } from "../posts";
import BlogPostClient from "./BlogPostClient";

async function getStory(slug: string, preview: boolean) {
  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories/blog/${slug}`, {
      version: preview ? "draft" : "published",
      cv: preview ? Date.now() : undefined,
    });

    return data?.story ?? null;
  } catch (error) {
    console.error(`[blog/${slug}] Storyblok fetch failed:`, error);
    return null;
  }
}

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

// Fetch a single post: Storyblok first, then fallback to posts.ts
async function getPost(
  slug: string,
  preview: boolean = false
): Promise<BlogPost | undefined> {
  const story = await getStory(slug, preview);

  if (story) {
    try {
      return storyToPost(story);
    } catch (error) {
      console.error(`[blog/${slug}] Storyblok parse failed:`, error);
    }
  }

  return blogPosts.find((p) => p.slug === slug);
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

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const searchParams = await props.searchParams;

  // Check if we're in Storyblok preview mode
  const isPreview = searchParams._storyblok !== undefined;
  const { isEnabled: isDraftMode } = await draftMode();

  const post = await getPost(slug, isPreview || isDraftMode);

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

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await props.params;
  const searchParams = await props.searchParams;

  // Check if we're in Storyblok preview mode by looking for _storyblok param
  const isPreview = searchParams._storyblok !== undefined;
  const { isEnabled: isDraftMode } = await draftMode();
  const preview = isPreview || isDraftMode;

  const story = await getStory(slug, preview);

  if (story) {
    return <BlogPostClient initialStory={story} />;
  }

  // Fallback to static posts.ts for the migrated HubSpot articles
  const fallback = blogPosts.find((p) => p.slug === slug);
  if (!fallback) notFound();

  return <BlogShell post={fallback} />;
}