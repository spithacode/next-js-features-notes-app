import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getRandomNote } from "@/core/use-cases/get-random-note.use-case";

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
