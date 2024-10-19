"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Error Page Demo</h1>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold text-red-600">
          Something went wrong!
        </h2>
        <p className="text-gray-600">{error.message}</p>
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}
