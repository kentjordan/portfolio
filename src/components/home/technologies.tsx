"use client";
import {
  TypescriptOriginal,
  PostgresqlOriginal,
  PythonOriginal,
  DockerOriginal,
  NginxOriginal,
  TensorflowOriginal,
  PandasOriginal,
  NumpyOriginal,
  NestjsOriginal,
  PytorchOriginal,
  ReactOriginal,
} from "devicons-react";
import { LinearGradient } from "react-text-gradients";

import { Anton } from "next/font/google";
import TechItem from "../technologies/TechItem";
import { CircleChevronRight } from "lucide-react";
import TechDialog from "../technologies/TechDialog";
import { useState } from "react";

const anton = Anton({ weight: "400", subsets: ["latin"] });

function HomeTechnologies() {
  const [activeDialog, setActiveDialog] = useState<"WEB" | "ML" | undefined>(
    undefined
  );

  return (
    <div
      id='techstack'
      className='w-full min-h-screen flex flex-col justify-center items-center rounded text-black py-32 px-4'>
      {activeDialog && (
        <TechDialog field={activeDialog} setActiveDialog={setActiveDialog} />
      )}
      {/* Header */}
      <div className='flex justify-center items-center flex-col mb-24'>
        <h1 className={`${anton.className} text-6xl mb-8 text-center`}>
          <LinearGradient
            gradient={["to left", "#0ED2F7, #B2FEFA"]}
            fallbackColor='#6DD5FA'>
            Tech Stack
          </LinearGradient>
        </h1>
        <h1 className='text-stone-200 text-center max-w-[40ch]'>
          Technologies that I have been working with, in personal projects and
          freelancing.
        </h1>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-16'>
        {/* Web */}
        <div
          onClick={() => {
            setActiveDialog("WEB");
            window.location.href = "/#techstack";
          }}
          className='flex flex-col justify-center items-center rounded-lg border-stone-800 border bg-neutral-950 p-6 sm:p-8 hover:border-sky-500 cursor-pointer'>
          <h1
            className={`${anton.className} text-white text-2xl mb-6 font-black`}>
            WEB / MOBILE
          </h1>
          <div className='flex flex-col relative'>
            <div className='bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-transparent w-full h-full absolute flex justify-center items-end'>
              <div className='flex items-center justify-center gap-3 cursor-pointer mb-6'>
                <p className='text-white text-center cursor-pointer'>
                  See more
                </p>
                <CircleChevronRight className='text-white' />
              </div>
            </div>
            <div className='flex'>
              <TechItem Icon={TypescriptOriginal} size={50} />
              <TechItem Icon={ReactOriginal} size={50} />
              <TechItem Icon={NestjsOriginal} size={50} />
            </div>
            <div className='flex'>
              <TechItem Icon={DockerOriginal} size={50} />
              <TechItem Icon={PostgresqlOriginal} size={50} />
              <TechItem Icon={NginxOriginal} size={50} />
            </div>
          </div>
        </div>
        {/* Machine Learing */}
        <div
          onClick={() => {
            setActiveDialog("ML");
            window.location.href = "/#techstack";
          }}
          className='flex flex-col justify-center items-center rounded-lg border-stone-800 border bg-neutral-950 p-6 sm:p-8 hover:border-sky-500 cursor-pointer'>
          <h1
            className={`${anton.className} text-white text-2xl mb-6 font-black`}>
            ML / AI
          </h1>
          <div className='flex flex-col relative'>
            <div className='bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-transparent w-full h-full absolute flex justify-center items-end'>
              <div className='flex items-center justify-center gap-3 cursor-pointer mb-6'>
                <p className='text-white text-center cursor-pointer'>
                  See more
                </p>
                <CircleChevronRight className='text-white' />
              </div>
            </div>
            <div className='flex'>
              <TechItem Icon={PythonOriginal} size={50} />
              <TechItem Icon={PytorchOriginal} size={50} />
              <TechItem Icon={TensorflowOriginal} size={50} />
            </div>
            <div className='flex'>
              <TechItem Icon={DockerOriginal} size={50} />
              <TechItem Icon={PandasOriginal} size={50} />
              <TechItem Icon={NumpyOriginal} size={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTechnologies;
