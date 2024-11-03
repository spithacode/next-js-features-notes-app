"use client";
import { useDebounce } from "@reactuses/core";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useNotesSearch = ({
  initialSearch,
  currentPage,
}: {
  initialSearch: string;
  currentPage: number;
}) => {
  const [search, setSearch] = useState(initialSearch);
  const debouncedSearchValue = useDebounce(search, 300);
  const router = useRouter();

  useEffect(() => {
    router.push(`/notes?page=${currentPage}&search=${debouncedSearchValue}`);
  }, [debouncedSearchValue, currentPage, router]);

  return {
    search,
    setSearch,
  };
};
