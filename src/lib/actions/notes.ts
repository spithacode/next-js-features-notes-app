"use server";

import { InsertNoteSchema, WhereNoteSchema } from "@/entities/note";
import { createNote } from "@/use-cases/create-note";
import { deleteNote } from "@/use-cases/delete-note";
import { getNote } from "@/use-cases/get-note";
import { updateNote } from "@/use-cases/update-note";

export async function createNoteAction(formData: FormData) {
  const noteRaw = {
    title: formData.get("title"),
    content: formData.get("content"),
  };
  const { data, error } = await InsertNoteSchema.safeParseAsync(noteRaw);
  if (error) {
    throw new Error(error.message);
  }
  return await createNote(data);
}

export async function findNoteAction(formData: FormData) {
  const whereRaw = {
    id: formData.get("id"),
  };
  const { error: whereError, data: where } =
    await WhereNoteSchema.safeParseAsync(whereRaw);
  if (whereError) {
    throw new Error(whereError.message);
  }

  return getNote(where);
}

export async function updateNoteAction(formData: FormData) {
  const whereRaw = {
    id: formData.get("id"),
  };
  const { error: whereError, data: where } =
    await WhereNoteSchema.safeParseAsync(whereRaw);
  if (whereError) {
    throw new Error(whereError.message);
  }

  const noteRaw = {
    title: formData.get("title"),
    content: formData.get("content"),
  };
  const { data, error } = await InsertNoteSchema.safeParseAsync(noteRaw);
  if (error) {
    throw new Error(error.message);
  }

  return updateNote(where, data);
}

export async function deleteNoteAction(formData: FormData) {
  const whereRaw = {
    id: formData.get("id"),
  };
  const { error: whereError, data: where } =
    await WhereNoteSchema.safeParseAsync(whereRaw);
  if (whereError) {
    throw new Error(whereError.message);
  }
  return deleteNote(where);
}
