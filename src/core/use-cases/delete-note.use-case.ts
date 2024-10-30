import { NoteWhere } from "@/core/entities/note";
import { notes } from "@/db";
import { sleep } from "@/lib/utils";

export async function deleteNote({ id }: NoteWhere) {
  const noteIndex = notes.findIndex((n) => n.id === id);
  if (noteIndex < 0) {
    throw new Error("Note not found");
  }

  await sleep();
  notes.splice(noteIndex, 1);
}
