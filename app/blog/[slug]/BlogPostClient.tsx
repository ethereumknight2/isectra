"use client";

import { useStoryblokState, renderRichText } from "@storyblok/react";
import type { ISbStoryData } from "@storyblok/react";
import BlogShell from "@/components/Blogshell";
import type { BlogPost } from "../posts";

function storyToPost(story: ISbStoryData): BlogPost {
  const c = (story.content ?? {}) as any;
  const richtext = c.body ?? c.content ?? c.long_text ?? null;
  return {
    slug: story.slug,
    title: c.title || story.name || "Untitled",
    description: c.excerpt || c.description || "",
    date: c.date || story.created_at,
    author: c.author || "iSectra",
    readingTime: c.reading_time || "5 min read",
    categories: c.category ? [c.category] : [],
    image: c.featured_image?.filename || "/images/default-blog.jpg",
    content: richtext ? renderRichText(richtext) ?? "" : "",
  };
}

export default function BlogPostClient({
  initialStory,
}: {
  initialStory: ISbStoryData;
}) {
  const story = useStoryblokState(initialStory);
  if (!story) return null;
  return <BlogShell post={storyToPost(story)} />;
}