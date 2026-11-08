"use client";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { Anton, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef } from "react";

import TechIcons from "../technologies/TechIcons";
import CategoryTags from "./category_tags";
import {
  imageFit,
  ImagePlaceholder,
  TimelineDateText,
  type TimelineEntry,
  type TimelineGroup,
} from "./timeline_entries";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

/**
 * One entry in full: picture, dates, tags, technologies and links. Projects
 * leave out their description; the rest keep their detail line.
 */
function EntryDetails({ entry }: { entry: TimelineEntry }) {
  const { categories = [], tech = [], link, externalLinks = [] } = entry;
  const fit = imageFit(entry.logo);
  const isProject = entry.group === "project";

  return (
    <article className='grid gap-4 py-6 sm:grid-cols-[13rem_1fr] sm:gap-6'>
      {entry.image ? (
        <Image
          src={entry.image}
          alt=''
          width={416}
          height={312}
          sizes='(min-width: 640px) 208px, 100vw'
          className={`aspect-video w-full rounded-lg border border-neutral-800 sm:aspect-[4/3] ${fit.className}`}
          style={fit.style}
        />
      ) : (
        <ImagePlaceholder
          Icon={entry.Icon}
          className='aspect-video w-full sm:aspect-[4/3]'
        />
      )}
      <div className='min-w-0'>
        <div className='flex flex-wrap items-center gap-x-2 gap-y-1'>
          <span
            className={`${roboto.className} text-xs font-bold uppercase tracking-[0.2em] text-neutral-400`}>
            {entry.label}
          </span>
          <span aria-hidden className='hidden text-xs text-neutral-600 sm:inline'>
            ·
          </span>
          <TimelineDateText date={entry.date} />
        </div>
        <h3 className={`${roboto.className} mt-2 text-lg font-bold text-white`}>
          {entry.title}
        </h3>
        {!isProject && (
          <p className='mt-1 text-sm leading-6 text-neutral-300'>{entry.detail}</p>
        )}
        {entry.courses && (
          <ul
            role='list'
            aria-label='Courses'
            className='mt-3 space-y-1.5 border-l border-neutral-800 pl-3 text-xs text-neutral-400'>
            {entry.courses.map((course) => (
              // Two columns, so long titles wrap in theirs and the months stay aligned.
              <li
                key={course.title}
                className='grid grid-cols-[1fr_auto] items-baseline gap-x-3'>
                <span>{course.title}</span>
                <TimelineDateText date={{ start: course.date, end: course.date }} />
              </li>
            ))}
          </ul>
        )}
        {(categories.length > 0 || tech.length > 0) && (
          <div className='mt-4 flex flex-wrap items-center gap-x-4 gap-y-3'>
            {categories.length > 0 && <CategoryTags categories={categories} />}
            {tech.length > 0 && <TechIcons tech={tech} size={18} />}
          </div>
        )}
        {(link || externalLinks.length > 0) && (
          <div className='mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold'>
            {link && (
              // The title in the name tells the dialog's "View project" links apart.
              <Link
                href={link.href}
                aria-label={`${link.label}: ${entry.title}`}
                className='inline-flex items-center gap-1 text-sky-400 transition-colors hover:text-sky-300'>
                {link.label}
                <ArrowRight size={16} aria-hidden />
              </Link>
            )}
            {externalLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${label}: ${entry.title} (opens in a new tab)`}
                className='inline-flex items-center gap-1 text-neutral-300 transition-colors hover:text-white'>
                {label}
                <ArrowUpRight size={16} aria-hidden />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

/**
 * A timeline group's entries in full, in a native modal <dialog>. The browser
 * keeps focus inside it and closes it on Escape; the close button and a click
 * on the backdrop close it too. globals.css stops the page scrolling behind it.
 */
export default function TimelineDialog({
  group,
  onClose,
}: {
  group?: TimelineGroup;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  // Opened after the group's content has rendered, so showModal() focuses the
  // close button that's actually there.
  useEffect(() => {
    const dialog = ref.current;
    if (group && dialog && !dialog.open) dialog.showModal();
  }, [group]);

  const many = group && group.entries.length > 1;

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClose={onClose}
      // A click on the backdrop lands on the <dialog> itself; a click inside
      // lands on its content, which fills it.
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
      className='m-auto max-h-[85svh] w-[calc(100%-2rem)] max-w-2xl select-text overflow-y-auto overscroll-contain rounded-2xl border border-neutral-800 bg-neutral-950 p-0 text-white shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm motion-safe:open:animate-in motion-safe:open:fade-in-0 motion-safe:open:zoom-in-95'>
      {group && (
        <div className='px-5 pb-2 sm:px-8'>
          <header className='sticky top-0 z-10 -mx-5 flex items-start justify-between gap-4 border-b border-neutral-800 bg-neutral-950 px-5 py-4 sm:-mx-8 sm:px-8'>
            <div>
              <p
                className={`${roboto.className} text-xs font-bold uppercase tracking-[0.2em] text-sky-400`}>
                {group.year}
              </p>
              <h2 id={titleId} className={`${anton.className} mt-1 text-2xl text-white`}>
                {many ? `${group.entries.length} ${group.label}` : group.label}
              </h2>
            </div>
            <button
              type='button'
              onClick={() => ref.current?.close()}
              aria-label='Close'
              className='flex size-9 shrink-0 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition-colors hover:border-sky-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500'>
              <X size={18} aria-hidden />
            </button>
          </header>
          <div className='divide-y divide-neutral-800'>
            {group.entries.map((entry) => (
              <EntryDetails key={entry.key} entry={entry} />
            ))}
          </div>
        </div>
      )}
    </dialog>
  );
}
