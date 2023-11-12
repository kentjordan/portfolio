import Me from "@/assets/me.png";
import Image from "next/image";
import { BsMouse } from "react-icons/bs";
import { Anton, Roboto } from "next/font/google";
import Navbar from "@/components/navbar";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const HomeLanding = () => {
  return (
    <div className='flex justify-center h-screen flex-wrap'>
      <div className='absolute bg-gradient-to-t from-black via-black/10  to-transparent max-w-[1280px] w-full h-full'></div>
      {/*  */}
      <div className='absolute bottom-0  text-center xl:text-start flex-col justify-center flex-[.5] xl:flex xl:relative'>
        <span
          className={`${roboto.className} block my-2 text-4xl text-stone-300`}>
          Hello, I'm
        </span>
        <h1 className={`${anton.className} text-6xl`}>Kent Jordan</h1>
        <span
          className={`${roboto.className} block my-2 text-2xl text-stone-300`}>
          A web and app developer.
        </span>
        <div className='relative xl:absolute bottom-0 flex first-letter:flex justify-center items-center xl:my-32 my-16'>
          <BsMouse className='text-white/75' size={32} />
          <span className='block mx-2 text-white/75'>
            Scroll down to see more
          </span>
        </div>
      </div>
      {/*  Image of me*/}
      <div className='flex-col justify-end items-center flex-1 flex overflow-hidden'>
        <Image
          src={Me}
          className='min-w-[800px] w-[800px] h-[700px]'
          alt='Me'></Image>
      </div>
      {/*  */}
    </div>
  );
};

export default HomeLanding;
