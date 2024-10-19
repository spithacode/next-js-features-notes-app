"use server";

import {
  InsertNoteSchema,
  NoteUpdate,
  NoteWhere,
  WhereNoteSchema,
} from "@/core/entities/note";
import { updateNote } from "@/use-cases/update-note";
import { revalidateTag } from "next/cache";

export async function updateNoteAction(
  whereRaw: NoteWhere,
  noteRaw: NoteUpdate,
) {
  const { error: whereError, data: where } =
    await WhereNoteSchema.safeParseAsync(whereRaw);
  if (whereError) {
    throw new Error(whereError.message);
  }

  const { data, error } = await InsertNoteSchema.safeParseAsync(noteRaw);
  if (error) {
    throw new Error(error.message);
  }

  await updateNote(where, data);
  revalidateTag("notes");
  revalidateTag(`note-details/${where.id}`);
}
