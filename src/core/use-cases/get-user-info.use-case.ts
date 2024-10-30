import { sleep } from "@/lib/utils";

export async function getUserInfo() {
  await sleep();
  return {
    name: "John Doe",
    email: "john@example.com",
    joinDate: "January 1, 2023",
    notesCount: 42,
  };
}
