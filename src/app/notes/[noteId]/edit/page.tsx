import EditNoteForm from "./components/EditNoteForm";
import { fetchNote } from "../fetchers/fetch-note";
export default async function EditNotePage({
  params,
}: {
  params: Promise<{ noteId: string }>;
}) {
  const { noteId } = await params;
  const note = await fetchNote(noteId);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Edit Note</h1>
      <EditNoteForm note={note} />
    </div>
  );
}
