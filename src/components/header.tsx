import Image from "next/image";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <div className="w-full bg-white flex justify-between items-center px-4 py-1">
      <Image
        src="/VR-logo.png"
        alt="voice reel london logo"
        width={200}
        height={55}
      />
      <Button variant="secondary" className="font-semibold">
        Get In Touch
      </Button>
    </div>
  );
};
