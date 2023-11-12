import {
  ReactOriginalWordmark,
  TypescriptOriginal,
  ExpressOriginal,
  PostgresqlOriginal,
  TailwindcssPlain,
  PythonOriginal,
  FastapiOriginalWordmark,
  DockerOriginal,
  UbuntuPlainWordmark,
  NginxOriginal,
  NextjsOriginalWordmark,
  AmazonwebservicesPlainWordmark,
} from "devicons-react";

function HomeTechnologies() {
  return (
    <div className='w-full bg-stone-50 my-80'>
      <div className='flex gap-6 justify-center items-center p-10 m-4 flex-wrap'>
        <TypescriptOriginal size={64} />
        <ReactOriginalWordmark size={64} />
        <NextjsOriginalWordmark size={80} />
        <TailwindcssPlain size={64} />
        <ExpressOriginal size={64} />
        <PythonOriginal size={64} />
        <FastapiOriginalWordmark size={120} />
        <PostgresqlOriginal size={64} />
        <UbuntuPlainWordmark size={64} />
        <DockerOriginal size={64} />
        <NginxOriginal size={64} />
        <AmazonwebservicesPlainWordmark size={64} />
      </div>
    </div>
  );
}

export default HomeTechnologies;
