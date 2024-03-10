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
    <div className='flex flex-col justify-between my-8 max-w-[300px] bg-stone-900 rounded-xl p-2'>
      <div>
        <Image src={img_url} alt='works 1' className='max-h-64 rounded-lg' />
        <div className='flex flex-col p-6'>
          {/*  Tags */}
          <div className='flex my-4'>
            {tags.map((item, index) => {
              if (index >= 1) {
                return (
                  <span
                    key={index}
                    className='ml-2 text-stone-300 font-bold text-sm'>
                    {item}
                  </span>
                );
              }
              return (
                <span key={index} className='text-stone-300 font-bold text-sm'>
                  {item}
                </span>
              );
            })}
          </div>
          {/*  Title */}
          <h1 className={`${roboto.className} mt-4  text-2xl font-bold`}>
            {title}
          </h1>
          {/* Description */}
          <p className='text-stone-300 my-2 '>{description}</p>
          {/*  */}
        </div>
      </div>
      <Link
        href={`/works/${id}`}
        className={`${roboto.className} text-center border text-sm border-stone-400 text-stone-400 w-40 m-8 p-2`}>
        VIEW
      </Link>
    </div>
  );
};

export default Item;
