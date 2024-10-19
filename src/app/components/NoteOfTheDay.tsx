"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function NoteOfTheDay({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Note of the Day</h2>
      <Button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Note" : "Show Note"}
      </Button>
      {isVisible && <div className="mt-4">{children}</div>}
    </div>
  );
}
