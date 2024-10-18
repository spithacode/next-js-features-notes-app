"use server";

import {
  InsertNoteSchema,
  NoteInsert,
  NoteUpdate,
  NoteWhere,
  WhereNoteSchema,
} from "@/entities/note";
import { createNote } from "@/use-cases/create-note";
import { deleteNote } from "@/use-cases/delete-note";
import { updateNote } from "@/use-cases/update-note";
import { revalidatePath } from "next/cache";

export async function createNoteAction(rawNote: NoteInsert) {
  const { data, error } = await InsertNoteSchema.safeParseAsync(rawNote);
  if (error) {
    throw new Error(error.message);
  }
  await createNote(data);
  revalidatePath("/notes");
}

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

  return updateNote(where, data);
}

export async function deleteNoteAction(whereRaw: NoteWhere) {
  const { error: whereError, data: where } =
    await WhereNoteSchema.safeParseAsync(whereRaw);
  if (whereError) {
    throw new Error(whereError.message);
  }
  return deleteNote(where);
}
