"use client";
import { useId, useRef } from "react";
import { Roboto } from "next/font/google";
import Autoplay from "embla-carousel-autoplay";
import { PiHandSwipeLeftLight } from "react-icons/pi";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useFromClient from "@/models/useFromClients";
import usePersonalProjects from "@/models/usePersonalProjects";
import { WorkItem } from "@/types/works";
import Item from "./item";
import { Section, SectionHeading } from "./section";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

// shadcn's outline buttons take the light theme's colors, and their default
// spot outside the carousel's edges is clipped by the section on narrow
// screens, so these sit in the label row as dark circles that match the cards.
const navButtonClass =
  "static h-9 w-9 translate-y-0 border-neutral-700 bg-transparent text-neutral-300 ring-offset-black hover:border-sky-500 hover:bg-transparent hover:text-white focus-visible:ring-sky-500";

function ProjectCarousel({
  label,
  items,
  delay,
}: {
  label: string;
  items: WorkItem[];
  delay: number;
}) {
  // In a ref so the buttons can stop this carousel's autoplay. A swipe already
  // stops it; a click should too, or the card the visitor just picked would
  // slide away a moment later.
  const autoplay = useRef(Autoplay({ delay }));
  const stopAutoplay = () => autoplay.current.stop();
  const headingId = useId();

  return (
    <Carousel
      aria-labelledby={headingId}
      className='w-full'
      orientation='horizontal'
      plugins={[autoplay.current]}
      opts={{
        align: "start",
        loop: true,
      }}>
      <div className='mb-6 flex items-end justify-between gap-4'>
        <div>
          <h3
            id={headingId}
            className={`${roboto.className} text-xs font-bold uppercase tracking-[0.2em] text-neutral-400`}>
            {label}
          </h3>
          <div className='mt-2 flex items-center gap-2 text-neutral-500'>
            <PiHandSwipeLeftLight size={18} />
            <span className='text-xs'>Swipe to see more</span>
          </div>
        </div>
        {/* Capture phase, because the buttons' own onClick does the scrolling. */}
        <div className='flex shrink-0 gap-2'>
          <CarouselPrevious
            className={navButtonClass}
            onClickCapture={stopAutoplay}
          />
          <CarouselNext
            className={navButtonClass}
            onClickCapture={stopAutoplay}
          />
        </div>
      </div>
      <CarouselContent>
        {items.map((e, i) => {
          return (
            <CarouselItem
              key={`${e.id}-${i}`}
              className='flex sm:basis-1/2 xl:basis-1/3'>
              <Item
                id={e.id}
                title={e.title}
                description={e.description}
                img_url={e.img_url[0]}
                view_url={e.view_url}
                isOnDevelopment={e.isOnDevelopment}
                categories={e.categories}
                tech={e.tech}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}

function HomePortfolio() {
  const fromClient = useFromClient();
  const personalProjects = usePersonalProjects();

  // Duplicated so Embla has enough slides to satisfy `loop: true`
  // when three slides are visible at once (xl:basis-1/3).
  const clientSlides = [...fromClient, ...fromClient];

  return (
    <Section id='works' className='overflow-hidden'>
      <SectionHeading title='Recent Works' />
      <div className='space-y-16'>
        <ProjectCarousel
          label='FROM FREELANCING'
          items={clientSlides}
          delay={1800}
        />
        <ProjectCarousel
          label='PERSONAL PROJECTS'
          items={personalProjects}
          delay={2000}
        />
      </div>
    </Section>
  );
}

export default HomePortfolio;
