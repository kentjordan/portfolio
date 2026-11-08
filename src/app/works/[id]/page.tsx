"use client";

import CategoryTags from "@/components/home/category_tags";
import WorkDate from "@/components/home/work_date";
import TechIcons from "@/components/technologies/TechIcons";
import { pagePaddingX } from "@/lib/utils";
import useFromClients from "@/models/useFromClients";
import usePersonalProjects from "@/models/usePersonalProjects";
import { WorkItem } from "@/types/works";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function WorksPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const personalProjects = usePersonalProjects();
  const fromClients = useFromClients();

  const [workItem, setWorkItem] = useState<WorkItem | null | undefined>(null);

  useEffect(() => {
    const allWorks = fromClients.concat(personalProjects);
    const item = allWorks.find((e) => e.id === id);
    setWorkItem(item);
  }, [personalProjects, fromClients, id]);

  return (
    <div className={`w-full max-w-[1280px] pt-28 select-none ${pagePaddingX}`}>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center mb-8'>
          {workItem && (
            <CategoryTags
              categories={workItem.categories}
              className='mb-4 justify-center px-2'
            />
          )}
          <h1 className='text-2xl sm:text-3xl font-bold mb-3 text-center px-2'>
            {workItem?.title}
          </h1>
          {workItem && (
            <WorkDate
              date={workItem.date}
              className='mb-3 px-2 text-sm text-stone-500'
            />
          )}
          <span className='text-sm sm:text-base text-stone-400 text-center px-2 max-w-[40ch]'>
            {workItem?.description}
          </span>
          {!workItem?.isOnDevelopment && workItem?.view_url && (
            <div className='flex items-center gap-2 mt-4'>
              <Link className='font-bold' href={workItem?.view_url}>
                View Live
              </Link>
              <FaExternalLinkAlt />
            </div>
          )}
          <span className='text-sm sm:text-base leading-7 text-stone-300 text-center px-2 mt-10 max-w-[80ch]'>
            {workItem?.body}
          </span>
          {workItem && workItem.tech.length > 0 && (
            <TechIcons
              tech={workItem.tech}
              size={16}
              labeled
              className='mt-8 justify-center px-2'
            />
          )}
        </div>
        <div className='flex flex-wrap p-3'>
          {workItem?.img_url.map((e, i) => {
            return (
              <Image
                key={i}
                className='basis-1/2 flex-grow my-3 border-neutral-500 border rounded-lg w-full'
                src={e}
                alt='Image'
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WorksPage;
