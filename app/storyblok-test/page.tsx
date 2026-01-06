import { getStoryblokApi } from "@storyblok/react/rsc";
import "../../lib/storyblok";

async function fetchStory() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft",
  });
  return data.story;
}

export default async function StoryblokTestPage() {
  const story = await fetchStory();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Storyblok Test Page</h1>
      <div className="py-8 px-4">
        <h2 className="text-3xl font-bold">
          {story.content.body?.[0]?.headline || "Hello from Storyblok!"}
        </h2>
      </div>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(story.content, null, 2)}
      </pre>
    </div>
  );
}
