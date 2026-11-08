import { pagePaddingX } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const linkClass =
  "border-b border-transparent px-1 py-0.5 transition-colors hover:border-sky-500 hover:text-white";

const Footer = () => {
  return (
    <footer
      className={`mt-16 w-full select-none border-t border-neutral-900 bg-neutral-950 ${pagePaddingX}`}>
      <div className='mx-auto flex w-full max-w-6xl flex-col items-center gap-6 py-10'>
        <nav className='flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-300'>
          <Link className={linkClass} href='/'>
            Home
          </Link>
          <Link className={linkClass} href='/#techstack'>
            Techstack
          </Link>
          <Link className={linkClass} href='/#works'>
            Works
          </Link>
          {/* <Link className={linkClass} href='/blogs'>Blogs</Link> */}
          <Link className={linkClass} href='/#certificates'>
            Certificates
          </Link>
          <Link className={linkClass} href='/#about-me'>
            About Me
          </Link>
          <Link className={linkClass} href='/contact'>
            Contact
          </Link>
        </nav>
        <p className='text-xs text-neutral-500'>
          Copyright {new Date().getFullYear()} | Kent John Jordan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
