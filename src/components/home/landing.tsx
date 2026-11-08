"use client";
import Me from "@/assets/me.png";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsMouse,
  BsTwitter,
} from "react-icons/bs";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/kentaki.dev",
    Icon: BsFacebook,
  },
  { label: "Twitter", href: "https://twitter.com/_kentjordan", Icon: BsTwitter },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kjordannn",
    Icon: BsLinkedin,
  },
  { label: "GitHub", href: "https://github.com/kentjordan", Icon: BsGithub },
];

const HomeLanding = () => {
  // Parallax: the photo drifts down at 40% of the scroll speed, so the intro
  // slides up over it, and the intro fades out over the first 400px of scroll.
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, (y) => y * 0.4);
  const introOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Full screen from lg up: the sidebar is hidden while the hero is on screen
  // (useNavVisible in navbar.tsx), so -ml-60 and the extra 15rem of width cancel
  // the body's lg:pl-60 gutter and the hero centers on the whole viewport.
  return (
    <section
      id='home'
      className='relative flex min-h-svh w-full flex-col items-center justify-end overflow-hidden px-4 pb-24 pt-24 text-center lg:-ml-60 lg:w-[calc(100%+15rem)]'>
      {/* Photo layer, anchored to the bottom of the hero. Below lg it's sized by
          screen height and cropped at the sides; from lg it's 792px wide, or less
          on short screens so it never gets taller than the hero. The mask fades
          the cut-off shoulders into the background. */}
      <motion.div
        style={reduceMotion ? undefined : { y: photoY }}
        className='pointer-events-none absolute inset-x-0 bottom-0 flex justify-center'>
        <Image
          src={Me}
          alt='Kent John Jordan'
          preload
          sizes='(min-width: 1024px) 792px, 97vh'
          className='h-[82.5svh] w-auto max-w-none lg:h-auto lg:w-[min(792px,115.5svh)] [mask-image:linear-gradient(to_bottom,#000_60%,transparent)]'
        />
      </motion.div>
      {/* Black fade over the bottom of the hero. It stays put while the photo
          drifts down, so the photo melts into black instead of being cut off at
          the hero's edge, and the area behind the intro stays dark. */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/70 to-transparent'
      />
      {/* Intro over the photo's faded lower half. The shadow keeps it readable
          wherever it overlaps the photo. */}
      <motion.div
        style={reduceMotion ? undefined : { opacity: introOpacity }}
        className={`${roboto.className} relative flex max-w-xl flex-col items-center [text-shadow:0_1px_12px_rgb(0_0_0/0.8)]`}>
        {/* The short intro doubles as the page's main heading; the full story is in "Who am I?" */}
        <h1 className='text-[18px]/7 text-neutral-300 sm:text-[21px]/8'>
          Hello there! 😊 I&apos;m Kent, a{" "}
          <strong className='text-[#0ED2F7]'>Full-Stack Developer</strong> based
          in the Philippines. I turn ideas into scalable, user-friendly
          software.
        </h1>
        <div className='mt-6 flex justify-center gap-5'>
          {socials.map(({ label, href, Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className='text-neutral-300 transition-colors hover:text-white'>
              <Icon size={22} />
            </Link>
          ))}
        </div>
      </motion.div>
      <motion.div
        style={reduceMotion ? undefined : { opacity: introOpacity }}
        className='absolute inset-x-0 bottom-8 flex items-center justify-center gap-2 text-xs text-white/60'>
        <BsMouse size={18} />
        <span>Scroll down to see more</span>
      </motion.div>
    </section>
  );
};

export default HomeLanding;
