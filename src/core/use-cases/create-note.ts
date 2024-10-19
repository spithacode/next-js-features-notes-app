import { notes } from "@/db";
import { NoteInsert } from "@/core/entities/note";
import { nanoid } from "nanoid";

export async function createNote(data: NoteInsert) {
  const id = nanoid(8);
  notes.unshift({ ...data, id, createdAt: new Date() });
}
