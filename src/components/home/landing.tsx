import Image from "next/image";
import Me from "@/assets/me.png";
import { BsMouse } from "react-icons/bs";
import { Anton, Roboto } from "next/font/google";
import { BsFacebook, BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const HomeLanding = () => {
  const [height, setHeight] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    setHeight(window.innerHeight);
  }, [height]);

  return (
    <div
      className={`flex justify-center items-end flex-wrap relative h-screen `}
      style={{
        maxHeight: `${height}px`,
      }}>
      <div className='absolute bg-gradient-to-t from-black via-black/10  to-transparent max-w-[1280px] w-full h-full'></div>
      {/* Info about me */}
      <div className='absolute bottom-0 flex text-center xl:text-start flex-col h-full flex-[0.5] justify-end xl:justify-center xl:flex xl:relative'>
        <span
          className={`${roboto.className} block my-2 text-xl sm:text-4xl text-stone-300`}>
          Hello, I&apos;m
        </span>
        <h1 className={`${anton.className} text-4xl sm:text-6xl`}>
          Kent Jordan
        </h1>
        <span
          className={`${roboto.className} block my-2 text-lg sm:text-2xl text-stone-300`}>
          A web and app developer.
        </span>
        <div className='flex xl:justify-start justify-center gap-6 my-8'>
          <Link href='https://www.facebook.com/kentaki.dev'>
            <BsFacebook size={32} />
          </Link>
          <Link href='https://twitter.com/_kentjordan'>
            <BsTwitter size={32} />
          </Link>
          <Link href='https://www.linkedin.com/in/kjordannn'>
            <BsLinkedin size={32} />
          </Link>
          <Link href='https://github.com/kentjordan'>
            <BsGithub size={32} />
          </Link>
        </div>
        <div className='relative xl:absolute bottom-0 flex first-letter:flex justify-center items-center xl:my-32 my-16'>
          <BsMouse className='text-white/75' size={32} />
          <span className='block mx-2 text-sm text-white/75'>
            Scroll down to see more
          </span>
        </div>
      </div>
      {/*  Image of me*/}
      <div className='flex-col justify-end items-center flex-1 flex overflow-hidden h-full'>
        <img src={Me.src} className='h-[80%] object-cover ' alt='Me'></img>
      </div>
    </div>
  );
};

export default HomeLanding;
