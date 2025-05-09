"use client";
import { BackgroundLines } from "./HeroSection/background-lines.jsx";
import dynamic from "next/dynamic";
import { Cover } from "@/components/HeroSection/cover";
import { PlaceholdersAndVanishInput } from "@/components/HeroSection/placeholders-and-vanish-input";
import Navbar from "./Home/Navbar";

const Scene = dynamic(() => import("@/components/HeroSection/scene"), {
  ssr: false,
});

export default function Hero() {
  const placeholders = ["Find Events", "Find Shedules"];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <BackgroundLines>
      <div className="h-full bg-black flex flex-col lg:items-center lg:justify-start lg:p-14 pb-0 ">
        <Navbar />

        <div className="relative w-full h-[70vh] md:h-screen bg-none flex items-center justify-center">
          <Scene />
        </div>

        <div className="absolute top-[340px] md:top-[460px] lg:top-[490px] w-full text-center">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-2 md:mt-4 lg:mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 via-neutral-400 to-neutral-100 dark:from-neutral-800 dark:via-white dark:to-white">
            Welcome to International <br /> Tech Fest <Cover>V-TAPP 2025</Cover>
            <br />
            <span className="text-[16px] md:text-md lg:text-3xl text-black text-opacity-50">
              February 8 & 9, 2025
            </span>
          </h1>
        </div>

        <div className="absolute top-[500px] md:top-[660px] lg:top-[750px] w-full text-center">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={() => handleChange}
            onSubmit={() => onSubmit}
          />
        </div>
      </div>
    </BackgroundLines>
  );
}
