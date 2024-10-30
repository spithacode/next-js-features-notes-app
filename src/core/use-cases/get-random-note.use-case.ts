import { notes } from "@/db";
import { sleep } from "@/lib/utils";

export async function getRandomNote() {
  await sleep();

  const randomIndex = Math.floor(Math.random() * notes.length);
  return notes[randomIndex];
}
