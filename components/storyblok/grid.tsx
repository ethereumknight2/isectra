"use client";
import { storyblokEditable } from "@storyblok/react/rsc";
import { StoryblokComponent } from "@storyblok/react";

export default function Grid({ blok }: any) {
  return (
    <div {...storyblokEditable(blok)} className="py-12 px-4">
      <div className="container mx-auto grid gap-6 grid-cols-1 md:grid-cols-3">
        {blok.columns?.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
}
