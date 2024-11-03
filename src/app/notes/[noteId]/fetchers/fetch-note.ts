import { getNote } from "@/core/use-cases/get-note.use-case";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";

export const fetchNote = async (id: string) => {
  const note = await unstable_cache(getNote, [`note-details/${id}`], {
    tags: ["note-details", `note-details/${id}`],
  })({ id });

  if (!note) {
    return notFound();
  }

  return note;
};
