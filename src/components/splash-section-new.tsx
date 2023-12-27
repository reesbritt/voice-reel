import Image from "next/image";
import { Headshot } from "./headshot";
import { Button } from "./ui/button";

export const NewSplashScreen: React.FC = () => {
  return (
    <div className="flex flex-1 bg-white overflow-hidden relative w-full">
      <div className="w-full h-full bg-white opacity-30 z-10 absolute" />
      <Image src="/splash.jpeg" alt="Splash" fill className="object-cover" />
      <div className="w-full flex flex-col  md:px-10 px-3 z-10 justify-center h-full">
        <div className="rounded flex items-center justify-evenly flex-col">
          <div className="flex justify-center w-full px-3">
            <Image
              src="/VRLogo-nobackground.png"
              alt="voice reel london logo"
              width={400}
              height={110}
              className="-my-20"
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
          <div className="flex -space-x-8">
            <Headshot
              imageSrc="/DouglasReel.jpeg"
              sizeVariant="large"
              classNames="border-4 border-white "
            />
            <Headshot
              imageSrc="/reesReel.JPG"
              sizeVariant="large"
              classNames="shadow-lg shadow-zinc-900 z-10 mt-3 border-4 border-white "
            />
            <Headshot
              imageSrc="/Caulfield.JPG"
              sizeVariant="large"
              classNames="border-4 border-white "
            />
          </div>
          <Button variant="secondary" size="lg" className="text-xl font-">
            Hear Our Reels
          </Button>
        </div>
      </div>
    </div>
  );
};
