import Image from "next/image";
import { Headshot } from "./headshot";
import { Button } from "./ui/button";

export const NewSplashScreen: React.FC = () => {
  const textString =
    "Whether this be your first voice reel, or you've worked in the industry for many years and are looking to refresh, our goal is to showcase the uniqueness of your voice, helping you stand out and booke voice work in a crowded market.";
  return (
    <div className="flex flex-1 bg-white  overflow-hidden relative">
      <div className="w-full h-full bg-sky-200 opacity-20 z-10 absolute" />
      <Image src="/splash.jpeg" alt="Splash" fill objectFit="cover" />
      <div className=" w-2/5 flex flex-col ml-10 px-10 z-10 space-y-4">
        <h1 className="text-6xl font-bold mb-4 pt-20 pb-2 text-white">
          {" "}
          Find Your Voice
        </h1>
        <p className="text-base text-white">
          Based at ID Audio Studios in North-West London, we produce bespoke,
          professional-quality voice reels, tailored to the demands of our
          client.
        </p>
        <p className="text-base text-white">{textString}</p>
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
