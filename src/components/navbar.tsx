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
        className='bg-black/50 backdrop-blur-lg md:hidden w-full h-full z-50 fixed p-8 select-none'>
        <div
          onClick={toggleMobileNavMenu}
          className='flex items-center cursor-pointer mb-12 justify-end'>
          <IoClose color='white' size={24} />
          <h1 className='font-bold'>CLOSE</h1>
        </div>
        <div className='flex justify-center flex-col gap-2 text-base'>
          <Link
            href='/'
            onClick={toggleMobileNavMenu}
            className={`text-2xl cursor-pointer p-4 hover:bg-white/10 rounded-xl ${
              window.location.hash === "" && currentPage?.toUpperCase() === ""
                ? "bg-white/30 rounded-xl font-bold"
                : "border-0"
            }`}>
            Home
          </Link>
          <Link
            href='/#techstack'
            onClick={toggleMobileNavMenu}
            className={`text-2xl cursor-pointer p-4 hover:bg-white/10 rounded-xl ${
              window.location.hash === "#techstack"
                ? "bg-white/30 rounded-xl font-bold"
                : "border-0"
            }`}>
            Techstack
          </Link>
          <Link
            href='/#works'
            onClick={toggleMobileNavMenu}
            className={`text-2xl cursor-pointer p-4 hover:bg-white/10 rounded-xl ${
              window.location.hash === "#works"
                ? "bg-white/30 rounded-xl font-bold"
                : "border-0"
            }`}>
            Works
          </Link>
          <Link
            href='/#certificates'
            onClick={toggleMobileNavMenu}
            className={`text-2xl cursor-pointer p-4 hover:bg-white/10 rounded-xl ${
              window.location.hash === "#certificates"
                ? "bg-white/30 rounded-xl font-bold"
                : "border-0"
            }`}>
            Certificates
          </Link>
          <Link
            href='/#about-me'
            onClick={toggleMobileNavMenu}
            className={`text-2xl cursor-pointer p-4 hover:bg-white/10 rounded-xl ${
              window.location.hash === "#about-me"
                ? "bg-white/30 rounded-xl font-bold"
                : "border-0"
            }`}>
            About Me
          </Link>
          <Link
            href='/contact'
            onClick={toggleMobileNavMenu}
            className={`text-2xl cursor-pointer p-4 hover:bg-white/10 rounded-xl ${
              currentPage?.toUpperCase() === "CONTACT"
                ? "bg-white/30 rounded-xl font-bold"
                : "border-0"
            }`}>
            Contact
          </Link>
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
        className={`${roboto.className} fixed bg-black/80 backdrop-blur hidden lg:flex justify-between max-w-[1400px] w-full z-50 mx-8 text-lg text-stone-300 px-8 pt-8 pb-4`}>
        <div className='flex items-center text-base gap-4'>
          <BsDownload size={20} />
          <Link
            href='/contact'
            className={`${roboto.className} cursor-pointer text-sm`}>
            Resume/CV
          </Link>
        </div>
        <ul className='flex gap-4 text-base'>
          <Link
            className='cursor-pointer hover:border-b-sky-500 hover:border-b px-2 py-1 hover:text-white text-sm'
            href='/'>
            Home
          </Link>
          <Link
            className='cursor-pointer hover:border-b-sky-500 hover:border-b px-2 py-1 hover:text-white text-sm'
            href='/#techstack'>
            Techstack
          </Link>
          <Link
            className='cursor-pointer hover:border-b-sky-500 hover:border-b px-2 py-1 hover:text-white text-sm'
            href='/#works'>
            Works
          </Link>
          {/* <Link href='/blogs'>Blogs</Link> */}
          <Link
            className='cursor-pointer hover:border-b-sky-500 hover:border-b px-2 py-1 hover:text-white text-sm'
            href='/#certificates'>
            Certificates
          </Link>
          <Link
            className='cursor-pointer hover:border-b-sky-500 hover:border-b px-2 py-1 hover:text-white text-sm'
            href='/#about-me'>
            About Me
          </Link>
        </ul>
        <Link
          className='cursor-pointer hover:border-white hover:border px-3 text-center items-center flex justify-center py-1 hover:text-white hover:bg-black text-black text-sm bg-white rounded-full'
          href='/contact'>
          Contact me
        </Link>
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
