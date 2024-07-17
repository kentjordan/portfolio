"use client";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { useNavbarStore } from "@/zustand/store";
import { motion } from "framer-motion";

const roboto = Roboto({ weight: ["500", "700"], subsets: ["latin"] });

export const MobileNavbarMenu = () => {
  const path = usePathname();
  const currentPage = path.split("/").at(1);
  const toggleMobileNavMenu = useNavbarStore(
    (state: any) => state.toggleMobileNavMenu
  );

  const isMobileNavMenuOpened = useNavbarStore(
    (state: any) => state.isMobileNavMenuOpened
  );

  return (
    isMobileNavMenuOpened && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='bg-black md:hidden w-full h-full z-50 fixed p-6'>
        <div className='flex mb-12 mt-4 items-center'>
          <h1 className='text-4xl mx-3 font-bold'>Menu</h1>
        </div>
        <div className='flex justify-center flex-col gap-4 text-base'>
          <Link
            href='/'
            onClick={toggleMobileNavMenu}
            className={`cursor-pointer p-3 hover:bg-sky-500/30 rounded-md ${
              window.location.hash === "" && currentPage?.toUpperCase() === ""
                ? "bg-sky-500/80 rounded-md text-bold"
                : "border-0"
            }`}>
            Home
          </Link>
          <Link
            href='/#techstack'
            onClick={toggleMobileNavMenu}
            className={`cursor-pointer p-3 hover:bg-sky-500/30 rounded-md ${
              window.location.hash === "#techstack"
                ? "bg-sky-500/80 rounded-md text-bold"
                : "border-0"
            }`}>
            Techstack
          </Link>
          <Link
            href='/#works'
            onClick={toggleMobileNavMenu}
            className={`cursor-pointer p-3 hover:bg-sky-500/30 rounded-md ${
              window.location.hash === "#works"
                ? "bg-sky-500/80 rounded-md text-bold"
                : "border-0"
            }`}>
            Works
          </Link>
          <Link
            href='/#certificates'
            onClick={toggleMobileNavMenu}
            className={`cursor-pointer p-3 hover:bg-sky-500/30 rounded-md ${
              window.location.hash === "#certificates"
                ? "bg-sky-500/80 rounded-md text-bold"
                : "border-0"
            }`}>
            Certificates
          </Link>
          <Link
            href='/#about-me'
            onClick={toggleMobileNavMenu}
            className={`cursor-pointer p-3 hover:bg-sky-500/30 rounded-md ${
              window.location.hash === "#about-me"
                ? "bg-sky-500/80 rounded-md text-bold"
                : "border-0"
            }`}>
            About Me
          </Link>
          <Link
            href='/contact'
            onClick={toggleMobileNavMenu}
            className={`cursor-pointer p-3 hover:bg-sky-500/30 rounded-md ${
              currentPage?.toUpperCase() === "CONTACT"
                ? "bg-sky-500/80 rounded-md text-bold"
                : "border-0"
            }`}>
            Contact
          </Link>
          <div
            onClick={toggleMobileNavMenu}
            className='flex items-center cursor-pointer p-3 mt-4 border-t border-t-stone-800 justify-end'>
            <IoClose color='rgb(239 68 68)' size={24} />
            <h1 className='font-bold text-red-500'>CLOSE</h1>
          </div>
        </div>
      </motion.div>
    )
  );
};

function Navbar() {
  const toggleMobileNavMenu = useNavbarStore(
    (state: any) => state.toggleMobileNavMenu
  );

  return (
    <>
      <div
        className={`${roboto.className} fixed bg-black/80 backdrop-blur hidden lg:flex justify-between max-w-[1400px] w-full z-50 mx-8 text-lg text-stone-300 p-8`}>
        <div className='flex items-center text-base gap-4'>
          <BsDownload size={20} />
          <Link
            href='/contact'
            className={`${roboto.className} cursor-pointer`}>
            Resume/CV
          </Link>
        </div>
        <ul className='flex gap-8 text-base'>
          <li className='cursor-pointer hover:border-b-sky-500 hover:border-b py-1 px-2 hover:text-white'>
            <Link href='/'>Home</Link>
          </li>
          <li className='cursor-pointer hover:border-b-sky-500 hover:border-b px-2 py-1 hover:text-white'>
            <Link href='/#techstack'>Techstack</Link>
          </li>
          <li className='cursor-pointer hover:border-b-sky-500 hover:border-b px-2 py-1 hover:text-white'>
            <Link href='/#works'>Works</Link>
          </li>
          {/* <li className='cursor-pointer hover:border-b-sky-500 hover:border-b px-2 py-1 hover:text-white'>
            <Link href='/blogs'>Blogs</Link>
          </li> */}
          <li className='cursor-pointer hover:border-b-sky-500 hover:border-b px-2 py-1 hover:text-white'>
            <Link href='/#certificates'>Certificates</Link>
          </li>
          <li className='cursor-pointer hover:border-b-sky-500 hover:border-b px-2 py-1 hover:text-white'>
            <Link href='/#about-me'>About Me</Link>
          </li>
          <li className='cursor-pointer hover:border-b-sky-500 hover:border-b px-2 py-1 hover:text-white'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
      <div
        className={`${roboto.className} bg-black/70 backdrop-blur flex justify-end lg:hidden fixed max-w-[1280px] w-full z-50 text-lg text-stone-300`}>
        <HiMenuAlt4
          className='cursor-pointer m-4'
          size={32}
          onClick={toggleMobileNavMenu}
        />
      </div>
    </>
  );
}

export default Navbar;
