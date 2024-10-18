import { NoteWhere, NoteUpdate } from "@/core/entities/note";
import { notes } from "@/db";

export async function updateNote({ id }: NoteWhere, data: NoteUpdate) {
  const noteIndex = notes.findIndex((n) => n.id === id);
  if (noteIndex < 0) {
    throw new Error("Note not found");
  }
  notes[noteIndex] = { ...notes[noteIndex], ...data };
}
