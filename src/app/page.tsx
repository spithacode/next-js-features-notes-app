import NoteOfTheDay from "./components/NoteOfTheDay";
import RandomNote from "./components/RandomNote";

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Notes App</h1>

      <NoteOfTheDay>
        <RandomNote />
      </NoteOfTheDay>
    </div>
  );
}
