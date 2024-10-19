"use client";

import { Note } from "@/core/entities/note";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useDebounce } from "@reactuses/core";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
  const debouncedSearchValue = useDebounce(search, 300);
  const router = useRouter();

  useEffect(() => {
    router.push(`/notes?page=${currentPage}&search=${debouncedSearchValue}`);
  }, [debouncedSearchValue, currentPage, router]);

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
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{note.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {note.content.substring(0, 100)}...
                  </p>
                  <motion.div
                    className="mt-4 flex justify-end space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link href={`/notes/${note.id}`}>
                      <Button variant="outline">View</Button>
                    </Link>
                    <Link href={`/notes/${note.id}/edit`}>
                      <Button variant="outline">Edit</Button>
                    </Link>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
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
