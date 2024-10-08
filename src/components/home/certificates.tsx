import { LinearGradient } from "react-text-gradients";
import { Anton } from "next/font/google";
import { Roboto } from "next/font/google";
import CertItem from "../certs/CertItem";

const anton = Anton({ weight: "400", subsets: ["latin"] });
import Image from "next/image";

const HomeCertificates = () => {
  return (
    <div
      className='w-full min-h-screen flex flex-col justify-center py-32 '
      id='certificates'>
      <div>
        <h1
          className={`${anton.className} text-4xl sm:text-5xl mb-8 text-center`}>
          <LinearGradient
            gradient={["to left", "#0ED2F7, #B2FEFA"]}
            fallbackColor='#6DD5FA'>
            Certificates
          </LinearGradient>
        </h1>
        <h1 className='text-neutral-300 text-center'>
          My earned certs over the past years
        </h1>
      </div>
      <div className='flex flex-wrap gap-28 items-top justify-center mx-2 pt-8 mt-24 px-8'>
        <CertItem
          field='ml'
          title='Machine Learning Specialization'
          Thumbnail={() => (
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-5.png")}
              className='sm:w-96 sm:h-72 w-64 rounded-t-md rounded-md shadow-lg'
              width={800}
              height={400}
            />
          )}
          Background={() => (
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-6.png")}
              className='sm:w-96 sm:h-72 w-64 rounded-t-md rounded-md shadow-lg border-2 border-stone-500'
              width={800}
              height={400}
            />
          )}
        />
        <CertItem
          field='math-ml-ds'
          title='Mathematics for Machine Learning and Data Science Specialization'
          Thumbnail={() => (
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-7.png")}
              className='sm:w-96 sm:h-72 w-64 rounded-t-md rounded-md shadow-lg'
              width={800}
              height={400}
            />
          )}
          Background={() => (
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-container.png")}
              className='sm:w-96 sm:h-72 w-64 rounded-t-md rounded-md shadow-lg border-2 border-stone-500'
              width={800}
              height={400}
            />
          )}
        />
        <CertItem
          field='nlp'
          title='Natural Language Processing Specialization'
          Thumbnail={() => (
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-8.png")}
              className='sm:w-96 sm:h-72 w-64 rounded-t-md rounded-md shadow-lg'
              width={800}
              height={400}
            />
          )}
          Background={() => (
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-container.png")}
              className='sm:w-96 sm:h-72 w-64 rounded-t-md rounded-md shadow-lg border-2 border-stone-500'
              width={800}
              height={400}
            />
          )}
        />
        <CertItem
          field='others'
          title='Others'
          Thumbnail={() => (
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-2.png")}
              className='sm:w-96 sm:h-72 w-64 rounded-t-md rounded-md shadow-lg'
              width={800}
              height={400}
            />
          )}
          Background={() => (
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-1.jpg")}
              className='sm:w-96 sm:h-72 w-64 rounded-t-md rounded-md shadow-lg border-2 border-stone-500'
              width={800}
              height={400}
            />
          )}
        />
      </div>
    </div>
  );
};

export default HomeCertificates;
