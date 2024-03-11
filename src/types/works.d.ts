import { StaticImageData } from "next/image";

export interface WorkItem {
    id: string,
    title: string,
    tech_stack?: Array<string>,
    description: string,
    body?: string,
    img_url: Array<string | StaticImageData>,
    view_url: string,
    isOnDevelopment: boolean,
    tags: Array<string>,
}