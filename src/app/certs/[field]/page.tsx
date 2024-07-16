import Image from "next/image";

const Cert = ({ params }: { params: { field: string } }) => {
  return (
    <div className='w-full max-w-[1280px] pt-40 flex justify-center'>
      {params.field === "ml" && (
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center max-w-[600px] mb-8 p-2'>
            <h1 className='text-4xl font-bold text-center'>
              Machine Learning Certifications
            </h1>
            <p className='text-center mt-4'>
              These certifications were offered by DeepLearning.AI and Stanford
              University on Coursera. This is Machine Learning Specialization.
              The specialization consists of 3 courses. Each course has
              theorical discussion and its applicatoin in Jupyter Notebook. I
              took the specialization in almost 4 months. I have learned
              everything of machine learning fundamentals, starting from Linear
              Regression (how to get its fitted weights and biases into the
              data) to Neural Networks and Deep-Q learning algorithm of
              Reinforcement Learning.
            </p>
          </div>
          <div className='flex flex-col gap-8 p-2'>
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-3.png")}
              className='w-full p-[-2px] bg-white'
              width={800}
              height={400}
            />
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-4.png")}
              className='w-full p-[-2px] bg-white'
              width={800}
              height={400}
            />
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-5.png")}
              className='w-full p-[-2px] bg-white'
              width={800}
              height={400}
            />
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-6.png")}
              className='w-full p-[-2px] bg-white'
              width={800}
              height={400}
            />
          </div>
        </div>
      )}
      {params.field === "others" && (
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center max-w-[600px] mb-8 p-2'>
            <h1 className='text-4xl font-bold text-center'>
              Other Certifications
            </h1>
            <p className='text-center mt-4'>
              Random Certifications I have earned in the past years.
            </p>
          </div>
          <div className='flex flex-col gap-8 p-2'>
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-2.png")}
              className='w-full p-[-2px] bg-white'
              width={800}
              height={400}
            />
            <Image
              alt='Certificate'
              src={require("@/assets/certificates/cert-1.jpg")}
              className='w-full p-[-2px] bg-white'
              width={800}
              height={400}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cert;
