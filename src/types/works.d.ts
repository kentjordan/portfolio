import { StaticImageData } from "next/image";
import type { TechName } from "@/components/technologies/stack";

/** What kind of product a project is, shown as labels on its card. */
export type WorkCategory = "Web App" | "Mobile App" | "ML/AI";

export interface WorkItem {
    id: string,
    title: string,
    description: string,
    body?: string,
    img_url: Array<string | StaticImageData>,
    view_url: string,
    isOnDevelopment: boolean,
    categories: Array<WorkCategory>,
    /** Logos on the card. Only technologies in the Tech Stack section. */
    tech: Array<TechName>,
}
