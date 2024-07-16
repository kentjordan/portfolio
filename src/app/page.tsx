"use client";
import HomeCertificates from "@/components/home/certificates";
import HomeLanding from "@/components/home/landing";
import HomeOffer from "@/components/home/offer";
import HomePortfolio from "@/components/home/portfolio";
import HomeTechnologies from "@/components/home/technologies";

export default function Home() {
  return (
    <div className=' w-full max-w-[1400px]'>
      <HomeLanding />
      <HomeOffer />
      <HomeTechnologies />
      <HomePortfolio />
      <HomeCertificates />
    </div>
  );
}
