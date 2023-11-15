import { Roboto } from "next/font/google";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";

const roboto = Roboto({ weight: ["500", "700"], subsets: ["latin"] });

function Navbar() {
  return (
    <div
      className={`${roboto.className}  bg-gradient-to-b from-black via-black/50 to-transparent hidden md:flex justify-between max-w-[1280px] w-full absolute z-50 mx-8 text-lg text-stone-300 p-8`}>
      <div className='flex items-center text-base gap-4'>
        <BsDownload size={20} />
        <h1 className={`${roboto.className} cursor-pointer font-extrabold`}>
          Get Resume/CV
        </h1>
      </div>
      <ul className='flex gap-8 text-base'>
        <li className='cursor-pointer'>
          <Link href='/'>Home</Link>
        </li>
        <li className='cursor-pointer'>
          <Link href='/about'>About</Link>
        </li>
        <li className='cursor-pointer'>
          <Link href='/works'>Works</Link>
        </li>
        <li className='cursor-pointer'>
          <Link href='/blogs'>Blogs</Link>
        </li>
        <li className='cursor-pointer'>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
