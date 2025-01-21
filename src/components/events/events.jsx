"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./use-outside-click";

export function Events() {
  const [active, setActive] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch("/api/fetch/events");
      const data = await response.json();

      setData(data.events);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  if (isLoading) {
    return (
      <div className="flex items-center justify-center md:h-[60vh]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-neutral-500"></div>
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <div className="hidden md:block">
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0  grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.eventName}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.eventName}-${id}`}
                ref={ref}
                className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.eventName}-${id}`}>
                  <Image
                    priority
                    width={200}
                    height={200}
                    src={active.eventPoster}
                    alt={active.eventName}
                    className="w-full h-96 sm:rounded-tr-lg sm:rounded-tl-lg object-fill object-top"
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.eventName}-${id}`}
                        className="font-bold text-neutral-200"
                      >
                        {active.eventName}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.eventType}-${id}`}
                        className="text-neutral-400"
                      >
                        {active.eventType}
                      </motion.p>
                    </div>
                  </div>
                  <div className="pt-2 relative px-4">
                    <div className="relative flex flex-col gap-2 py-4">
                      <h1 className="text-white font-bold">
                        Event Id -{" "}
                        <span className="font-light">{active.eventId}</span>{" "}
                      </h1>
                      <h1 className="text-white font-bold">
                        Club Name -{" "}
                        <span className="font-light">{active.clubName}</span>{" "}
                      </h1>
                      <h1 className="text-white font-bold">
                        School -{" "}
                        <span className="font-light">{active.school}</span>{" "}
                      </h1>
                    </div>
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className=" text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {typeof active.eventDescription === "function"
                        ? active.eventDescription()
                        : active.eventDescription}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </div>
      <div className="md:hidden">
        {active && typeof active === "object" && (
          <div className="fixed inset-0 grid place-items-center z-20">
            <button
              key={`button-${active.eventName}-${id}`}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 z-30"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </button>
            <div
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <div className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top">
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.eventPoster}
                  alt={active.eventName}
                  className="w-full h-full object-contain object-top"
                />
              </div>

              <div className="flex justify-between items-start p-4">
                <div>
                  <h3 className="font-bold text-neutral-200">
                    {active.eventName}
                  </h3>
                  <p className="text-white">{active.eventType}</p>
                </div>
                <a
                  href={active.link}
                  target="_blank"
                  className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                >
                  Register
                </a>
              </div>
              <div className="pt-2 relative px-4 overflow-auto text-neutral-400">
                <div className="relative flex flex-col gap-2 py-4">
                  <h1 className="text-white font-bold">
                    Event Id -{" "}
                    <span className="font-light">{active.eventId}</span>{" "}
                  </h1>
                  <h1 className="text-white font-bold">
                    Club Name -{" "}
                    <span className="font-light">{active.clubName}</span>{" "}
                  </h1>
                  <h1 className="text-white font-bold">
                    School - <span className="font-light">{active.school}</span>{" "}
                  </h1>
                </div>
                {typeof active.eventDescription === "function"
                  ? active.eventDescription()
                  : active.eventDescription}
              </div>
            </div>
          </div>
        )}
      </div>

      <ul className="max-w-6xl mx-auto w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start md:gap-4 pr-2">
        {data.map((card, index) => (
          <motion.div
            layoutId={`card-${card.eventName}-${id}`}
            key={card.eventName}
            className="z-10 p-4 flex flex-col  hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.eventName}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.eventPoster}
                  alt={card.eventName}
                  className="h-40 md:h-60 w-full rounded-lg object-fill object-top"
                  onClick={() => setActive(card)}
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.eventName}-${id}`}
                  className="font-medium text-neutral-200 text-center md:text-left text-base"
                >
                  {card.eventName}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.eventType}-${id}`}
                  className="text-neutral-400 text-center md:text-left text-base"
                >
                  {card.eventType}
                </motion.p>
              </div>
              <div className="justify-center items-center hidden md:flex">
                <a
                  href={card.link}
                  target="_blank"
                  className=" px-4 py-2 text-sm rounded-full font-bold bg-green-500 text-white"
                >
                  Register
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
