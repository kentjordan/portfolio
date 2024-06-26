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
          <h1 className='text-4xl mx-3 font-bold'>Section Menu</h1>
        </div>
        <ul className='flex justify-center flex-col gap-4 text-base'>
          <li
            className={`cursor-pointer p-3 ${
              window.location.hash === "" && currentPage?.toUpperCase() === ""
                ? "border-b border-b-sky-500 text-bold"
                : "border-0"
            }`}>
            <Link href='/' onClick={toggleMobileNavMenu}>
              Home
            </Link>
          </li>
          <li
            className={`cursor-pointer p-3 ${
              window.location.hash === "#techstack"
                ? "border-b border-b-sky-500 text-bold"
                : "border-0"
            }`}>
            <Link href='/#techstack' onClick={toggleMobileNavMenu}>
              Techstack
            </Link>
          </li>
          <li
            className={`cursor-pointer p-3 ${
              window.location.hash === "#works"
                ? "border-b border-b-sky-500 text-bold"
                : "border-0"
            }`}>
            <Link href='/#works' onClick={toggleMobileNavMenu}>
              Works
            </Link>
          </li>
          <li
            className={`cursor-pointer p-3 ${
              window.location.hash === "#certificates"
                ? "border-b border-b-sky-500 text-bold"
                : "border-0"
            }`}>
            <Link href='/#certificates' onClick={toggleMobileNavMenu}>
              Certificates
            </Link>
          </li>
          <li
            className={`cursor-pointer p-3 ${
              currentPage?.toUpperCase() === "CONTACT"
                ? "border-b border-b-sky-500 text-bold"
                : "border-0"
            }`}>
            <Link href='/contact' onClick={toggleMobileNavMenu}>
              Contact
            </Link>
          </li>
          <li
            className='flex cursor-pointer p-3 mt-4 border-t border-t-stone-800 justify-end'
            onClick={toggleMobileNavMenu}>
            <div className='flex items-center'>
              <IoClose color='rgb(239 68 68)' size={24} />
              <h1 className='font-bold text-red-500'>CLOSE</h1>
            </div>
          </li>
        </ul>
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
        className={`${roboto.className} fixed bg-black/80 backdrop-blur hidden md:flex justify-between max-w-[1280px] w-full z-50 mx-8 text-lg text-stone-300 p-8`}>
        <div className='flex items-center text-base gap-4'>
          <BsDownload size={20} />
          <Link
            href='/contact'
            className={`${roboto.className} cursor-pointer font-extrabold`}>
            Get Resume
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
          </li>
          <li className='cursor-pointer hover:border-b-sky-500 hover:border-b px-2 py-1 hover:text-white'>
            <Link href='/about'>About</Link>
          </li> */}
          <li className='cursor-pointer hover:border-b-sky-500 hover:border-b px-2 py-1 hover:text-white'>
            <Link href='/#certificates'>Certificates</Link>
          </li>
          <li className='cursor-pointer hover:border-b-sky-500 hover:border-b px-2 py-1 hover:text-white'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
      <div
        className={`${roboto.className} bg-black/70 backdrop-blur flex justify-end md:hidden fixed max-w-[1280px] w-full z-50 text-lg text-stone-300`}>
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
