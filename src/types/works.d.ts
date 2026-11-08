import { StaticImageData } from "next/image";
import type { TechName } from "@/components/technologies/stack";

/** What kind of product a project is, shown as labels on its card. */
export type WorkCategory = "Web App" | "Mobile App" | "ML/AI";

/** A month, as "YYYY-MM". */
export type YearMonth = `${number}-${number}`;

/**
 * When a project was built, from its first month of work to its last.
 * `start` and `end` are the same month for a project built within one.
 */
export interface WorkPeriod {
    start: YearMonth,
    end: YearMonth,
}

export interface WorkItem {
    id: string,
    title: string,
    description: string,
    body?: string,
    img_url: Array<string | StaticImageData>,
    view_url: string,
    isOnDevelopment: boolean,
    date: WorkPeriod,
    categories: Array<WorkCategory>,
    /** Logos on the card. Only technologies in the Tech Stack section. */
    tech: Array<TechName>,
}
