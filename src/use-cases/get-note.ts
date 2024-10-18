import { notes } from "@/db";
import { NoteWhere } from "@/entities/note";

export async function getNote({ id }: NoteWhere) {
  return notes.find((note) => note.id === id);
}
