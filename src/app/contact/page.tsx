import { pagePaddingX } from "@/lib/utils";

const ContactPage = () => {
  return (
    <div className={`w-full max-w-[1280px] ${pagePaddingX}`}>
      <div className='flex flex-col justify-center  h-screen'>
        <h1 className='text-xl sm:text-2xl text-center px-4 break-words'>
          Contact me via email at{" "}
          <b className='text-blue-300'>job.kjordan@gmail.com</b>
        </h1>
      </div>
    </div>
  );
};

export default ContactPage;
