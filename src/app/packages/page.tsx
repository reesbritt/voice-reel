import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 bg-white overflow-hidden relative w-full justify-start">
      <div className="w-full h-full bg-gray-900 opacity-50 z-10 absolute" />
      <Image src="/packages.jpg" alt="Packages" fill objectFit="cover" />
      <div className="w-2/5 flex flex-col ml-10 px-10 z-10 space-y-4">
        <h1 className="text-6xl font-bold mb-4 pt-20 pb-2 text-white">
          {" "}
          What We Offer
        </h1>
        <p className="text-base text-white">
          At Voice Reel London we understand that each client is different. We
          think the above packages will offer a great, varied showcase of your
          voice.
        </p>
        <p className="text-base text-white">
          If you're looking for something specific from you reel though, don't
          hesitate to get in touch. Well always tailor our services so it works
          for you.
        </p>
      </div>
    </div>
  );
}
