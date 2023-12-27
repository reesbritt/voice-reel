import { Header } from "@/components/header";
import { PropsWithChildren } from "react";
import { NavHeader } from "../navigation";
import { Packages } from "@/components/packages";
import Image from "next/image";

export default function ProcessLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="max-w-[1300px] w-full">
          <Header />
        </div>
        <NavHeader />
        <div className="flex flex-1 bg-white overflow-hidden relative w-full justify-start">
          <div className="w-full h-full bg-gray-900 opacity-50 z-10 absolute" />
          <Image
            src="/process.jpeg"
            alt="Packages"
            fill
            className="object-cover"
          />
          <div className="w-full flex flex-col ml-10 z-10 space-y-4 py-20">
            <h1 className="text-6xl font-bold mb-4 pt-20 pb-2 text-white px-10">
              {" "}
              How it works
            </h1>
          </div>
        </div>
        {children}
      </div>
      {/* <Packages /> */}
    </>
  );
}
