import { AudioLines, FileVolume, Speech } from "lucide-react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { PropsWithChildren } from "react";
import { Button } from "./ui/button";

const PackageCard = ({
  name,
  children,
  price,
}: {
  name: string;
  price: string;
} & PropsWithChildren) => {
  return (
    <Card className="py-4 my-2 md:my-0 flex flex-col items-center bg-gray-800 text-white flex-1 shadow-lg shadow-gray-800 border border-gray-800">
      <CardTitle>{name}</CardTitle>
      <CardContent className="flex flex-col items-center pt-2 justify-between flex-1">
        <div className="flex flex-col items-left text-left">{children}</div>
        <p className="text-xl font-semibold pt-4">{price}</p>
      </CardContent>
    </Card>
  );
};

export const Packages = () => {
  const options = [
    {
      name: "Narrative Reel",
      price: "£150",
    },
    {
      name: "Classic Reel",
      price: "£350",
    },
    {
      name: "Advanced Reel",
      price: "£450",
    },
  ];
  return (
    <>
      <div className="flex-1 flex md:space-x-4 py-4 justify-evenly text-sm flex-col md:flex-row">
        <PackageCard {...options[0]}>
          <div className="flex flex-col items-center w-full ">
            <Speech width={80} height={80} className="text-accent pb-4" />
          </div>
          <p>- 4 Audiobook Tracks</p>
        </PackageCard>
        <PackageCard {...options[1]}>
          <div className="flex flex-col items-center w-full ">
            <FileVolume width={80} height={80} className="text-accent pb-4" />
          </div>
          <p>- 5 Commercial Tracks</p>
          <p>- 1 Documentary Track</p>
          <p>- 4 Audiobook Tracks</p>
        </PackageCard>{" "}
        <PackageCard {...options[2]}>
          <div className="flex flex-col items-center w-full ">
            <AudioLines width={80} height={80} className="text-accent pb-4" />
          </div>
          <p>- 3 Animation/Video Game Tracks</p>
          <p>- 5 Commercial Tracks</p>
          <p>- 1 Documentary Track</p>
          <p>- 1 Corporate Track</p>
          <p>- 4 Audiobook Tracks</p>
        </PackageCard>
      </div>
      {/* <div className="w-full flex justify-center pb-8">
        <Button
          variant="secondary"
          size="lg"
          className="text-2xl p-4 font-semibold"
        >
          Get In Touch
        </Button>
      </div> */}
    </>
  );
};
