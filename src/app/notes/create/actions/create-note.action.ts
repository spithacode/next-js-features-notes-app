"use server";

import { InsertNoteSchema, NoteInsert } from "@/core/entities/note";
import { createNote } from "@/use-cases/create-note";
import { revalidateTag } from "next/cache";

export async function createNoteAction(rawNote: NoteInsert) {
  const { data, error } = await InsertNoteSchema.safeParseAsync(rawNote);
  if (error) {
    throw new Error(error.message);
  }
  await createNote(data);
  revalidateTag("notes");
}