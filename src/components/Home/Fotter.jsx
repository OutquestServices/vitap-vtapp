"use client";

import React from "react";
import { StarsBackground } from "./stars-background";
import Image from "next/image";
import { signIn } from "next-auth/react";

export function Footer() {
  return (
    <div className="h-full bg-neutral-900 flex flex-col items-center justify-start relative w-full overflow-hidden">
      <StarsBackground />
      <div className="w-full md:w-[80vw] relative top-2 md:top-6 flex flex-col md:flex-row gap-6 items-start justify-between p-6 md:p-8 lg:p-10">
        {/* Logo and Title */}
        <div className="relative w-[180px] h-[80px] md:w-[300px] md:h-[160px]">
          <Image
            src="/vitap-logo-white.png"
            layout="fill"
            objectFit="contain"
            alt="VT App Logo"
          />
        </div>

        {/* Contact and Social Information */}
        <div className="relative">
          <div className="text-white">
            <h3 className="text-lg font-bold">Contact</h3>
            <p>Phone: 850-123-5021</p>
            <p>Email: vtapp.convenor@vitap.ac.in</p>
            <p>Address: VIT-AP University, Amaravathi</p>
          </div>
        </div>

        {/* Social and QR */}
        <div className="relative">
          <div className="text-white">
            <h3 className="text-lg font-bold">Social</h3>
            <button
              onClick={() => signIn("google")}
              className="cursor-pointer underline bg-transparent border-none text-inherit"
            >
              Scan QR
            </button>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>

      <hr className="relative w-[90vw] md:w-[80vw] h-0.5 bg-white" />

      <div className="relative items-start justify-between text-white text-center p-4 flex flex-col md:flex-row gap-2 w-[90vw] md:w-[80vw]">
        <p>&copy; 2025 VIT-AP. All rights reserved.</p>
        <div className="z-30">
          Developed by{" "}
          <a
            href="https://www.akshayallenki.in.net"
            target="_blank"
            className="underline"
          >
            Akshay
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/rithwik-sthambamkadi-965793273/"
            target="_blank"
            className="underline"
          >
            Rithwik
          </a>{" "}
          &{" "}
          <a href="https://syncline.tech" target="_blank" className="underline">
            Rishi
          </a>
        </div>
      </div>
    </div>
  );
}
