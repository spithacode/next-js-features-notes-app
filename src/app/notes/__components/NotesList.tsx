// app/notes/components/NotesList.tsx
"use client";

import { Note } from "@/entities/note";
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function NotesList({
  notes,
  total,
  currentPage,
  search: initialSearch,
}: {
  notes: Note[];
  total: number;
  currentPage: number;
  search: string;
}) {
  const [search, setSearch] = useState(initialSearch);

  return (
    <div>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <Card key={note.id}>
            <CardHeader>
              <CardTitle>{note.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {note.content.substring(0, 100)}...
              </p>
              <div className="mt-4 flex justify-end space-x-2">
                <Link href={`/notes/${note.id}`}>
                  <Button variant="outline">View</Button>
                </Link>
                <Link href={`/notes/${note.id}/edit`}>
                  <Button variant="outline">Edit</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Showing {notes.length} of {total} notes
        </p>
        <div className="space-x-2">
          <Link href={`/notes?page=${currentPage - 1}&search=${search}`}>
            <Button variant="outline" disabled={currentPage === 1}>
              Previous
            </Button>
          </Link>
          <Link href={`/notes?page=${currentPage + 1}&search=${search}`}>
            <Button variant="outline" disabled={notes.length < 10}>
              Next
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
