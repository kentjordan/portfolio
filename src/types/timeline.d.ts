import type { StaticImageData } from "next/image";
import type { CertField } from "@/types/certs";
import type { WorkCategory, WorkPeriod, YearMonth } from "@/types/works";

/**
 * When a timeline entry happened: its months, like a project's `date`, or only
 * the year when the month isn't known.
 */
export type TimelineDate = WorkPeriod | { year: number };

/**
 * A timeline entry that isn't in the project lists: schooling, a job, a
 * startup, an award, a certificate, or a project with no page on the site.
 */
export interface Milestone {
    id: string,
    /** Which card it joins; a "project" shares its year's card with the listed projects. */
    kind: "education" | "job" | "startup" | "award" | "certificate" | "project",
    /** Shown in its dialog instead of the kind's name, e.g. "School project". */
    label?: string,
    title: string,
    /** The school, organizer or issuer, shown under the title. */
    detail: string,
    date: TimelineDate,
    /** The certificate gallery the entry links to, /certs/<field>. */
    field?: CertField,
    /** Sites linked from its dialog, each opening in a new tab: a website, app store pages. */
    links?: Array<{ label: string, href: string }>,
    /** Shown beside the text. Without one, the entry shows its icon on a tinted panel. */
    image?: StaticImageData,
    /**
     * The image is a logo: shown whole and centered instead of cropped to fill,
     * on this CSS color. Use the logo's own background, e.g. "white".
     */
    logo?: string,
    /** A specialization's courses, each with the month its certificate was earned. */
    courses?: Array<{ title: string, date: YearMonth }>,
    /** A project's category labels, as on a listed project. */
    categories?: Array<WorkCategory>,
}
