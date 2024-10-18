import CreateNoteForm from "./__components/CreateNoteForm";

export default function CreateNotePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Note</h1>
      <CreateNoteForm />
    </div>
  );
}
