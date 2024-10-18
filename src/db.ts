import { Note } from "./entities/note";

export const notes: Note[] = globalThis.notes ?? [
  {
    id: "1",
    title: "First Note",
    content: "This is the first note",
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Second Note",
    content: "This is the second note",
    createdAt: new Date(),
  },
];
globalThis.notes = notes;
