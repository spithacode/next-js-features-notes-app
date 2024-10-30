import { NoteWhere, NoteUpdate } from "@/core/entities/note";
import { notes } from "@/db";
import { sleep } from "@/lib/utils";

export async function updateNote({ id }: NoteWhere, data: NoteUpdate) {
  const noteIndex = notes.findIndex((n) => n.id === id);
  if (noteIndex < 0) {
    throw new Error("Note not found");
  }

  await sleep();
  notes[noteIndex] = { ...notes[noteIndex], ...data };
}
