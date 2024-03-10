"use client";

import useFromClients from "@/models/useFromClients";
import usePersonalProjects from "@/models/usePersonalProjects";
import { WorkItem } from "@/types/works";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function WorksPage({ params }: { params: { id: string } }) {
  const personalProjects = usePersonalProjects();
  const fromClients = useFromClients();

  const [workItem, setWorkItem] = useState<WorkItem | null | undefined>(null);

  useEffect(() => {
    const allWorks = fromClients.concat(personalProjects);
    const item = allWorks.find((e) => e.id === params.id);
    setWorkItem(item);
  }, [personalProjects, fromClients]);

  return (
    <div className=' w-full max-w-[1280px] pt-40'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center mb-8'>
          <h1 className='text-3xl font-bold mb-4'>{workItem?.title}</h1>
          <span className='text-stone-300 text-center'>
            {workItem?.description}
          </span>
        </div>
        {!workItem?.isOnDevelopment && workItem?.view_url && (
          <div className='flex items-center gap-2'>
            <Link href={workItem?.view_url}>View Live</Link>
            <FaExternalLinkAlt />
          </div>
        )}
        <div className='flex flex-wrap p-3'>
          {workItem?.img_url.map((e, i) => {
            return (
              <Image
                key={i}
                className='basis-1/2 flex-grow my-3 border-stone-400 border-2 rounded-lg w-full'
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
