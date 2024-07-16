import { Globe, PanelTop, Share2, Smartphone } from "lucide-react";
import { Anton } from "next/font/google";
import { LinearGradient } from "react-text-gradients";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const HomeAboutMe = () => {
  return (
    <div
      id='about-me'
      className='w-full min-h-screen flex flex-col justify-center items-center rounded text-black p-4 pt-28'>
      <div className='flex justify-center items-center flex-col '>
        <h1 className={`${anton.className} text-6xl my-8 text-center`}>
          <LinearGradient
            gradient={["to left", "#0ED2F7, #B2FEFA"]}
            fallbackColor='#6DD5FA'>
            Who am I?
          </LinearGradient>
        </h1>
      </div>
      <p className='text-neutral-300 text-center text-xl leading-10 max-w-[80ch]'>
        I&apos;m Kent John Jordan a{" "}
        <i>fullstack web and mobile app developer</i>. I&apos;m currently taking
        a bachelor degree in <i>Computer Science</i> with specialization in Game
        Development at <i>University of St. La Salle</i>. Though my degree
        focuses on game dev, my heart is on the field of <i>Web Development</i>,{" "}
        <i>Machine Learning</i> and <i>Artificial Intelligence</i>. <br />
        <br />
        I started my journey on computer programming when I was a Senior
        Highschool student at STI College - Lipa taking Information,
        Communication and Technology strand. I was thought Web Development
        (HTML, CSS, JavaScript) and Native Mobile App Development (Java -
        Android Studio). Also, I learned Unity 3D for my Exposition project that
        time. It was a campus tour powered by VR technology.
        <br />
        <br />
        I&apos;ve been doing freelance since 1st quarter of 2023, my focus was
        on building Web and Mobile apps. My first two clients from the students
        in STI College - Lipa and University of Batangas, the project were their
        captones which were web-based systems (see my recent works).
        <br /> <br />
        As of now, I&apos;m an aspiring Chief Technolofy Officer (CTO) in our
        startup company. I&apos;ve been planning and implementing the BEST
        software architecture and technologies for our product. Our minimum
        valuable product will be launched on early 2025 for beta testing. Stay
        tuned! 🚀
      </p>
    </div>
  );
};

export default HomeAboutMe;
