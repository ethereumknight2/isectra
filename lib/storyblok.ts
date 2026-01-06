import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});
