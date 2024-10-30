import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getNotes } from "@/core/use-cases/get-notes.use-case";
import Link from "next/link";

async function getLastNotes() {
  const { notes } = await getNotes({ page: 1, limit: 3, search: "" });
  return notes;
}

export default async function LastNotesPage() {
  const notes = await getLastNotes();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Last 5 Notes</h2>
      <div className="space-y-4">
        {notes.map((note) => (
          <Card key={note.id}>
            <CardHeader>
              <CardTitle>
                <Link
                  href={`/notes/${note.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {note.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {note.content.substring(0, 100)}...
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Created: {new Date(note.createdAt).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
