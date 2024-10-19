import { getNote } from "@/use-cases/get-note";
import EditNoteForm from "./components/EditNoteForm";
import { notFound } from "next/navigation";

export default async function EditNotePage({
  params,
}: {
  params: { noteId: string };
}) {
  console.log("update note----->", params);
  const note = await getNote({ id: params.noteId });

  if (!note) {
    return notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Edit Note</h1>
      <EditNoteForm note={note} />
    </div>
  );
}
