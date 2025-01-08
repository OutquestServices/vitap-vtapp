"use client";
import Image from "next/image";
import { FloatingDock } from "../HeroSection/floating-dock";
import { Button } from "../HeroSection/moving-border";
import { IconHeartHandshake, IconHome, IconUser } from "@tabler/icons-react";
import {
  IconCalendarEventFilled,
  IconTicket,
  IconUsers,
} from "@tabler/icons-react/dist/esm/tabler-icons-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    {
      title: "Home",
      icon: <IconHome color="white" />,
      href: "/",
    },
    {
      title: "Schedule",
      icon: <IconCalendarEventFilled color="white" />,
      href: "#",
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
      title: "Sponsors",
      icon: <IconHeartHandshake color="white" />,
      href: "#",
    },
  ];
  return (
    <div className="relative z-30 w-full flex items-center justify-between px-6 pt-2">
      <div className="relative w-[120px] h-[60px] md:w-[200px] md:h-[80px]">
        <Image
          src="/vtapp.png"
          layout="fill"
          objectFit="contain"
          alt="VT App Logo"
        />
      </div>
      <div className=" relative w-auto items-center justify-center">
        <FloatingDock items={items} />
      </div>
      <div className="relative w-[200px] h-[80px] hidden md:block">
        <a href="/tickets">
          <Button>Grab Tickets</Button>
        </a>
      </div>
    </div>
  );
}
