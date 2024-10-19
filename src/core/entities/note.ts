import { z } from "zod";

export const SelectNoteSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.date(),
});
export const WhereNoteSchema = SelectNoteSchema.pick({
  id: true,
});

export const InsertNoteSchema = SelectNoteSchema.omit({
  id: true,
  createdAt: true,
});

export const QueryParamsSchema = z.object({
  page: z.number(),
  limit: z.number(),
  search: z.string().optional(),
});

export const UpdateNoteSchema = InsertNoteSchema.partial();

export type Note = z.infer<typeof SelectNoteSchema>;

export type NoteWhere = z.infer<typeof WhereNoteSchema>;

export type NoteInsert = z.infer<typeof InsertNoteSchema>;

export type NoteUpdate = z.infer<typeof UpdateNoteSchema>;

export type QueryParams = z.infer<typeof QueryParamsSchema>;
