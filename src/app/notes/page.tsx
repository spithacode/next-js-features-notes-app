import { getNotes } from "@/core/use-cases/get-notes.use-case";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NotesList from "./components/NotesList";
import { QueryParams } from "@/core/entities/note";
import { unstable_cache } from "next/cache";

async function fetchNotes(params: QueryParams) {
  return await unstable_cache(getNotes, ["notes"], { tags: ["notes"] })({
    ...params,
  });
}

export default async function NotesPage({
  searchParams,
}: {
  searchParams: { page?: string; search?: string };
}) {
  const page = Number(searchParams.page) || 1;
  const search = searchParams.search || "";
  const { notes, total } = await fetchNotes({ page, search, limit: 5 });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Notes</h1>
      <div className="mb-4">
        <Link href="/notes/create">
          <Button>Create New Note</Button>
        </Link>{" "}
      </div>
      <NotesList
        notes={notes}
        total={total}
        currentPage={page}
        search={search}
      />
    </div>
  );
}
