import Image from "next/image";
import CertItem from "../certs/CertItem";
import { Section, SectionHeading } from "./section";

const HomeCertificates = () => {
  return (
    <Section id='certificates'>
      <SectionHeading
        title='Certificates'
        subtitle='My earned certs over the past years'
      />
      {/* One row of four from md up (two by two on phones); each stack fills its column */}
      <div className='grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4'>
        <CertItem
          field='ml'
          title='Machine Learning Specialization'
          Thumbnail={() => (
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-5.png")}
              className='aspect-[4/3] w-full rounded-md shadow-lg'
              width={800}
              height={400}
            />
          )}
          Background={() => (
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-6.png")}
              className='aspect-[4/3] w-full rounded-md border-2 border-stone-500 shadow-lg'
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
              className='aspect-[4/3] w-full rounded-md shadow-lg'
              width={800}
              height={400}
            />
          )}
          Background={() => (
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-container.png")}
              className='aspect-[4/3] w-full rounded-md border-2 border-stone-500 shadow-lg'
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
              className='aspect-[4/3] w-full rounded-md shadow-lg'
              width={800}
              height={400}
            />
          )}
          Background={() => (
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-container.png")}
              className='aspect-[4/3] w-full rounded-md border-2 border-stone-500 shadow-lg'
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
              className='aspect-[4/3] w-full rounded-md shadow-lg'
              width={800}
              height={400}
            />
          )}
          Background={() => (
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-1.jpg")}
              className='aspect-[4/3] w-full rounded-md border-2 border-stone-500 shadow-lg'
              width={800}
              height={400}
            />
          )}
        />
      </div>
    </Section>
  );
};

export default HomeCertificates;
