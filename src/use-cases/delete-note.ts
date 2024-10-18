import { NoteWhere } from "@/entities/note";
import { notes } from "@/db";

export async function deleteNote({ id }: NoteWhere) {
  const noteIndex = notes.findIndex((n) => n.id === id);
  if (noteIndex < 0) {
    throw new Error("Note not found");
  }
  notes.splice(noteIndex, 1);
}
