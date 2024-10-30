import { notes } from "@/db";
import { NoteWhere } from "@/core/entities/note";
import { sleep } from "@/lib/utils";

export async function getNote({ id }: NoteWhere) {
  console.log("find note with id" + id, notes);

  await sleep();
  return notes.find((note) => note.id === id.toString());
}
