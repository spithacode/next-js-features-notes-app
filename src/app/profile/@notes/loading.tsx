import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function LoadingLastNotes() {
  return (
    <div>
      <Skeleton className="h-8 w-[200px] mb-4" />
      <div className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <Skeleton className="h-5 w-[250px]" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full mt-2" />
              <Skeleton className="h-4 w-1/2 mt-2" />
              <Skeleton className="h-3 w-[100px] mt-4" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
