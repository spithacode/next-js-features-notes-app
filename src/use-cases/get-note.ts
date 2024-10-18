import { notes } from "@/db";
import { NoteWhere } from "@/entities/note";

export async function getNote({ id }: NoteWhere) {
  console.log("find note with id" + id, notes);
  return notes.find((note) => note.id === id);
}
