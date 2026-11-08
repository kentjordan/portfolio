import {
  Award,
  Building2,
  CodeXml,
  GraduationCap,
  Rocket,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import type { StaticImageData } from "next/image";

import { cn } from "@/lib/utils";
import type { Milestone, TimelineDate } from "@/types/timeline";
import type {
  WorkCategory,
  WorkItem,
  WorkPeriod,
  YearMonth,
} from "@/types/works";
import type { TechName } from "../technologies/stack";
import WorkDate from "./work_date";

/** The kind of card an entry is grouped into within its year. Listed projects are "project". */
type GroupKind = Milestone["kind"];

// Certificates share the sidebar's Certificates icon.
const groupKinds: Record<
  GroupKind,
  { one: string; many: string; Icon: LucideIcon }
> = {
  education: { one: "Education", many: "Education", Icon: GraduationCap },
  job: { one: "Job", many: "Jobs", Icon: Building2 },
  startup: { one: "Startup", many: "Startups", Icon: Rocket },
  award: { one: "Award", many: "Awards", Icon: Trophy },
  certificate: { one: "Certificate", many: "Certificates", Icon: Award },
  project: { one: "Project", many: "Projects", Icon: CodeXml },
};

/** One item on the timeline, with everything its dialog shows. */
export interface TimelineEntry {
  key: string;
  group: GroupKind;
  /** e.g. "Freelance project" */
  label: string;
  Icon: LucideIcon;
  title: string;
  /** The line under the title: a project's description, a milestone's detail */
  detail: string;
  date: TimelineDate;
  image?: string | StaticImageData;
  /** The image is a logo on this background color (see imageFit) */
  logo?: string;
  /** Its page on this site */
  link?: { href: string; label: string };
  /** Other sites, opened in a new tab: a live project's view_url or a milestone's links */
  externalLinks?: { label: string; href: string }[];
  categories?: WorkCategory[];
  tech?: TechName[];
  courses?: Milestone["courses"];
}

/** A year's entries of one kind: one card on the timeline, opening one dialog. */
export interface TimelineGroup {
  key: string;
  year: number;
  /** "Projects", or "Project" for a group of one */
  label: string;
  Icon: LucideIcon;
  /** From the earliest start to the latest end of its entries */
  date: TimelineDate;
  entries: TimelineEntry[];
}

export interface TimelineYear {
  year: number;
  groups: TimelineGroup[];
}

export const fromMilestone = (milestone: Milestone): TimelineEntry => ({
  key: `milestone:${milestone.id}`,
  group: milestone.kind,
  label: milestone.label ?? groupKinds[milestone.kind].one,
  Icon: groupKinds[milestone.kind].Icon,
  title: milestone.title,
  detail: milestone.detail,
  date: milestone.date,
  image: milestone.image,
  logo: milestone.logo,
  link: milestone.field && {
    href: `/certs/${milestone.field}`,
    label: "View certificate",
  },
  externalLinks: milestone.links,
  courses: milestone.courses,
  categories: milestone.categories,
});

export const fromProject = (
  project: WorkItem,
  freelance: boolean
): TimelineEntry => ({
  key: `work:${project.id}`,
  group: "project",
  label: freelance ? "Freelance project" : "Personal project",
  Icon: groupKinds.project.Icon,
  title: project.title,
  detail: project.description,
  date: project.date,
  // The project card's thumbnail
  image: project.img_url[0],
  link: { href: `/works/${project.id}`, label: "View project" },
  // The same rule as "View Live" on the project's page
  externalLinks:
    !project.isOnDevelopment && project.view_url
      ? [{ label: "Live site", href: project.view_url }]
      : undefined,
  categories: project.categories,
  tech: project.tech,
});

/** A month as a number in date order: "2024-03" is 202403. */
const monthKey = (yearMonth: YearMonth) => {
  const [year, month] = yearMonth.split("-").map(Number);
  return year * 100 + month;
};

/** "present" sorts after every month. */
const endMonthKey = (end: WorkPeriod["end"]) =>
  end === "present" ? 999999 : monthKey(end);

// A year-only date counts as month 0, so it comes before that year's months.
const startKey = (date: TimelineDate) =>
  "year" in date ? date.year * 100 : monthKey(date.start);
const endKey = (date: TimelineDate) =>
  "year" in date ? date.year * 100 : endMonthKey(date.end);

/** A group's span: its first entry's start to the latest end among its entries. */
function spanOf(entries: TimelineEntry[]): TimelineDate {
  const periods = entries
    .map((entry) => entry.date)
    .filter((date): date is WorkPeriod => !("year" in date));
  if (entries.length === 1 || periods.length === 0) return entries[0].date;
  let end = periods[0].end;
  for (const period of periods) {
    if (endMonthKey(period.end) > endMonthKey(end)) end = period.end;
  }
  // Entries are sorted by start, so the first period starts earliest.
  return { start: periods[0].start, end };
}

/**
 * Entries oldest first (by start, then end), grouped by the year they start in
 * and then by kind; a year's groups are in the order of their first entries.
 * Plain number and string comparisons, with no Date, Intl or localeCompare,
 * so the server and the browser always agree on the order.
 */
export function buildTimeline(entries: TimelineEntry[]): TimelineYear[] {
  const sorted = [...entries].sort(
    (a, b) =>
      startKey(a.date) - startKey(b.date) ||
      endKey(a.date) - endKey(b.date) ||
      (a.key < b.key ? -1 : a.key > b.key ? 1 : 0)
  );

  // Arrays rather than Maps: iterating a Map doesn't compile under the es5 target.
  const years: { year: number; buckets: TimelineEntry[][] }[] = [];
  for (const entry of sorted) {
    const year = Math.floor(startKey(entry.date) / 100);
    let current = years[years.length - 1];
    if (!current || current.year !== year) {
      current = { year, buckets: [] };
      years.push(current);
    }
    const bucket = current.buckets.find(([first]) => first.group === entry.group);
    if (bucket) bucket.push(entry);
    else current.buckets.push([entry]);
  }

  return years.map(({ year, buckets }) => ({
    year,
    groups: buckets.map((groupEntries) => {
      const kind = groupKinds[groupEntries[0].group];
      return {
        key: `${year}:${groupEntries[0].group}`,
        year,
        label: groupEntries.length > 1 ? kind.many : kind.one,
        Icon: kind.Icon,
        date: spanOf(groupEntries),
        entries: groupEntries,
      };
    }),
  }));
}

/**
 * How an entry's image fills its box: screenshots and certificates are cropped
 * to fill it, from the top; a logo is shown whole and centered, inset from the
 * edges, on its own background color so the space around it blends in.
 */
export const imageFit = (logo?: string) =>
  logo
    ? { className: "object-contain p-3", style: { backgroundColor: logo } }
    : { className: "object-cover object-top", style: undefined };

/** A timeline date: months through WorkDate, or just the year when that's all that's known. */
export function TimelineDateText({
  date,
  className,
}: {
  date: TimelineDate;
  className?: string;
}) {
  if ("year" in date) {
    return (
      <p className={cn("text-xs text-neutral-500", className)}>
        <time dateTime={String(date.year)}>{date.year}</time>
      </p>
    );
  }
  return <WorkDate date={date} className={className} />;
}

/** Stands in for a picture an entry doesn't have: its icon on a tinted panel. */
export function ImagePlaceholder({
  Icon,
  className,
}: {
  Icon: LucideIcon;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "flex items-center justify-center rounded-lg border border-neutral-800 bg-gradient-to-br from-sky-500/20 via-neutral-900 to-neutral-950 text-sky-400/80",
        className
      )}>
      <Icon size={36} strokeWidth={1.5} aria-hidden />
    </div>
  );
}
