import { notes } from "@/db";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

async function getRandomNote() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const randomIndex = Math.floor(Math.random() * notes.length);
  return notes[randomIndex];
}

export default async function RandomNote() {
  const note = await getRandomNote();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{note.content.substring(0, 150)}...</p>
        <p className="text-sm text-gray-400 mt-2">
          Created: {new Date(note.createdAt).toLocaleDateString()}
        </p>
      </CardContent>
    </Card>
  );
}
