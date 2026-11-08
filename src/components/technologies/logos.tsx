import seaborn from "@/assets/tech/seaborn-original.svg";
import Image from "next/image";

// Logos devicons-react doesn't ship, with the same `size` prop as its icon
// components so TechItem can render them the same way.

/** Seaborn's logo from devicon 2.18.0 (MIT): https://devicon.dev */
export const SeabornOriginal = ({ size }: { size?: number | string }) => (
  <Image
    src={seaborn}
    alt=''
    width={Number(size)}
    height={Number(size)}
    unoptimized
  />
);
