import { getNotesSummary } from "@/core/use-cases/get-notes-summary.use-case";

export default async function NotesSummary() {
  const summary = await getNotesSummary();

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Notes Summary</h2>
      <p>Total Notes: {summary.totalNotes}</p>
      <p>Notes Created This Week: {summary.notesThisWeek}</p>
      <p>Notes Created This Month: {summary.notesThisMonth}</p>
    </div>
  );
}
