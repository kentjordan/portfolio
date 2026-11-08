import { Anton } from "next/font/google";
import { LinearGradient } from "react-text-gradients";
import { cn, pagePaddingX } from "@/lib/utils";

const anton = Anton({ weight: "400", subsets: ["latin"] });

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * A home-page section: consistent vertical rhythm and a centered 1152px
 * content column that lines up with the navbar and footer.
 */
export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("w-full py-20 sm:py-24", pagePaddingX, className)}>
      <div className='mx-auto w-full max-w-6xl'>{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  title: string;
  /** Shown after the gradient title, e.g. an emoji the gradient would hide. */
  suffix?: React.ReactNode;
  subtitle?: React.ReactNode;
}

export function SectionHeading({ title, suffix, subtitle }: SectionHeadingProps) {
  return (
    <div className='mb-12 flex flex-col items-start text-left'>
      <h2 className={`${anton.className} text-3xl sm:text-4xl`}>
        <LinearGradient
          gradient={["to left", "#0ED2F7, #B2FEFA"]}
          fallbackColor='#6DD5FA'>
          {title}
        </LinearGradient>
        {suffix && <span className='ml-2'>{suffix}</span>}
      </h2>
      {subtitle && (
        <p className='mt-3 text-sm text-neutral-400 sm:text-base'>
          {subtitle}
        </p>
      )}
    </div>
  );
}
