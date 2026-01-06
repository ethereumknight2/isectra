import { getStoryblokApi } from "@storyblok/react/rsc";
import "../../../lib/storyblok";

async function fetchStory(slug?: string[]) {
  const storyblokApi = getStoryblokApi();
  const storySlug = slug && slug.length > 0 ? slug.join("/") : "home";

  const { data } = await storyblokApi.get(`cdn/stories/${storySlug}`, {
    version: "draft",
  });
  return data.story;
}

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function StoryblokDynamicPage({ params }: PageProps) {
  const resolvedParams = await params;
  const story = await fetchStory(resolvedParams.slug);

  return (
    <div className="min-h-screen">
      {/* Teaser */}
      <div className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">
            {story.content.body?.[0]?.headline || ""}
          </h2>
        </div>
      </div>

      {/* Grid with Features */}
      <div className="py-12 px-4">
        <div className="container mx-auto grid gap-6 grid-cols-1 md:grid-cols-3">
          {story.content.body?.[1]?.columns?.map((feature: any) => (
            <div
              key={feature._uid}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {feature.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
