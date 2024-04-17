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
        className='bg-black md:hidden w-full h-full z-50 fixed flex flex-col justify-center items-center p-8'>
        <ul className='flex justify-center text-center flex-col gap-12 text-base'>
          <li
            className={`cursor-pointer ${
              currentPage?.toUpperCase() === "" ? "border-b" : "border-0"
            }`}>
            <Link href='/' onClick={toggleMobileNavMenu}>
              Home
            </Link>
          </li>
          <li
            className={`cursor-pointer ${
              currentPage?.toUpperCase() === "ABOUT" ? "border-b" : "border-0"
            }`}>
            <Link href='/about' onClick={toggleMobileNavMenu}>
              About
            </Link>
          </li>
          <li
            className={`cursor-pointer ${
              currentPage?.toUpperCase() === "WORKS" ? "border-b" : "border-0"
            }`}>
            <Link href='/works' onClick={toggleMobileNavMenu}>
              Works
            </Link>
          </li>
          <li
            className={`cursor-pointer ${
              currentPage?.toUpperCase() === "BLOGS" ? "border-b" : "border-0"
            }`}>
            <Link href='/blogs' onClick={toggleMobileNavMenu}>
              Blogs
            </Link>
          </li>
          <li
            className={`cursor-pointer ${
              currentPage?.toUpperCase() === "CONTACT" ? "border-b" : "border-0"
            }`}>
            <Link href='/contact' onClick={toggleMobileNavMenu}>
              Contact
            </Link>
          </li>
          <li className='flex justify-center'>
            <IoClose
              className='text-white  cursor-pointer'
              size={32}
              onClick={toggleMobileNavMenu}
            />
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
        className={`${roboto.className} bg-gradient-to-b from-black via-black/50 to-transparent hidden md:flex justify-between max-w-[1280px] w-full absolute z-50 mx-8 text-lg text-stone-300 p-8`}>
        <div className='flex items-center text-base gap-4'>
          <BsDownload size={20} />
          <Link
            href='/contact'
            className={`${roboto.className} cursor-pointer font-extrabold`}>
            Request Resume
          </Link>
        </div>
        <ul className='flex gap-8 text-base'>
          <li className='cursor-pointer'>
            <Link href='/'>Home</Link>
          </li>
          <li className='cursor-pointer'>
            <Link href='/#works'>Works</Link>
          </li>
          {/* <li className='cursor-pointer'>
            <Link href='/blogs'>Blogs</Link>
          </li>
          <li className='cursor-pointer'>
            <Link href='/about'>About</Link>
          </li> */}
          <li className='cursor-pointer'>
            <Link href='/#certificates'>Certificates</Link>
          </li>
          <li className='cursor-pointer'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
      <div
        className={`${roboto.className} flex justify-end md:hidden absolute max-w-[1280px] w-full z-50 text-lg text-stone-300`}>
        <HiMenuAlt4
          className='cursor-pointer m-8'
          size={32}
          onClick={toggleMobileNavMenu}
        />
      </div>
    </>
  );
}

export default Navbar;
