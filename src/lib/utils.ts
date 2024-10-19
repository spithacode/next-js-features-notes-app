import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sleep() {
  return new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 2000 + 1000)),
  );
}
