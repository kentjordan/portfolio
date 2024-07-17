import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Anton, Roboto } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

const Item = ({
  id,
  title,
  description,
  img_url,
  view_url,
  isOnDevelopment,
  tags,
}: {
  id: string;
  title: string;
  description: string;
  img_url: string | StaticImageData;
  view_url: string;
  isOnDevelopment: boolean;
  tags: string[];
}) => {
  return (
    <div
      onClick={() => {
        window.location.href = `/works/${id}`;
      }}
      className='flex flex-col justify-between my-8 max-w-[300px] border border-neutral-700 bg-neutral-950 hover:border-[#6DD5FA] rounded cursor-pointer'>
      <div>
        <Image
          src={img_url}
          width={600}
          height={400}
          alt='works 1'
          className='h-40 w-full rounded-t'
        />
        <div className='flex flex-col px-6 pb-8 pt-4'>
          {/*  Tags */}
          <div className='flex mt-1 mb-2'>
            {tags.map((item, index) => {
              if (index >= 1) {
                return (
                  <span
                    key={index}
                    className='ml-1 text-stone-400 bg-stone-800 px-2 py-1 rounded text-xs'>
                    {item}
                  </span>
                );
              }
              return (
                <span
                  key={index}
                  className='text-stone-400 bg-stone-800 px-2 py-1 rounded text-xs'>
                  {item}
                </span>
              );
            })}
          </div>
          {/*  Title */}
          <h1 className={`${roboto.className} mt-4  text-xl font-bold`}>
            {title}
          </h1>
          {/* Description */}
          <p className='text-stone-400 my-2 text-sm'>{description}</p>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Item;
