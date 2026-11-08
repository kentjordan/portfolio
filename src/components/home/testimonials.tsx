import { MessageSquareQuote } from "lucide-react";
import { Section, SectionHeading } from "./section";

const testimonials = [
  {
    name: "Maria De Castro",
    project: "CLIEMB (Web & App)",
    quote:
      "Kuya Kent did an excellent job on our project because he exceeded our expectations and even gave some suggestions to enhance the user interface. He clearly explained his plan for developing the program and always kept us informed about its progress.",
  },
  {
    name: "Joshua Yabyabin",
    project: "Go Explore Batangas (Web)",
    quote:
      "Hello Sir Kent Jordan. Thank You for being a developer po ng aming capstone project. Solid po yung naging website namin and naipasa po namin yung aming capstone. Thank You po again.",
  },
];

const HomeTestimonials = () => {
  return (
    <Section>
      <SectionHeading
        title='What Clients Say'
        subtitle='See what my recent clients said about my service on their respective projects.'
      />
      <div className='grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2'>
        {testimonials.map(({ name, project, quote }) => (
          <div
            key={name}
            className='cursor-default rounded-xl border border-neutral-800 bg-neutral-950 p-6 transition-colors hover:border-sky-500'>
            <div className='flex items-center gap-4'>
              <MessageSquareQuote
                className='shrink-0 text-neutral-500'
                size={24}
              />
              <div>
                <h3 className='text-base font-semibold text-white'>{name}</h3>
                <p className='text-xs text-neutral-400'>{project}</p>
              </div>
            </div>
            <p className='mt-4 text-sm italic leading-6 text-neutral-300'>
              {quote}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default HomeTestimonials;
