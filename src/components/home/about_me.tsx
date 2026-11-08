"use client";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Section, SectionHeading } from "./section";

/** Seconds as m:ss. */
const formatTime = (seconds: number) => {
  const s = Math.floor(seconds);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};

/** Play/pause button for the recording in src/assets/who-am-i.mp3. */
function ListenButton() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [src, setSrc] = useState<string>();
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  // The bundler turns this into the file's public URL. It's resolved in the
  // browser only: on the server, import.meta.url is a file:// path, which would
  // make the server and browser HTML disagree.
  useEffect(() => {
    setSrc(new URL("../../assets/who-am-i.mp3", import.meta.url).href);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) audio.play().catch(() => setPlaying(false));
    else audio.pause();
  };

  const started = playing || current > 0;

  return (
    <>
      <button
        type='button'
        onClick={toggle}
        aria-label={
          playing ? "Pause the recording" : "Listen to a recording of this section"
        }
        className='inline-flex select-none items-center gap-2 rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-sky-300'>
        {playing ? (
          <Pause size={16} fill='currentColor' />
        ) : (
          <Play size={16} fill='currentColor' />
        )}
        {playing ? "Pause" : "Listen"}
        {duration > 0 && (
          <span aria-hidden className='font-normal tabular-nums text-black/70'>
            · {started && `${formatTime(current)} / `}
            {formatTime(duration)}
          </span>
        )}
      </button>
      <audio
        ref={audioRef}
        src={src}
        preload='metadata'
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={(e) => {
          // Rewind so the next press starts from the beginning.
          e.currentTarget.currentTime = 0;
        }}
      />
    </>
  );
}

const HomeAboutMe = () => {
  // The home page turns off text selection (select-none in page.tsx); the bio
  // opts back in so visitors can copy it.
  return (
    <Section id='about-me' className='select-text'>
      <SectionHeading title='Who am I?' />
      <div className='space-y-5 text-base leading-7 text-neutral-300'>
        <ListenButton />
        <p>
          As a full-stack developer, I help businesses and individuals turn
          ideas into functional, scalable, and user-friendly software. I handle
          the whole process end to end, from intuitive interfaces to robust
          backend systems and API integrations, and I build software that
          doesn&apos;t just work but solves real problems, improves workflows,
          and creates meaningful value.
        </p>
        <p>
          But I&apos;m not a typical full-stack developer. I also help startups
          and companies make strategic product decisions: weighing how a feature
          affects user retention, keeping compute and storage costs within
          budget, and optimizing development timelines. By combining engineering
          expertise with product thinking, I make sure every technical decision
          serves the business goals and delivers reliable, measurable results.
        </p>
        <p>
          Beyond development, I&apos;m deeply interested in{" "}
          <strong className='text-[#0ED2F7]'>
            Quantitative Finance, Machine Learning, and Agentic AI
          </strong>
          . I keep exploring these fields, and my curiosity for mathematics,
          data, and intelligent systems shapes how I approach engineering and
          problem-solving.
        </p>
      </div>
    </Section>
  );
};

export default HomeAboutMe;
