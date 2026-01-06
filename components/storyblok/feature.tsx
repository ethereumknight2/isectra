"use client";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function Feature({ blok }: any) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="p-6 bg-white rounded-lg shadow-md"
    >
      <h3 className="text-xl font-bold text-gray-900">{blok.name}</h3>
    </div>
  );
}
