"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "./Home/container-scroll-animation";

export function About() {
  return (
      <div className="flex flex-col overflow-hidden bg-black">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-2xl md:text-4xl font-semibold text-white">
                All About <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  V-TAPP 2025
                </span>
              </h1>
            </>
          }
        >
          <div className="relative w-full h-full">
            <Image
              src="/about.png"
              alt="hero"
              className="rounded-2xl object-cover"
              draggable={false}
              fill
              objectFit="contain"
            />
          </div>
        </ContainerScroll>
      </div>
  );
}
