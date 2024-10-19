import { getTags } from "@/use-cases/get-recent-tags";

export default async function TagCloud() {
  const tags = await getTags();

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Tag Cloud</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-200 rounded-full text-sm"
          >
            {tag.name} ({tag.count})
          </span>
        ))}
      </div>
    </div>
  );
}
