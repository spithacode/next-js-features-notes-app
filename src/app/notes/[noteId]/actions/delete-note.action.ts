"use server";

import { NoteWhere, WhereNoteSchema } from "@/core/entities/note";
import { deleteNote } from "@/core/use-cases/delete-note.use-case";
import { revalidateTag } from "next/cache";

export async function deleteNoteAction(whereRaw: NoteWhere) {
  const { error: whereError, data: where } =
    await WhereNoteSchema.safeParseAsync(whereRaw);
  if (whereError) {
    throw new Error(whereError.message);
  }
  await deleteNote(where);

  revalidateTag("notes");
  revalidateTag(`note-details/${where.id}`);
}
