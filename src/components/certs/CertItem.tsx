import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

interface CertItemProps {
  title: string;
  field: "others" | "ml";
  Thumbnail: () => JSX.Element;
  Background: () => JSX.Element;
}

const CertItem = ({ title, Background, Thumbnail, field }: CertItemProps) => {
  return (
    <div className='flex flex-col items-center'>
      <div
        onClick={() => {
          window.location.href = `/certs/${field}`;
        }}
        className='flex flex-col justify-center rounded-md relative group'>
        {/* Background */}
        <div className='-ml-6'>
          <div className='sm:w-96 sm:h-72 h-full w-64 group-hover:bg-black/40 group-hover:backdrop-blur-sm rounded-md absolute cursor-pointer flex justify-center items-center'>
            <h1 className='cursor-pointer hidden group-hover:block font-bold text-xl'>
              View more
            </h1>
          </div>
          <Background />
        </div>
        {/* Thumbnail */}
        <div className='absolute -top-6 -right-6'>
          <div className='sm:w-96 sm:h-72 h-full w-64 group-hover:bg-black/40 group-hover:backdrop-blur-sm rounded-md absolute cursor-pointer flex justify-center items-center'>
            <h1 className='cursor-pointer hidden group-hover:block font-bold text-xl'>
              View more
            </h1>
          </div>
          <Thumbnail />
        </div>
      </div>
      <h1 className={`${roboto.className} mt-4 cursor-default text-center`}>
        {title}
      </h1>
    </div>
  );
};

export default CertItem;
