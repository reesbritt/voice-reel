import Image from "next/image";
import { Headshot } from "./headshot";
import { Button } from "./ui/button";

const SplashScreen: React.FC = () => {
  return (
    <div className="flex h-screen w-screen bg-white text-zinc-900">
      {/* Left half for text content */}
      <div className="flex flex-col p-8 justify-center flex-1">
        {/* Logo */}
        <div className="mb-4 flex flex-col items-center px-8">
          <Image
            src="/VR-logo.png"
            alt="voice reel london logo"
            width={400}
            height={400}
          />
          <h1 className="text-4xl font-bold mb-4 text-zinc-700 pt-20">
            {" "}
            Find Your Voice
          </h1>
        </div>

        {/* Large header */}

        {/* Call to action */}
        {/* <p className="text-lg mb-6">Head to our reels</p> */}

        {/* Subheader and small description (customize as needed) */}
        {/* <div>
          <h2 className="text-lg font-semibold mb-2">Your Subheader</h2>
          <p className="text-sm">Your small description goes here.</p>
        </div> */}
      </div>

      {/* Right half for the image (on larger screens) */}
      <div className="hidden md:flex flex-col justify-evenly items-center bg-accent relative flex-1 z-10 h-full py-20">
        <div className=" h-auto flex flex-col justify-center items-center w-1/2 ">
          <Image src="/splash.jpeg" alt="Splash" width={600} height={150} />
        </div>
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
          <Button variant="default" size="lg" className="text-xl">
            Hear Our Reels
          </Button>
        </div>
      </div>
      <div className="absolute right-0 bg-accent h-screen -skew-x-12 w-3/5"></div>
    </div>
  );
};

export default SplashScreen;
