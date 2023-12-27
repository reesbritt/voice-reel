import { Packages } from "@/components/packages";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-1 bg-white overflow-hidden relative w-full justify-start min-h-[150px]">
        <div className="w-full h-full bg-gray-900 opacity-50 z-10 absolute" />
        <Image
          src="/packages.jpg"
          alt="Packages"
          fill
          className="object-cover"
        />
        <div className="w-full flex flex-col md:ml-10 z-10 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 pt-20 pb-2 text-white md:px-10 px-4">
            {" "}
            What We Offer
          </h1>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[1300px] px-8">
        {" "}
        <Packages />
        <div className="flex md:flex-row flex-col md:space-x-4 py-4 text-sm items-center justify-center space-y-4">
          <p className="px-8">
            At Voice Reel London we understand that each client is different. We
            think the above packages will offer a great, varied showcase of your
            voice.
          </p>
          <p className="px-8">
            {
              "If you're looking for something specific from you reel though, don't hesitate to get in touch. Well always tailor our services so it works for you."
            }
          </p>
          <Button className="w-1/2" variant="secondary">
            Get In Touch
          </Button>
        </div>
      </div>
    </>
  );
}
