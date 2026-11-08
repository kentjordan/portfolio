import Image, { StaticImageData } from "next/image";
import { Roboto } from "next/font/google";
import type { WorkCategory } from "@/types/works";
import TechIcons from "../technologies/TechIcons";
import type { TechName } from "../technologies/stack";
import CategoryTags from "./category_tags";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

const Item = ({
  id,
  title,
  description,
  img_url,
  categories,
  tech,
}: {
  id: string;
  title: string;
  description: string;
  img_url: string | StaticImageData;
  view_url: string;
  isOnDevelopment: boolean;
  categories: WorkCategory[];
  tech: TechName[];
}) => {
  return (
    <div
      onClick={() => {
        window.location.href = `/works/${id}`;
      }}
      className='flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 transition-colors hover:border-sky-500'>
      <Image
        src={img_url}
        width={600}
        height={400}
        alt={title}
        className='h-40 w-full object-cover object-top'
      />
      {/* flex-1 + mt-auto pin the logos to the bottom, so they line up across
          the carousel's equal-height cards. */}
      <div className='flex flex-1 flex-col p-5'>
        <CategoryTags categories={categories} />
        <h3 className={`${roboto.className} mt-3 text-base font-bold`}>
          {title}
        </h3>
        <p className='mt-1.5 text-sm leading-6 text-neutral-400'>
          {description}
        </p>
        {tech.length > 0 && <TechIcons tech={tech} className='mt-auto pt-4' />}
      </div>
    </div>
  );
};

export default Item;
