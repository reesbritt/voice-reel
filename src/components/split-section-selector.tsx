"use client";
import { Bars2Icon } from "@heroicons/react/24/solid";
import anime from "animejs";
import Image from "next/image";

export const SplitSectionSelector = () => {
  const reveal = () =>
    anime({
      targets: "#left-revealer",
      keyframes: [{ opacity: 0.3 }],
      duration: 800,
      easing: "easeOutElastic(1, .8)",
    });

  const hide = () =>
    anime({
      targets: "#left-revealer",
      keyframes: [{ opacity: 0.7 }],
      duration: 800,
      easing: "easeOutElastic(1, .8)",
    });
  return (
    <div className="w-full min-h-screen flex">
      <div
        className="flex-1 bg-zinc-300 relative min-h-fit "
        onMouseEnter={reveal}
        onMouseLeave={hide}
      >
        <div
          className="bg-zinc-500 opacity-70 absolute w-full h-full z-10"
          id="left-revealer"
        />
        <Image
          src="/microphone.jpeg"
          alt="The process"
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="bg-black w-8 flex items-center" id="bar">
        <Bars2Icon className="text-white" />
      </div>
      <div className="w-px bg-white"></div>
      <div className="bg-black w-8 flex items-center">
        <Bars2Icon className="text-white" />
      </div>
      <div className="flex-1 bg-zinc-300"></div>
    </div>
  );
};
