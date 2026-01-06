"use client";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function Teaser({ blok }: any) {
  return (
    <div {...storyblokEditable(blok)} className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">{blok.headline}</h2>
      </div>
    </div>
  );
}
