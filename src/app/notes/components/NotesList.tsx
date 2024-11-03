"use client";

import { Note } from "@/core/entities/note";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useNotesSearch } from "./hooks/use-notes-search";
import NoteView from "./NoteView";

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
  const { search, setSearch } = useNotesSearch({ initialSearch, currentPage });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <AnimatePresence>
        <motion.div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" layout>
          {notes.map((note) => (
            <NoteView note={note} key={note.id} />
          ))}
        </motion.div>
      </AnimatePresence>
      <motion.div
        className="mt-4 flex justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
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
      </motion.div>
    </motion.div>
  );
}
