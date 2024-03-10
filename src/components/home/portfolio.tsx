"use client";
import { Anton, Roboto } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

import { PiHandSwipeLeftLight } from "react-icons/pi";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Item from "./item";
import useFromClient from "@/models/useFromClients";
import usePersonalProjects from "@/models/usePersonalProjects";

function HomePortfolio() {
  const fromClient = useFromClient();
  const personalProjects = usePersonalProjects();

  return (
    <div
      className='flex flex-col items-center p-4 overflow-hidden xl:overflow-visible '
      id='works'>
      <h1 className={`${anton.className} text-6xl my-8 text-center`}>
        My recent works
      </h1>
      <div className='flex flex-col my-12 items-center justify-center mx-12'>
        <h1 className={`${roboto.className} text-2xl text-center`}>
          From a client
        </h1>
        <div className='flex items-center gap-3 justify-center mt-8 text-stone-400 xl:hidden'>
          <PiHandSwipeLeftLight size={32} className=' text-stone-400' />
          <span>Swipe to see more</span>
        </div>
        <Carousel
          orientation='horizontal'
          opts={{
            align: "center",
          }}>
          <CarouselContent>
            {fromClient.map((e, i) => {
              return (
                <CarouselItem
                  key={i * 3}
                  className='md:basis-1/2 lg:basis-1/3 flex justify-center'>
                  <Item
                    id={e.id}
                    key={i}
                    title={e.title}
                    description={e.description}
                    img_url={e.img_url[0]}
                    view_url={e.view_url}
                    isOnDevelopment={e.isOnDevelopment}
                    tags={e.tags}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      <div className='flex flex-col my-12 items-center justify-center mx-12'>
        <h1 className={`${roboto.className} text-2xl text-center`}>
          Personal Projects
        </h1>
        <div className='flex items-center gap-3 justify-center mt-8 text-stone-400 xl:hidden'>
          <PiHandSwipeLeftLight size={32} className=' text-stone-400' />
          <span>Swipe to see more</span>
        </div>
        <Carousel
          orientation='horizontal'
          opts={{
            align: "center",
          }}>
          <CarouselPrevious />
          <CarouselContent>
            {personalProjects.map((e, i) => {
              return (
                <CarouselItem
                  key={i * 4}
                  className='lg:basis-1/3 flex justify-center'>
                  <Item
                    id={e.id}
                    key={i * 2}
                    title={e.title}
                    description={e.description}
                    img_url={e.img_url[0]}
                    view_url={e.view_url}
                    isOnDevelopment={e.isOnDevelopment}
                    tags={e.tags}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default HomePortfolio;
