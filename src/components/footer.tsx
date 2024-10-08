import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=' w-full flex flex-col items-center pb-8 border-t border-neutral-900 bg-neutral-950 mt-32 select-none'>
      <ul className='flex gap-8 justify-center my-16 sm:flex-row pl-4 flex-col w-full text-neutral-300'>
        <Link
          className='text-sm cursor-pointer hover:border-b-sky-500 hover:border-b my-2 px-2'
          href='/'>
          Home
        </Link>
        <Link
          className='text-sm cursor-pointer hover:border-b-sky-500 hover:border-b my-2 px-2'
          href='/#techstack'>
          Techstack
        </Link>
        <Link
          className='text-sm cursor-pointer hover:border-b-sky-500 hover:border-b my-2 px-2'
          href='/#works'>
          Works
        </Link>
        {/* <Link className="text-sm cursor-pointer hover:border-b-sky-500 hover:border-b my-2 px-2" href='/blogs'>Blogs</Link> */}
        <Link
          className='text-sm cursor-pointer hover:border-b-sky-500 hover:border-b my-2 px-2'
          href='/#certificates'>
          Certificates
        </Link>
        <Link
          className='text-sm cursor-pointer hover:border-b-sky-500 hover:border-b my-2 px-2'
          href='/#about-me'>
          About Me
        </Link>
        <Link
          className='text-sm cursor-pointer hover:border-b-sky-500 hover:border-b my-2 px-2'
          href='/contact'>
          Contact
        </Link>
      </ul>
      <h1 className='text-sm pl-6 sm:text-center w-full text-neutral-300'>
        Copyright {new Date().getFullYear()} | Kent John Jordan
      </h1>
    </div>
  );
};

export default Footer;
