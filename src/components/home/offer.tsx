import { Globe, PanelTop, Share2, Smartphone } from "lucide-react";
import { Anton } from "next/font/google";
import { LinearGradient } from "react-text-gradients";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const HomeOffer = () => {
  return (
    <div
      id='offer'
      className='w-full min-h-screen flex flex-col justify-center items-center rounded py-32 px-4'>
      <div className='flex justify-center items-center flex-col mb-16'>
        <h1
          className={`${anton.className} text-4xl sm:text-5xl mb-8 text-center`}>
          <LinearGradient
            gradient={["to left", "#0ED2F7, #B2FEFA"]}
            fallbackColor='#6DD5FA'>
            What I Can Do?
          </LinearGradient>
          🚀
        </h1>
        <h1 className='text-neutral-300 text-center max-w-[40ch]'>
          Do I have to explain it? You can see my skills applied on my{" "}
          <b
            onClick={() => {
              window.location.href = "#works";
            }}
            className='text-[#6DD5FA] cursor-pointer'>
            recent works
          </b>
          . 😉
        </h1>
      </div>
      <div className='w-full flex mt-8 gap-4 flex-wrap justify-center'>
        {/* Websites */}
        <div className='w-[300px] h-[280px] sm:h-[380px] border-neutral-800 border bg-neutral-950 rounded-lg p-6 group hover:border-sky-500'>
          <div className='flex items-center gap-4'>
            <PanelTop className='text-white ' size={32} />
            <h1
              className={`${anton.className} text-white text-xl font-bold  cursor-default`}>
              WEBSITES
            </h1>
          </div>
          <p className='text-neutral-400 text-sm sm:text-base leading-6 sm:leading-8 mt-8 group-hover:text-white cursor-default'>
            Got an idea in mind? or do you want to increase the presence of your
            current business? I can help you with that. I develop static
            websites. Let’s publish your business’s brand or profile on the
            internet! 🚀
          </p>
        </div>
        {/* Web Apps */}
        <div className='w-[300px] h-[280px] sm:h-[380px] border-neutral-800 border bg-neutral-950 rounded-lg p-6 group hover:border-sky-500'>
          <div className='flex items-center gap-4'>
            <Globe className='text-white ' size={32} />
            <h1
              className={`${anton.className} text-white text-xl font-bold  cursor-default`}>
              WEB APPS
            </h1>
          </div>
          <p className='text-neutral-400 text-sm sm:text-base leading-6 sm:leading-8 mt-8 group-hover:text-white cursor-default'>
            Beyond just a static website, I can help you in your complex
            business problem by creating a fully functional web-based system to
            fulfill its needs. 🛠️
          </p>
        </div>
        {/* Mobile Apps */}
        <div className='w-[300px] h-[280px] sm:h-[380px] border-neutral-800 border bg-neutral-950 rounded-lg p-6 group hover:border-sky-500'>
          <div className='flex items-center gap-4'>
            <Smartphone className='text-white ' size={32} />
            <h1
              className={`${anton.className} text-white text-xl font-bold  cursor-default`}>
              MOBILE APPS
            </h1>
          </div>
          <p className='text-neutral-400 text-sm sm:text-base leading-6 sm:leading-8 mt-8 group-hover:text-white cursor-default'>
            If mobile phone users are your target audience or you just want an
            app for your business or problem, I can help and provide you a high
            performant and cross-platform mobile app. 📱
          </p>
        </div>
        {/* ML/AI */}
        <div className='w-[300px] h-[280px] sm:h-[380px] border-neutral-800 border bg-neutral-950 rounded-lg p-6 group hover:border-sky-500'>
          <div className='flex items-center gap-4'>
            <Share2 className='text-white ' size={32} />
            <h1
              className={`${anton.className} text-white text-xl font-bold  cursor-default`}>
              ML/AI
            </h1>
          </div>
          <p className='text-neutral-400 text-sm sm:text-base leading-6 sm:leading-8 mt-8 group-hover:text-white cursor-default'>
            I’m still improving my skills in Machine Learning and Artificial
            Intelligence. I’ll help you soon once I got comfortable in this
            field. 😉
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeOffer;
