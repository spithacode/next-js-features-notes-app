import { notes } from "@/db";
import { NoteInsert } from "@/core/entities/note";
import { nanoid } from "nanoid";
import { sleep } from "@/lib/utils";

export async function createNote(data: NoteInsert) {
  // generating a random id
  const id = nanoid(2);
  notes.unshift({ ...data, id, createdAt: new Date() });
  await sleep();
  console.log("adding a new note -->", data, notes);
}
