import { notes } from "@/db";
import { sleep } from "@/lib/utils";

interface Activity {
  action: string;
  date: string;
}

export async function getRecentActivity(): Promise<Activity[]> {
  const sortedNotes = [...notes].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  );
  const recentNotes = sortedNotes.slice(0, 5);

  await sleep();

  return recentNotes.map((note) => ({
    action: `Created note: ${note.title}`,
    date: note.createdAt.toLocaleDateString(),
  }));
}
