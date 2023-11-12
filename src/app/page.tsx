"use client";
import HomeLanding from "@/components/home/landing";
import HomePortfolio from "@/components/home/portfolio";

export default function Home() {
  return (
    <div className=' w-full max-w-[1280px]'>
      <HomeLanding />
      <HomePortfolio />
    </div>
  );
}
