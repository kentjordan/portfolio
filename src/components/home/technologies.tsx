"use client";
import {
  ReactOriginalWordmark,
  TypescriptOriginal,
  PostgresqlOriginal,
  TailwindcssOriginal,
  PythonOriginal,
  DockerOriginal,
  UbuntuPlainWordmark,
  UbuntuOriginal,
  NginxOriginal,
  NextjsOriginalWordmark,
  AmazonwebservicesPlainWordmark,
  TensorflowOriginal,
  PandasOriginal,
  NumpyOriginal,
  ScikitlearnOriginal,
  NestjsOriginal,
  JupyterOriginalWordmark,
  PytorchOriginal,
  Html5Plain,
  Css3Plain,
  JavascriptOriginal,
  GitOriginal,
  ExpressOriginalWordmark,
  FastapiOriginalWordmark,
  ExpressOriginal,
  FastapiOriginal,
  JupyterOriginal,
  ReactOriginal,
} from "devicons-react";
import { LinearGradient } from "react-text-gradients";

import { Anton } from "next/font/google";
import TechItem from "../technologies/TechItem";
import { CircleChevronRight } from "lucide-react";

const anton = Anton({ weight: "400", subsets: ["latin"] });

function HomeTechnologies() {
  return (
    <div
      id='techstack'
      className='w-full min-h-screen flex flex-col justify-center items-center rounded text-black p-4 pt-28 my-40'>
      {/* Header */}
      <div className='flex justify-center items-center flex-col mb-16'>
        <h1 className={`${anton.className} text-6xl my-8 text-center`}>
          <LinearGradient
            gradient={["to left", "#0ED2F7, #B2FEFA"]}
            fallbackColor='#6DD5FA'>
            Tech Stack
          </LinearGradient>
        </h1>
        <h1 className='text-stone-200 text-center'>
          Technologies that I have been working with
        </h1>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-6'>
        {/* Web */}
        <div className='flex flex-col justify-center items-center rounded-xl border-stone-800 border bg-neutral-950 p-6 sm:p-8 hover:border-sky-500'>
          <h1
            className={`${anton.className} text-white text-2xl mb-6 font-black`}>
            WEB / APP
          </h1>
          <div className='flex flex-col relative'>
            <div className='bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-transparent w-full h-full absolute flex justify-center items-end'>
              <div className='flex items-center justify-center gap-3 cursor-pointer mb-6'>
                <p className='text-white text-center'>See more</p>
                <CircleChevronRight className='text-white' />
              </div>
            </div>
            <div className='flex'>
              <TechItem
                Icon={TypescriptOriginal}
                size={50}
                title='TypeScript'
              />
              <TechItem Icon={ReactOriginal} size={50} title='React' />
              <TechItem Icon={NestjsOriginal} size={50} title='NestJS' />
            </div>
            <div className='flex'>
              <TechItem Icon={DockerOriginal} size={50} title='Docker' />
              <TechItem
                Icon={PostgresqlOriginal}
                size={50}
                title='PostgreSQL'
              />
              <TechItem Icon={NginxOriginal} size={50} title='NGINX' />
            </div>
          </div>
        </div>
        {/* Machine Learing */}
        <div className='flex flex-col justify-center items-center rounded-xl border-stone-800 border bg-neutral-950 p-6 sm:p-8 hover:border-sky-500'>
          <h1
            className={`${anton.className} text-white text-2xl mb-6 font-black`}>
            ML / AI
          </h1>
          <div className='flex flex-col relative'>
            <div className='bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-transparent w-full h-full absolute flex justify-center items-end'>
              <div className='flex items-center justify-center gap-3 cursor-pointer mb-6'>
                <p className='text-white text-center'>See more</p>
                <CircleChevronRight className='text-white' />
              </div>
            </div>
            <div className='flex'>
              <TechItem Icon={PythonOriginal} size={50} title='Python' />
              <TechItem Icon={PytorchOriginal} size={50} title='PytTorch' />
              <TechItem
                Icon={TensorflowOriginal}
                size={50}
                title='Tensorflow'
              />
            </div>
            <div className='flex'>
              <TechItem Icon={DockerOriginal} size={50} title='Docker' />
              <TechItem Icon={PandasOriginal} size={50} title='Pandas' />
              <TechItem Icon={NumpyOriginal} size={50} title='Numpy' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTechnologies;
