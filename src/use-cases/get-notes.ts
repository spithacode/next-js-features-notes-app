import { notes } from "@/db";
import { Note, type QueryParams } from "@/core/entities/note";
import { sleep } from "@/lib/utils";

export async function getNotes({
  page = 1,
  limit = 10,
  search,
}: QueryParams): Promise<{ notes: Note[]; total: number }> {
  const start = (page - 1) * limit;
  const end = start + limit;

  await sleep();
  return {
    notes: notes
      .filter(
        (n) =>
          !search ||
          n.title.toLowerCase().includes(search.toLowerCase()) ||
          n.content.toLowerCase().includes(search.toLowerCase()),
      )
      .slice(start, end),
    total: notes.length,
  };
}
