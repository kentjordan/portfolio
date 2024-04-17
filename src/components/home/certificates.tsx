import { LinearGradient } from "react-text-gradients";
import { Anton } from "next/font/google";
import Image from "next/image";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const HomeCertificates = () => {
  return (
    <div className='w-full min-h-screen p-2' id='certificates'>
      <div className='my-16'>
        <h1 className={`${anton.className} text-6xl my-8 text-center`}>
          <LinearGradient
            gradient={["to left", "#0ED2F7, #B2FEFA"]}
            fallbackColor='#6DD5FA'>
            Certificates
          </LinearGradient>
        </h1>
      </div>
      <div className='flex flex-wrap gap-8 items-center justify-center'>
        <div className='flex flex-col items-center'>
          <Image
            alt='Certificate'
            src={require("@/assets/certificates/cert-4.png")}
            className='w-96 h-60'
            width={800}
            height={400}
          />
          <p className='m-2 max-w-[40ch] text-center'>
            Introduction to Python from Data Camp
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            alt='Certificate'
            src={require("@/assets/certificates/cert-3.png")}
            className='w-96 h-60'
            width={800}
            height={400}
          />
          <p className='m-2 max-w-[40ch] text-center'>
            Supervised Machine Learning: Regression and Classification from
            Stanford University
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            alt='Certificate'
            src={require("@/assets/certificates/cert-1.jpg")}
            className='w-96 h-60'
            width={800}
            height={400}
          />
          <p className='m-2 max-w-[40ch] text-center'>
            Coding Game from Programming Philippines
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            alt='Certificate'
            src={require("@/assets/certificates/cert-2.png")}
            className='w-96 h-60'
            width={800}
            height={400}
          />
          <p className='m-2 max-w-[40ch] text-center'>
            Code Fest from STI - Tagisan ng Talino
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCertificates;
