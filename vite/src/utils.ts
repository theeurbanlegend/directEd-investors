import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function formatDate(inputDate: string | number | Date) {
  const date = new Date(inputDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
export function validateMongoId(id: string) {
  return /^[0-9a-fA-F]{24}$/.test(id);
  //later we will await validation from the backend
  // const res = await fetch(`/api/validateMongoId/${id}`);
  // return res?.isValid;
}