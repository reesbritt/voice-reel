import { AudioWaveform, BookAudio, Speech } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

const SquareDivPrimary = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gray-800 flex-1 flex-col justify-center pt-1/3 relative">
      <div className="absolute top-0 bottom-0 left-0 right-0 text-white hover:text-gray-400">
        {children}
      </div>
    </div>
  );
};

const SquareDivAccent = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-accent flex-1 flex-col justify-center pt-1/3 relative items-center">
      <div className="absolute top-0 bottom-0 left-0 right-0 text-white hover:text-gray-200">
        {children}
      </div>
    </div>
  );
};
export const HomepageNavigation = () => {
  return (
    <div className="w-full flex h-[33vw]">
      <SquareDivPrimary>
        <div className="w-full h-full justify-center items-center flex flex-col ">
          <AudioWaveform height={48} width={48} />
          <p className="w-full text-center md:text-3xl pt-4">Our Process</p>
        </div>
      </SquareDivPrimary>
      <SquareDivAccent>
        <Link href="/packages">
          <div className="w-full h-full justify-center items-center flex flex-col ">
            <BookAudio height={48} width={48} />
            <p className="w-full text-center md:text-3xl pt-4">Our Packages</p>
          </div>
        </Link>
      </SquareDivAccent>
      <SquareDivPrimary>
        <div className="w-full h-full justify-center items-center flex flex-col ">
          <Speech height={48} width={48} />
          <p className="w-full text-center md:text-3xl pt-4">Our Reels</p>
        </div>
      </SquareDivPrimary>
    </div>
  );
};
