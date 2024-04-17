"use client";
import HomeCertificates from "@/components/home/certificates";
import HomeLanding from "@/components/home/landing";
import HomePortfolio from "@/components/home/portfolio";
import HomeTechnologies from "@/components/home/technologies";

export default function Home() {
  return (
    <div className=' w-full max-w-[1280px]'>
      <HomeLanding />
      <HomeTechnologies />
      <HomePortfolio />
      <HomeCertificates />
    </div>
  );
}
