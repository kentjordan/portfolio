"use client";
import { Anton, Roboto } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

import { PiHandSwipeLeftLight } from "react-icons/pi";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Item from "./item";
import useFromClient from "@/models/useFromClients";
import usePersonalProjects from "@/models/usePersonalProjects";

import Autoplay from "embla-carousel-autoplay";
import { LinearGradient } from "react-text-gradients";

function HomePortfolio() {
  const fromClient = useFromClient();
  const personalProjects = usePersonalProjects();

  return (
    <div
      className='flex flex-col items-center p-4 overflow-hidden xl:overflow-visible'
      id='works'>
      <h1 className={`${anton.className} text-6xl my-8 text-center`}>
        <LinearGradient
          gradient={["to left", "#0ED2F7, #B2FEFA"]}
          fallbackColor='#6DD5FA'>
          My recent works
        </LinearGradient>
      </h1>
      <div className='flex flex-col my-12 items-center justify-center mx-12'>
        <h1
          className={`${roboto.className} text-2xl text-center font-bold italic`}>
          FROM CLIENTS
        </h1>
        <div className='flex items-center gap-3 justify-center mt-8 text-stone-400'>
          <PiHandSwipeLeftLight size={32} className=' text-stone-400' />
          <span>Swipe to see more</span>
        </div>
        <Carousel
          className='mt-8 p-1 max-w-5xl'
          orientation='horizontal'
          plugins={[Autoplay({ delay: 1500 })]}
          opts={{
            align: "center",
            loop: true,
          }}>
          <CarouselContent>
            {fromClient.map((e, i) => {
              return (
                <CarouselItem
                  key={e.id}
                  className='lg:basis-96 flex justify-center'>
                  <Item
                    id={e.id}
                    key={e.id}
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
        <h1 className={`${roboto.className} text-2xl text-center font-bold`}>
          PERSONAL PROJECTS
        </h1>
        <div className='flex items-center gap-3 justify-center mt-8 text-stone-400'>
          <PiHandSwipeLeftLight size={32} className=' text-stone-400' />
          <span>Swipe to see more</span>
        </div>
        <Carousel
          className='mt-8 p-1 max-w-5xl'
          orientation='horizontal'
          plugins={[Autoplay({ delay: 1500 })]}
          opts={{
            align: "center",
            loop: true,
          }}>
          <CarouselContent>
            {personalProjects.map((e, i) => {
              return (
                <CarouselItem
                  key={e.id}
                  className='lg:basis-96 flex justify-center'>
                  <Item
                    id={e.id}
                    key={e.id}
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
    </div>
  );
}

export default HomePortfolio;
