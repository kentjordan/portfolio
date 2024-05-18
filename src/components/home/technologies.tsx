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
      <div>
        {/* Web */}
        <div className='flex flex-col justify-center items-center py-8 rounded mb-8 border-stone-800 border bg-stone-950'>
          <h1 className='text-lg mb-6 text-center font-bold text-white'>
            Full Stack Web
          </h1>
          <div className='flex justify-center gap-x-6 gap-y-8 max-w-[60%] my-4 flex-wrap'>
            <TechItem Icon={Html5Plain} size={56} title='HTML5' />
            <TechItem Icon={Css3Plain} size={56} title='CSS3' />
            <TechItem Icon={JavascriptOriginal} size={56} title='JavaScript' />
            <TechItem Icon={TypescriptOriginal} size={56} title='TypeScript' />
            <TechItem Icon={GitOriginal} size={56} title='Git' />
            <TechItem Icon={ReactOriginal} size={56} title='React' />
            <TechItem Icon={DockerOriginal} size={56} title='Docker' />
            <TechItem Icon={NestjsOriginal} size={56} title='NestJS' />
            <TechItem Icon={NextjsOriginalWordmark} size={56} title='NEXT.js' />
            <TechItem
              Icon={TailwindcssOriginal}
              size={56}
              title='TailwindCSS'
            />
            <TechItem Icon={UbuntuOriginal} size={56} title='Ubuntu' />
            <TechItem Icon={PostgresqlOriginal} size={56} title='PostgreSQL' />
            <TechItem Icon={NginxOriginal} size={56} title='NGINX' />
            <TechItem
              Icon={AmazonwebservicesPlainWordmark}
              size={56}
              title='AWS'
              fill='white'
            />
            <TechItem Icon={ExpressOriginal} size={56} title='Express.js' />
            <TechItem Icon={FastapiOriginal} size={56} title='FastAPI' />
          </div>
        </div>
        {/* Machine Learing */}
        <div className='flex flex-col justify-center items-center py-8 rounded mb-8 border-stone-800 border bg-stone-950'>
          <h1 className='text-lg mb-6 text-center font-bold text-white'>
            Machine Learning
          </h1>
          <div className='flex justify-center gap-x-6 gap-y-8 max-w-[60%] my-4 flex-wrap text-white'>
            <TechItem Icon={PythonOriginal} size={56} title='Python' />
            <TechItem Icon={JupyterOriginal} size={56} title='Jupyter' />
            <TechItem Icon={PytorchOriginal} size={56} title='PyTorch' />
            <TechItem Icon={TensorflowOriginal} size={56} title='Tensorflow' />
            <TechItem Icon={PandasOriginal} size={56} title='Pandas' />
            <TechItem Icon={NumpyOriginal} size={56} title='NumPy' />
            <TechItem
              Icon={ScikitlearnOriginal}
              size={56}
              title='Scikit Learn'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTechnologies;
