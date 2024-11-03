"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { type Note } from "@/core/entities/note";

const NoteView = ({ note }: { note: Note }) => {
  return (
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
  );
};

export default NoteView;
