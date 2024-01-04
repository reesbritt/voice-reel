"use client";
import Image from "next/image";
import { Headshot } from "./headshot";
import { Button } from "./ui/button";
import anime from "animejs";
import { useEffect } from "react";
import Link from "next/link";

export const NewSplashScreen: React.FC = () => {
  useEffect(() => {
    anime({
      targets: "#hero-headshot",
      keyframes: [
        { opacity: 0, translateY: 0 },
        { opacity: 1, translateY: 45 },
      ],
      translateY: 45,
      delay: anime.stagger(200),
      duration: 1800,
      easing: "easeOutElastic(1, .8)",
    });
    anime({
      targets: "#hero-content",
      keyframes: [{ opacity: 0 }, { opacity: 1 }],
      duration: 1000,
      easing: "easeOutElastic(1, .8)",
    });
  }, []);
  return (
    <div className="flex flex-1 bg-white overflow-hidden relative w-full">
      <div
        className="w-full h-full bg-white opacity-50 z-10 absolute"
        id="background"
      />
      <Image src="/splash.jpeg" alt="Splash" fill className="object-cover" />
      <div className="w-full flex flex-col  md:px-10 px-3 z-10 justify-center h-full">
        <div
          className="rounded flex items-center justify-evenly flex-col opacity-0"
          id="hero-content"
        >
          <div className="flex justify-center w-full px-3">
            <Image
              src="/VRLogo-nobackground.png"
              alt="voice reel london logo"
              width={400}
              height={110}
              className="-my-20 "
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-extralight mb-4 pb-2 text-black -mt-4 text-center md:text-left">
            Find Your Voice
          </h1>
          {/* <p className="text-sm text-white">
            Based at ID Audio Studios in North-West London, we produce bespoke,
            professional-quality voice reels, tailored to the demands of our
            client.
          </p> */}
        </div>
        {/* <p className="text-sm text-white">{textString}</p> */}
        <div className="flex flex-col items-center justify-evenly h-1/2">
          <div className="flex -space-x-8 -translate-y-[45px]">
            <Headshot
              imageSrc="/DouglasReel.jpeg"
              sizeVariant="large"
              classNames="border-4 border-white opacity-0"
              id="hero-headshot"
            />
            <Headshot
              imageSrc="/reesReel.JPG"
              sizeVariant="large"
              classNames="shadow-lg shadow-zinc-900 z-10 mt-3 border-4 border-white opacity-0"
              id="hero-headshot"
            />
            <Headshot
              imageSrc="/Caulfield.JPG"
              sizeVariant="large"
              classNames="border-4 border-white opacity-0"
              id="hero-headshot"
            />
          </div>
          <Link href="/gallery">
            <Button variant="secondary" size="lg" className="text-xl font-">
              Hear Our Reels
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
