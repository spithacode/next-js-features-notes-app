import { notes } from "@/db";
import { NoteInsert } from "@/entities/note";
import { nanoid } from "nanoid";

export async function createNote(data: NoteInsert) {
  // generating a random id
  const id = nanoid(2);
  notes.unshift({ ...data, id, createdAt: new Date() });
}
