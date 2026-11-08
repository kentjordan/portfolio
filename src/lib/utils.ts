import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Side padding for page content: home sections, the other pages and the footer. */
export const pagePaddingX = "px-6 sm:px-10 lg:px-16 xl:px-20"
