import { notes } from "@/db";
import { sleep } from "@/lib/utils";

interface Tag {
  name: string;
  count: number;
}

export async function getRecentTags(): Promise<Tag[]> {
  const tagCounts: { [key: string]: number } = {};

  notes.forEach((note) => {
    const words = note.content.toLowerCase().split(/\s+/);
    words.forEach((word) => {
      if (word.startsWith("#")) {
        const tag = word.slice(1);
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      }
    });
  });

  await sleep();

  return Object.entries(tagCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
}
