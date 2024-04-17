"use client";
import {
  ReactOriginalWordmark,
  TypescriptOriginal,
  PostgresqlOriginal,
  TailwindcssOriginal,
  PythonOriginal,
  DockerOriginal,
  UbuntuPlainWordmark,
  NginxOriginal,
  NextjsOriginalWordmark,
  AmazonwebservicesPlainWordmark,
  TensorflowOriginal,
  PandasOriginal,
  NumpyOriginal,
  ScikitlearnOriginal,
  NestjsOriginal,
  JupyterOriginalWordmark,
} from "devicons-react";
import { LinearGradient } from "react-text-gradients";

import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

function HomeTechnologies() {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center rounded text-black p-4 my-40'>
      {/* Header */}
      <div className='flex justify-center items-center flex-col mb-16'>
        <h1 className={`${anton.className} text-6xl my-8 text-center`}>
          <LinearGradient
            gradient={["to left", "#0ED2F7, #B2FEFA"]}
            fallbackColor='#6DD5FA'>
            Techstack
          </LinearGradient>
        </h1>
        <h1 className='text-stone-200 text-center'>
          The technologies that I have been working with
        </h1>
      </div>
      <div className='bg-white rounded-md '>
        {/* Web */}
        <div className='flex flex-col items-center p-2 mt-8 mb-12'>
          <h1 className='text-lg mb-4 text-center font-bold'>
            Fullstack web and app
          </h1>
          <div className='flex items-center justify-center gap-8 max-w-[60%] my-4 flex-wrap'>
            <TypescriptOriginal
              size={56}
              fill='currentColor'
              className='text-white'
            />
            <ReactOriginalWordmark
              size={56}
              fill='currentColor'
              className='text-white'
            />
            <DockerOriginal
              size={56}
              fill='currentColor'
              className='text-white'
            />

            <NestjsOriginal
              size={56}
              fill='currentColor'
              className='text-white'
            />
            <NextjsOriginalWordmark size={80} />
            <TailwindcssOriginal
              size={56}
              fill='currentColor'
              className='text-white'
            />
            <UbuntuPlainWordmark
              size={96}
              fill='currentColor'
              className='text-white'
            />
            {/* <ExpressOriginal size={40}  fill='currentColor' className='text-white' /> */}
            {/* <FastapiOriginalWordmark size={120} fill='currentColor' className='text-white' /> */}
            <PostgresqlOriginal
              size={56}
              fill='currentColor'
              className='text-white'
            />
            <NginxOriginal
              size={80}
              fill='currentColor'
              className='text-white'
            />
            <AmazonwebservicesPlainWordmark
              size={56}
              fill='currentColor'
              className='text-white'
            />
          </div>
        </div>
        {/* Machine Learing */}
        <div className='flex flex-col items-center p-2 mt-8 mb-12'>
          <h1 className='text-lg mb-8 text-center font-bold'>
            Machine Learning
          </h1>
          <div className='flex items-center my-4 justify-center gap-8 max-w-[100%] flex-wrap'>
            <PythonOriginal
              size={56}
              fill='currentColor'
              className='text-white'
            />
            <JupyterOriginalWordmark
              size={56}
              fill='currentColor'
              className='text-white'
            />
            <TensorflowOriginal
              size={56}
              fill='currentColor'
              className='text-white'
            />
            <PandasOriginal
              size={56}
              fill='currentColor'
              className='text-white'
            />
            <NumpyOriginal
              size={56}
              fill='currentColor'
              className='text-white'
            />
            <ScikitlearnOriginal
              size={64}
              fill='currentColor'
              className='text-white'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTechnologies;
