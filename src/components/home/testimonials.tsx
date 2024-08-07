import { MessageSquareQuote } from "lucide-react";
import { Anton } from "next/font/google";
import { LinearGradient } from "react-text-gradients";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const HomeTestimonials = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center rounded py-32 px-4'>
      {/* Header */}
      <div className='flex justify-center items-center flex-col mb-24'>
        <h1
          className={`${anton.className} text-4xl sm:text-5xl mb-8 text-center`}>
          <LinearGradient
            gradient={["to left", "#0ED2F7, #B2FEFA"]}
            fallbackColor='#6DD5FA'>
            What Clients Say
          </LinearGradient>
        </h1>
        <h1 className='text-neutral-300 text-center max-w-[40ch]'>
          See what my recent clients said about my service on their respective
          projects.
        </h1>
      </div>
      {/* End Header */}
      <div className='flex gap-8 flex-wrap justify-center items-center'>
        {/* Tesitomony 1 */}
        <div className='cursor-default relative hover:border-sky-500 flex w-full max-w-[500px] h-auto sm:h-[320px] border bg-[#0F0F0F] border-[#3A3A3A] p-8 rounded-xl'>
          <div>
            <div className='mb-6 flex items-center'>
              <MessageSquareQuote className='text-neutral-500' size={32} />
              <div className='ml-6'>
                <h1 className='text-xl font-bold text-white'>
                  Maria De Castro
                </h1>
                <p className='text-sm text-neutral-300'>CLIEMB (Web & App)</p>
              </div>
            </div>
            <p className='text-neutral-300 leading-6 italic'>
              Kuya Kent did an excellent job on our project because he exceeded
              our expectations and even gave some suggestions to enhance the
              user interface. He clearly explained his plan for developing the
              program and always kept us informed about its progress.
            </p>
          </div>
        </div>
        {/* Tesitomony 2 */}
        <div className='cursor-default relative hover:border-sky-500 flex w-full max-w-[500px] h-auto sm:h-[320px] border bg-[#0F0F0F] border-[#3A3A3A] p-8 rounded-xl'>
          <div>
            <div className='mb-6 flex items-center'>
              <MessageSquareQuote className='text-neutral-500' size={32} />
              <div className='ml-6'>
                <h1 className='text-xl font-bold text-white'>
                  Joshua Yabyabin
                </h1>
                <p className='text-sm text-neutral-300'>
                  Go Explore Batangas (Web)
                </p>
              </div>
            </div>
            <p className='text-neutral-300 leading-6 italic'>
              Hello Sir Kent Jordan. Thank You for being a developer po ng aming
              capstone project. Solid po yung naging website namin and naipasa
              po namin yung aming capstone. Thank You po again.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
