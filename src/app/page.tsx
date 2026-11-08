"use client";
import HomeAboutMe from "@/components/home/about_me";
import HomeCertificates from "@/components/home/certificates";
import HomeLanding from "@/components/home/landing";
import HomeOffer from "@/components/home/offer";
import HomePortfolio from "@/components/home/portfolio";
import HomeTechnologies from "@/components/home/technologies";
import HomeTestimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <main className='w-full select-none'>
      <HomeLanding />
      <HomeOffer />
      <HomeTechnologies />
      <HomePortfolio />
      <HomeTestimonials />
      <HomeCertificates />
      <HomeAboutMe />
    </main>
  );
}
