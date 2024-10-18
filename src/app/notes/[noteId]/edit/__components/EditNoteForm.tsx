"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { updateNoteAction } from "@/lib/actions/notes";

export default function NoteForm({
  note,
}: {
  note: { id: string; title: string; content: string };
}) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateNoteAction({ id: note.id }, { title, content });
    router.push("/notes");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <Textarea
          placeholder="Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={10}
        />
      </div>
      <Button type="submit">Update Note </Button>
    </form>
  );
}
