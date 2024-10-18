import { getNote } from "@/use-cases/get-note";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DeleteNoteButton from "./__components/DeleteButton";
import { notFound } from "next/navigation";

export default async function NotePage({
  params,
}: {
  params: { noteId: string };
}) {
  const note = await getNote({ id: params.noteId });

  if (!note) {
    return notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{note.title}</h1>
      <p className="mb-6 whitespace-pre-wrap">{note.content}</p>
      <div className="flex space-x-2">
        <Link href={`/notes/${note.id}/edit`}>
          <Button variant="outline">Edit</Button>
        </Link>
        <DeleteNoteButton id={note.id} />
        <Link href="/notes">
          <Button variant="outline">Back to Notes</Button>
        </Link>
      </div>
    </div>
  );
}
