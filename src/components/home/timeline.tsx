"use client";
import { ArrowRight } from "lucide-react";
import { Anton, Roboto } from "next/font/google";
import Image, { type StaticImageData } from "next/image";
import { useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { milestones } from "@/models/milestones";
import useFromClients from "@/models/useFromClients";
import usePersonalProjects from "@/models/usePersonalProjects";
import type { WorkCategory } from "@/types/works";
import CategoryTags from "./category_tags";
import { Section, SectionHeading } from "./section";
import TimelineDialog from "./timeline_dialog";
import {
  buildTimeline,
  fromMilestone,
  fromProject,
  imageFit,
  ImagePlaceholder,
  TimelineDateText,
  type TimelineGroup,
} from "./timeline_entries";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

// Below sm, a 16:9 banner above the text; from sm, a 4:3 thumbnail to its right.
const mediaBox =
  "aspect-video w-full shrink-0 rounded-lg border border-neutral-800 sm:aspect-[4/3] sm:w-40 sm:self-start";

/** "A, B and C" */
const listTitles = (titles: string[]) =>
  titles.length > 1
    ? `${titles.slice(0, -1).join(", ")} and ${titles[titles.length - 1]}`
    : titles.join("");

/** A group's picture: its one image, a mosaic of up to four, or its icon. */
function GroupMedia({ group }: { group: TimelineGroup }) {
  const pictures: { src: string | StaticImageData; logo?: string }[] = [];
  for (const { image, logo } of group.entries) {
    if (image) pictures.push({ src: image, logo });
  }

  if (pictures.length === 0) {
    return <ImagePlaceholder Icon={group.Icon} className={mediaBox} />;
  }
  if (pictures.length === 1) {
    const fit = imageFit(pictures[0].logo);
    return (
      <Image
        src={pictures[0].src}
        alt=''
        width={400}
        height={300}
        sizes='(min-width: 640px) 160px, 100vw'
        className={cn(mediaBox, fit.className)}
        style={fit.style}
      />
    );
  }

  const shown = pictures.slice(0, 4);
  const more = pictures.length - shown.length;
  return (
    // gap-px over the neutral-800 background draws the lines between tiles.
    <div
      aria-hidden
      className={cn(
        mediaBox,
        "grid gap-px overflow-hidden bg-neutral-800",
        shown.length === 2 ? "grid-cols-2" : "grid-cols-2 grid-rows-2"
      )}>
      {shown.map((picture, i) => (
        <div
          key={i}
          className={cn("relative", shown.length === 3 && i === 0 && "row-span-2")}>
          <Image
            src={picture.src}
            alt=''
            fill
            sizes='(min-width: 640px) 80px, 50vw'
            {...imageFit(picture.logo)}
          />
          {more > 0 && i === shown.length - 1 && (
            <span className='absolute inset-0 flex items-center justify-center bg-black/60 text-sm font-bold text-white'>
              +{more}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function GroupCard({
  group,
  isLast,
  onOpen,
}: {
  group: TimelineGroup;
  isLast: boolean;
  onOpen: (trigger: HTMLButtonElement) => void;
}) {
  const { Icon, entries } = group;
  const many = entries.length > 1;
  // A project group's categories, each once, in order of appearance.
  const categories: WorkCategory[] = [];
  for (const entry of entries) {
    for (const category of entry.categories ?? []) {
      if (!categories.includes(category)) categories.push(category);
    }
  }

  return (
    <li className='group relative pl-12'>
      {/* The node on the rail. Positioned, so it paints over the rail like the
          sidebar's icon boxes. */}
      <span
        aria-hidden
        className='absolute left-0 top-4 flex size-8 items-center justify-center rounded-full border border-neutral-800 bg-black text-neutral-400 transition-colors group-hover:text-sky-400'>
        <Icon size={16} aria-hidden />
      </span>
      {/* Hides the rail below the last node, so the line ends there. */}
      {isLast && (
        <span
          aria-hidden
          className='absolute bottom-0 left-[15px] top-12 w-0.5 bg-black'
        />
      )}
      {/* The text comes first for screen readers; flex-col-reverse shows the
          picture above it on phones. */}
      <div className='relative flex flex-col-reverse gap-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4 transition-colors group-hover:border-sky-500 sm:flex-row sm:gap-5 sm:p-5'>
        <div className='min-w-0 flex-1'>
          <div className='flex flex-wrap items-center gap-x-2 gap-y-1'>
            <span
              className={`${roboto.className} text-xs font-bold uppercase tracking-[0.2em] text-neutral-400`}>
              {many ? `${entries.length} ${group.label}` : group.label}
            </span>
            {/* Hidden on phones, where the date often wraps below the label and
                the dot would dangle at the end of the line. */}
            <span aria-hidden className='hidden text-xs text-neutral-600 sm:inline'>
              ·
            </span>
            <TimelineDateText date={group.date} />
          </div>
          <h4 className={`${roboto.className} mt-2 text-base font-bold text-white`}>
            {/* Stretched over the card, so the whole card opens the dialog. */}
            <button
              type='button'
              aria-haspopup='dialog'
              onClick={(e) => onOpen(e.currentTarget)}
              className='text-left after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-sky-500'>
              <span className='line-clamp-3'>
                {many ? listTitles(entries.map((e) => e.title)) : entries[0].title}
              </span>
            </button>
          </h4>
          {!many && (
            <p className='mt-1 text-sm leading-6 text-neutral-400'>
              {entries[0].detail}
            </p>
          )}
          {categories.length > 0 && (
            <CategoryTags categories={categories} className='mt-3' />
          )}
          <p
            aria-hidden
            className='mt-3 flex items-center gap-1 text-xs font-semibold text-sky-400'>
            {many ? `See all ${entries.length}` : "See details"}
            <ArrowRight
              size={14}
              className='transition-transform motion-safe:group-hover:translate-x-0.5'
            />
          </p>
        </div>
        <GroupMedia group={group} />
      </div>
    </li>
  );
}

/**
 * Schooling, jobs, awards, certificates and every project, oldest first,
 * grouped by year and then by kind: one card per group, which opens a dialog
 * with its entries in full. Projects come straight from the project lists;
 * everything else is in src/models/milestones.ts.
 */
const HomeTimeline = () => {
  const freelance = useFromClients();
  const personal = usePersonalProjects();
  const [openKey, setOpenKey] = useState<string>();
  // The card that opened the dialog, to give focus back to when it closes.
  const trigger = useRef<HTMLButtonElement | null>(null);

  // Built during render, not in an effect, so the server HTML has the whole timeline.
  const years = buildTimeline([
    ...milestones.map(fromMilestone),
    ...freelance.map((project) => fromProject(project, true)),
    ...personal.map((project) => fromProject(project, false)),
  ]);
  const groups: TimelineGroup[] = [];
  for (const year of years) groups.push(...year.groups);
  const lastGroup = groups[groups.length - 1];

  return (
    <Section id='timeline'>
      <SectionHeading
        title='Timeline'
        subtitle='From learning to code at STI College Lipa in 2017 to working as a full-stack developer today.'
      />
      <div className='relative max-w-3xl'>
        {/* The rail, through the center of every node: the sidebar's line. It
            sits outside the lists because an <ol> may only contain <li>s. */}
        <span
          aria-hidden
          className='absolute bottom-0 left-[15px] top-4 w-0.5 bg-white/10'
        />
        {/* role='list' because Safari drops list semantics under list-style: none */}
        <ol role='list' className='space-y-10'>
          {years.map(({ year, groups }) => (
            <li key={year}>
              <h3 className='flex items-center gap-4'>
                {/* The dot sits on the rail; its black ring parts the line around it. */}
                <span
                  aria-hidden
                  className='relative flex size-8 shrink-0 items-center justify-center'>
                  <span className='size-2.5 rounded-full bg-sky-400 ring-4 ring-black' />
                </span>
                <span className={`${anton.className} text-2xl text-white`}>
                  {year}
                </span>
              </h3>
              <ol role='list' className='mt-4 space-y-4'>
                {groups.map((group) => (
                  <GroupCard
                    key={group.key}
                    group={group}
                    isLast={group === lastGroup}
                    onOpen={(button) => {
                      trigger.current = button;
                      setOpenKey(group.key);
                    }}
                  />
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
      <TimelineDialog
        group={groups.find((group) => group.key === openKey)}
        onClose={() => {
          setOpenKey(undefined);
          trigger.current?.focus({ preventScroll: true });
        }}
      />
    </Section>
  );
};

export default HomeTimeline;
