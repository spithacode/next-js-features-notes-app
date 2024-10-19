import { Suspense } from "react";
import NotesSummary from "./components/NotesSummary";
import RecentActivity from "./components/RecentActivity";
import TagCloud from "./components/TagCloud";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Suspense fallback={<Skeleton className="h-[200px]" />}>
          <NotesSummary />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-[200px]" />}>
          <RecentActivity />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-[200px]" />}>
          <TagCloud />
        </Suspense>
      </div>
    </div>
  );
}
