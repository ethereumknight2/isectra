"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import page from "./storyblok/page";
import teaser from "./storyblok/teaser";
import grid from "./storyblok/grid";
import feature from "./storyblok/feature";

const components = {
  page: page,
  teaser: teaser,
  grid: grid,
  feature: feature,
};

storyblokInit({
  accessToken:
    process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN ||
    "PZiXnchRLqenbM4b46cHbgtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "eu",
  },
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
