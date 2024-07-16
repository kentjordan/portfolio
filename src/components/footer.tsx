import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=' w-full flex flex-col items-center pb-8 border-t border-neutral-800 mt-32'>
      <ul className='flex gap-8 justify-center my-16 flex-wrap'>
        <li className='cursor-pointer hover:border-b-sky-500 hover:border-b py-1 px-2'>
          <Link className='text-sm' href='/'>
            Home
          </Link>
        </li>
        <li className='cursor-pointer hover:border-b-sky-500 hover:border-b py-1 px-2'>
          <Link className='text-sm' href='/#techstack'>
            Techstack
          </Link>
        </li>
        <li className='cursor-pointer hover:border-b-sky-500 hover:border-b py-1 px-2'>
          <Link className='text-sm' href='/#works'>
            Works
          </Link>
        </li>
        {/* <li className='cursor-pointer'>
          <Link className="text-sm" href='/blogs'>Blogs</Link>
        </li> */}
        <li className='cursor-pointer hover:border-b-sky-500 hover:border-b py-1 px-2'>
          <Link className='text-sm' href='/#certificates'>
            Certificates
          </Link>
        </li>
        <li className='cursor-pointer hover:border-b-sky-500 hover:border-b px-2 py-1 hover:text-white'>
          <Link className='text-sm' href='/#about-me'>
            About Me
          </Link>
        </li>
        <li className='cursor-pointer hover:border-b-sky-500 hover:border-b py-1 px-2'>
          <Link className='text-sm' href='/contact'>
            Contact
          </Link>
        </li>
      </ul>
      <h1 className='text-sm text-center'>
        Copyright {new Date().getFullYear()} | Kent John Jordan
      </h1>
    </div>
  );
};

export default Footer;
