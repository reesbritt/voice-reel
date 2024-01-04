import { Header } from "@/components/header";
import { PropsWithChildren } from "react";
import { NavHeader } from "../navigation";

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="max-w-[1300px] w-full">
          <Header />
        </div>
        <NavHeader />
      </div>
      <p className="text-6xl text-center py-16">Gallery</p>
      {children}
    </>
  );
}
