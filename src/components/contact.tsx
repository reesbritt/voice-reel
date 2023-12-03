import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <div
      className="bg-gray-800 h-screen w-full text-white flex flex-col p-8"
      id="#contact"
    >
      <h1 className="text-4xl text-center font-semibold">Get In Touch</h1>{" "}
      <div className="w-full grid grid-cols-2 flex-1 p-8">
        <div className="flex flex-col h-full justify-evenly">
          <div className="px-16 space-y-2">
            <h2 className="text-3xl pb-4 font-semibold">Contact us</h2>
            <Link
              href="mailto:hello@voicereellondon.com"
              className="flex space-x-4"
            >
              <Mail />

              <p className="underline">hello@voicereellondon.com</p>
            </Link>
          </div>
          <div className="px-16 space-y-2">
            <h2 className="text-3xl pb-4 font-semibold">Find Us At</h2>
            <Link href="https://idaudio.co.uk">
              <p className="underline">ID Audio Studios</p>
            </Link>
            <p>Unit 17 NW Works,</p>
            <p> 135 Salusbury Rd,</p>
            <p> London NW6 6RJ</p>
          </div>
        </div>
        <div className="w-full h-full flex relative px-4">
          <Image
            fill
            src="/contact.jpeg"
            alt="voice reel london"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};
