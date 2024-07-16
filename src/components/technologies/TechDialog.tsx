import { Roboto_Condensed } from "next/font/google";
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
} from "devicons-react";
import { Dispatch, SetStateAction } from "react";

const roboto_condensed = Roboto_Condensed({
  weight: "400",
  subsets: ["latin"],
});

interface TechDialogProps {
  field: "WEB" | "ML";
  setActiveDialog: Dispatch<SetStateAction<"ML" | "WEB" | undefined>>;
}

const TechDialog = ({ field, setActiveDialog }: TechDialogProps) => {
  return (
    <div className='bg-black/30 backdrop-blur-xl absolute w-full h-full z-10 flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <h1
          className={`${roboto_condensed.className} text-white font-bold text-5xl text-center px-2`}>
          {field === "WEB"
            ? "Web Apps and Mobile Apps"
            : "Machine Learning and Artificial Intelligence"}
        </h1>
        <p className='text-stone-300 max-w-[64ch] text-center mt-4 px-2'>
          {field === "WEB"
            ? "Below are the technologies I've been using in building fullstack web apps and mobile apps in personal projects and freelancing. "
            : "Below are the technologies that I’ve been using in the field of ML/AI"}
        </p>
        <div className='flex flex-col gap-4 mt-16'>
          {field === "WEB" && (
            <div className='flex gap-6 flex-wrap max-w-[600px] justify-center items-center'>
              <TechItem Icon={Html5Original} size={50} title='HTML' />
              <TechItem Icon={Css3Original} size={50} title='CSS' />
              <TechItem
                Icon={JavascriptOriginal}
                size={50}
                title='TypeScript'
              />
              <TechItem
                Icon={TypescriptOriginal}
                size={50}
                title='TypeScript'
              />
              <TechItem Icon={ReactOriginal} size={50} title='React' />
              <TechItem
                Icon={TailwindcssOriginal}
                size={50}
                title='TailwindCSS'
              />
              <TechItem Icon={PostgresqlOriginal} size={50} title='HTML' />
              <TechItem Icon={NestjsOriginal} size={50} title='NestJS' />
              <TechItem Icon={DockerOriginal} size={50} title='Docker' />
              <TechItem Icon={GitOriginal} size={50} title='Git' />
              <TechItem Icon={FastapiOriginal} size={50} title='FastAPI' />
              <TechItem Icon={NginxOriginal} size={50} title='NGINX' />
            </div>
          )}
          {field === "ML" && (
            <div className='flex gap-6 flex-wrap max-w-[600px] justify-center items-center'>
              <TechItem Icon={PythonOriginal} size={50} title='Python' />
              <TechItem Icon={PytorchOriginal} size={50} title='PyTorch' />
              <TechItem
                Icon={TensorflowOriginal}
                size={50}
                title='Tensorflow'
              />
              <TechItem
                Icon={ScikitlearnOriginal}
                size={50}
                title='Scikit Learn'
              />
              <TechItem Icon={PandasOriginal} size={50} title='Pandas' />
              <TechItem Icon={NumpyOriginal} size={50} title='Numpy' />
              <TechItem Icon={JupyterOriginal} size={50} title='Jupyter' />
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
