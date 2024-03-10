
export interface WorkItem {
    id: string,
    title: string,
    description: string,
    img_url: Array<string>,
    view_url: string,
    isOnDevelopment: boolean,
    tags: Array<string>,
}