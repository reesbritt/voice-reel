import { Header } from "@/components/header";
import { PropsWithChildren } from "react";
import { NavHeader } from "../navigation";
import { NewSplashScreen } from "@/components/splash-section copy";

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center">
        <div className="max-w-[1300px] w-full">
          <Header />
        </div>
        <NavHeader />
        <NewSplashScreen />
      </div>
      {children}
    </>
  );
}
