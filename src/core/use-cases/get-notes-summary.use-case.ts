import { notes } from "@/db";
import { sleep } from "@/lib/utils";

interface NotesSummary {
  totalNotes: number;
  notesThisWeek: number;
  notesThisMonth: number;
}

export async function getNotesSummary(): Promise<NotesSummary> {
  const now = new Date();
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  const notesThisWeek = notes.filter(
    (note) => note.createdAt >= oneWeekAgo,
  ).length;
  const notesThisMonth = notes.filter(
    (note) => note.createdAt >= oneMonthAgo,
  ).length;

  await sleep();

  return {
    totalNotes: notes.length,
    notesThisWeek,
    notesThisMonth,
  };
}
