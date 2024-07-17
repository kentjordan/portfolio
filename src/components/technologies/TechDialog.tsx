import { Anton, Roboto_Condensed } from "next/font/google";
import TechItem from "./TechItem";
import {
  TypescriptOriginal,
  ReactOriginal,
  NestjsOriginal,
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  TailwindcssOriginal,
  PostgresqlOriginal,
  DockerOriginal,
  GitOriginal,
  FastapiOriginal,
  NginxOriginal,
  PythonOriginal,
  PytorchOriginal,
  TensorflowOriginal,
  ScikitlearnOriginal,
  PandasOriginal,
  NumpyOriginal,
  JupyterOriginal,
  NextjsOriginalWordmark,
} from "devicons-react";
import { Dispatch, SetStateAction } from "react";

const anton = Anton({ weight: "400", subsets: ["latin"] });

interface TechDialogProps {
  field: "WEB" | "ML";
  setActiveDialog: Dispatch<SetStateAction<"ML" | "WEB" | undefined>>;
}

const TechDialog = ({ field, setActiveDialog }: TechDialogProps) => {
  return (
    <div className='bg-black/10 py-16 px-4 backdrop-blur-xl absolute w-full min-h-full z-10 flex justify-center items-center'>
      <div className='flex flex-col justify-center  items-center'>
        <h1
          className={`${anton.className} text-white font-bold text-5xl text-center px-2`}>
          {field === "WEB" ? "WEB & MOBILE APPS" : "ML / AI"}
        </h1>
        <p className='text-stone-300 max-w-[64ch] text-center mt-4 px-2'>
          {field === "WEB"
            ? "Below are the technologies I've been using in building fullstack web apps and mobile apps in personal projects and freelancing. "
            : "Below are the technologies that I’ve been using in the field of Machine Learning and Artificial Intelligence (ML/AI)"}
        </p>
        <div className='flex flex-col gap-4 mt-16'>
          {field === "WEB" && (
            <div className='flex gap-6 flex-wrap max-w-[600px] justify-center items-center'>
              <TechItem Icon={Html5Original} size={40} title='HTML' />
              <TechItem Icon={Css3Original} size={40} title='CSS' />
              <TechItem
                Icon={JavascriptOriginal}
                size={40}
                title='JavaScript'
              />
              <TechItem
                Icon={TypescriptOriginal}
                size={40}
                title='TypeScript'
              />
              <TechItem
                Icon={NextjsOriginalWordmark}
                size={40}
                title='NEXT.js'
              />
              <TechItem Icon={ReactOriginal} size={40} title='React.js' />
              <TechItem
                Icon={TailwindcssOriginal}
                size={40}
                title='TailwindCSS'
              />
              <TechItem
                Icon={PostgresqlOriginal}
                size={40}
                title='PostgreSQL'
              />
              <TechItem Icon={NestjsOriginal} size={40} title='NestJS' />
              <TechItem Icon={DockerOriginal} size={40} title='Docker' />
              <TechItem Icon={GitOriginal} size={40} title='Git' />
              <TechItem Icon={FastapiOriginal} size={40} title='FastAPI' />
              <TechItem Icon={NginxOriginal} size={40} title='NGINX' />
            </div>
          )}
          {field === "ML" && (
            <div className='flex gap-6 flex-wrap max-w-[600px] justify-center items-center'>
              <TechItem Icon={PythonOriginal} size={40} title='Python' />
              <TechItem Icon={PytorchOriginal} size={40} title='PyTorch' />
              <TechItem
                Icon={TensorflowOriginal}
                size={40}
                title='Tensorflow'
              />
              <TechItem
                Icon={ScikitlearnOriginal}
                size={40}
                title='Scikit Learn'
              />
              <TechItem Icon={PandasOriginal} size={40} title='Pandas' />
              <TechItem Icon={NumpyOriginal} size={40} title='Numpy' />
              <TechItem Icon={JupyterOriginal} size={40} title='Jupyter' />
            </div>
          )}
        </div>
        <div className='mt-16 cursor-pointer'>
          <button
            onClick={() => setActiveDialog(undefined)}
            className='text-white text-xl font-bold'>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechDialog;
