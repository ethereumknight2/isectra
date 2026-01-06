"use client";
import { storyblokEditable } from "@storyblok/react/rsc";
import { StoryblokComponent } from "@storyblok/react";

export default function Page({ blok }: any) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
