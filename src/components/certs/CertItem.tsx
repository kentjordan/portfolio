import type { CertField } from "@/types/certs";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

interface CertItemProps {
  title: string;
  field: CertField;
  Thumbnail: () => JSX.Element;
  Background: () => JSX.Element;
}

/** Darkens and blurs one image of the stack while the card is hovered. */
const HoverOverlay = () => (
  <div className='absolute inset-0 flex items-center justify-center rounded-md group-hover:bg-black/40 group-hover:backdrop-blur-sm'>
    <span className='hidden text-sm font-semibold group-hover:block'>
      View more
    </span>
  </div>
);

/**
 * Two certificate images stacked with a 24px offset, filling the width of its
 * grid column. pt-6/pr-6 reserve the space the top image is shifted into.
 */
const CertItem = ({ title, Background, Thumbnail, field }: CertItemProps) => {
  return (
    <div className='flex flex-col items-center'>
      <div
        onClick={() => {
          window.location.href = `/certs/${field}`;
        }}
        className='group relative w-full cursor-pointer pr-6 pt-6'>
        {/* Background: the lower-left image */}
        <div className='relative'>
          <Background />
          <HoverOverlay />
        </div>
        {/* Thumbnail: the upper-right image, drawn on top */}
        <div className='absolute left-6 right-0 top-0'>
          <Thumbnail />
          <HoverOverlay />
        </div>
      </div>
      <h3
        className={`${roboto.className} mt-4 max-w-[32ch] cursor-default text-center text-sm text-neutral-300`}>
        {title}
      </h3>
    </div>
  );
};

export default CertItem;
