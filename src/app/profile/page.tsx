import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Profile Actions</h2>
      <div className="flex gap-4">
        <Link href="/notes">
          <Button>View All Notes</Button>
        </Link>
        <Link href="/dashboard">
          <Button>Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
