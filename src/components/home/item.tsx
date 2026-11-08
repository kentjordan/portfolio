import Image, { StaticImageData } from "next/image";
import { Roboto } from "next/font/google";
import { useRouter } from "nextjs-toploader/app";
import type { WorkCategory, WorkPeriod } from "@/types/works";
import TechIcons from "../technologies/TechIcons";
import type { TechName } from "../technologies/stack";
import CategoryTags from "./category_tags";
import WorkDate from "./work_date";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

const Item = ({
  id,
  title,
  description,
  img_url,
  date,
  categories,
  tech,
}: {
  id: string;
  title: string;
  description: string;
  img_url: string | StaticImageData;
  view_url: string;
  isOnDevelopment: boolean;
  date: WorkPeriod;
  categories: WorkCategory[];
  tech: TechName[];
}) => {
  // nextjs-toploader's router starts the top progress bar on push, which
  // next/navigation's doesn't.
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/works/${id}`);
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
        <WorkDate date={date} className='mt-1' />
        <p className='mt-1.5 text-sm leading-6 text-neutral-400'>
          {description}
        </p>
        {tech.length > 0 && <TechIcons tech={tech} className='mt-auto pt-4' />}
      </div>
    </div>
  );
};

export default Item;
