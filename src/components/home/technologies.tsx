import { Roboto } from "next/font/google";
import { techGroups } from "../technologies/stack";
import TechItem from "../technologies/TechItem";
import { Section, SectionHeading } from "./section";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

function HomeTechnologies() {
  return (
    <Section id='techstack'>
      <SectionHeading
        title='Tech Stack'
        subtitle='Technologies that I have been working with, in personal projects and freelancing.'
      />
      <div className='space-y-12'>
        {techGroups.map(({ title, items }) => (
          <div key={title}>
            <h3
              className={`${roboto.className} text-xs font-bold uppercase tracking-[0.2em] text-neutral-400`}>
              {title}
            </h3>
            {/* Tiles at least 6.5rem wide; columns stretch to fill each row */}
            <div className='mt-4 grid grid-cols-[repeat(auto-fill,minmax(6.5rem,1fr))] gap-3'>
              {items.map(({ name, Icon, fill }) => (
                <TechItem
                  key={name}
                  Icon={Icon}
                  title={name}
                  size={40}
                  fill={fill}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default HomeTechnologies;
