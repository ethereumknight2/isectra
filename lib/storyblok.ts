import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

storyblokInit({
  accessToken:
    process.env.STORYBLOK_ACCESS_TOKEN ||
    process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN ||
    "PZiXnchRLqenbM4b46cHbgtt",
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});
