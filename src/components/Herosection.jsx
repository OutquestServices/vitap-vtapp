"use client";
import { BackgroundLines } from "@/components/HeroSection/background-lines";
import { FloatingDock } from "@/components/HeroSection/floating-dock";
import dynamic from "next/dynamic";
import Head from "next/head";
import { IconHome, IconSettings, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "@/components/HeroSection/moving-border";
import { Cover } from "@/components/HeroSection/cover";
import { PlaceholdersAndVanishInput } from "@/components/HeroSection/placeholders-and-vanish-input";
import { About } from "./Aboutsection";
import {
  IconCalendarEventFilled,
  IconTicket,
  IconUsers,
} from "@tabler/icons-react/dist/esm/tabler-icons-react";

const Scene = dynamic(() => import("@/components/HeroSection/scene"), {
  ssr: false,
});

export default function Hero() {
  const placeholders = ["Find Events", "Find Shedule", "Find Products"];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  const items = [
    {
      title: "Home",
      icon: <IconHome color="white" />,
      href: "/",
    },
    {
      title: "Shedule",
      icon: <IconCalendarEventFilled color="white" />,
      href: "/shedule",
    },
    {
      title: "Events",
      icon: <IconTicket color="white" />,
      href: "/events",
    },
    {
      title: "Team",
      icon: <IconUsers color="white" />,
      href: "/team",
    },
    {
      title: "Admin",
      icon: <IconUser color="white" />,
      href: "/admin",
    },
  ];
  return (
    <BackgroundLines>
      <div className="h-full bg-black flex flex-col lg:items-center lg:justify-start lg:p-14 pb-0">
        <div className="relative z-30 w-full flex items-center justify-between">
          <div className="relative w-[200px] h-[80px]">
            <Image
              src="/vtapp.png"
              layout="fill"
              objectFit="contain"
              alt="VT App Logo"
            />
          </div>
          <div className="relative flex w-auto items-center justify-center">
            <FloatingDock items={items} />
          </div>
          <div className="relative w-[200px] h-[80px] hidden md:block">
            <Button>Grab Tickets</Button>
          </div>
        </div>

        <div className="relative w-full h-[70vh] md:h-screen bg-none flex items-center justify-center">
          <Scene />
        </div>

        <div className="absolute top-[460px] w-full text-center">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-2 md:mt-4 lg:mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 via-neutral-400 to-neutral-100 dark:from-neutral-800 dark:via-white dark:to-white">
            Welcome to International <br /> Tech Fest <Cover>VTAPP 2025</Cover>
          </h1>
        </div>

        <div className="absolute top-[600px] lg:top-[680px] w-full text-center">
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
