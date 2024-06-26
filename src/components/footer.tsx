import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className='  w-full flex flex-col items-center p-8'>
      <ul className='flex gap-8 justify-center my-16 flex-wrap'>
        <li className='cursor-pointer hover:border-b-sky-500 hover:border-b py-1 px-2'>
          <Link href='/'>Home</Link>
        </li>
        <li className='cursor-pointer hover:border-b-sky-500 hover:border-b py-1 px-2'>
          <Link href='/#techstack'>Techstack</Link>
        </li>
        <li className='cursor-pointer hover:border-b-sky-500 hover:border-b py-1 px-2'>
          <Link href='/#works'>Works</Link>
        </li>
        {/* <li className='cursor-pointer'>
          <Link href='/about'>About</Link>
        </li>
        <li className='cursor-pointer'>
          <Link href='/blogs'>Blogs</Link>
        </li> */}
        <li className='cursor-pointer hover:border-b-sky-500 hover:border-b py-1 px-2'>
          <Link href='/#certificates'>Certificates</Link>
        </li>
        <li className='cursor-pointer hover:border-b-sky-500 hover:border-b py-1 px-2'>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
      <h1 className='text-sm text-center'>
        Copyright {new Date().getFullYear()} | Kent John Jordan
      </h1>
    </div>
  );
};

export default Footer;
