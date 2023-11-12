import { Roboto } from "next/font/google";
import { BsDownload } from "react-icons/bs";

const roboto = Roboto({ weight: ["500", "700"], subsets: ["latin"] });

function Navbar() {
  return (
    <div
      className={`${roboto.className} flex justify-between max-w-[1280px] w-full absolute z-50 m-8 text-lg text-stone-300`}>
      <div className='flex items-center gap-4'>
        <BsDownload size={20} />
        <h1 className={`${roboto.className} cursor-pointer font-extrabold`}>
          Get Resume/CV
        </h1>
      </div>
      <ul className='flex gap-8'>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Works</li>
        <li className='cursor-pointer'>Blogs</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
