import React from "react";

const Footer = () => {
  return (
    <div className='  w-full flex flex-col items-center p-8'>
      <ul className='flex gap-8 justify-center my-16'>
        <li className='cursor-pointer'>About me</li>
        <li className='cursor-pointer'>Works</li>
        <li className='cursor-pointer'>Blogs</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
      <h1 className='text-sm'>Copyright 2023 | Kent John Jordan</h1>
    </div>
  );
};

export default Footer;
