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
          <h1 className='text-3xl font-bold mb-4 text-center px-2'>
            {workItem?.title}
          </h1>
          <span className='text-stone-400 text-center px-2 max-w-[40ch]'>
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
          <span className='text-stone-300 text-center px-2 mt-12 max-w-[80ch]'>
            {workItem?.body}
          </span>
          <div className='font-bold mt-8 flex flex-wrap justify-center'>
            {workItem?.tech_stack?.map((e, i) => {
              return (
                <span
                  key={i}
                  className='border border-stone-400 p-2 text-stone-400 text-center rounded-lg m-1'>
                  {e}
                </span>
              );
            })}
          </div>
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
