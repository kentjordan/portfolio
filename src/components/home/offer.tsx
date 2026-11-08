import { Globe, Share2, Smartphone } from "lucide-react";
import { Anton } from "next/font/google";
import { Section, SectionHeading } from "./section";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const services = [
  {
    Icon: Globe,
    title: "WEB APPS",
    description:
      "I build everything from simple landing pages to fully dynamic web applications. Whether it's a business website, an online platform, or a custom system, I make sure it's fast, responsive, and built to scale.",
  },
  {
    Icon: Smartphone,
    title: "MOBILE APPS",
    description:
      "I develop cross-platform mobile applications for iOS and Android. From the initial concept to a fully functional app, I turn ideas into mobile experiences that are practical, intuitive, and ready for real-world use.",
  },
  {
    Icon: Share2,
    title: "ML/AI",
    description:
      "I work with data and AI to build intelligent solutions. From classical machine learning and predictive models to deep learning, generative AI, and autonomous agents, I turn complex ideas into practical applications.",
  },
];

const HomeOffer = () => {
  return (
    <Section id='offer'>
      <SectionHeading
        title='What I Can Do?'
        suffix='🚀'
        subtitle={
          <>
            Do I have to explain it? You can see my skills applied on my{" "}
            <a href='#works' className='font-bold text-[#6DD5FA] hover:underline'>
              recent works
            </a>
            . 😉
          </>
        }
      />
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {services.map(({ Icon, title, description }) => (
          <div
            key={title}
            className='group cursor-default rounded-xl border border-neutral-800 bg-neutral-950 p-6 transition-colors hover:border-sky-500'>
            <div className='flex items-center gap-3'>
              <Icon className='shrink-0 text-white' size={24} />
              <h3
                className={`${anton.className} text-lg tracking-wide text-white`}>
                {title}
              </h3>
            </div>
            <p className='mt-4 text-sm leading-6 text-neutral-400 transition-colors group-hover:text-white'>
              {description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default HomeOffer;
