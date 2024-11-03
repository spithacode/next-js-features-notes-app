import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function Loading() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Notes</h1>
      <div className="mb-4">
        <Button disabled>Create New Note</Button>
      </div>
      <div className="mb-4">
        <Skeleton className="h-10 w-[200px]" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-[200px] w-full" />
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <Skeleton className="h-5 w-[200px]" />
        <div className="space-x-2">
          <Skeleton className="h-10 w-[100px] inline-block" />
          <Skeleton className="h-10 w-[100px] inline-block" />
        </div>
      </div>
    </div>
  );
}
