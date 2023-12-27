import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Headshot } from "./headshot";
import { Button } from "./ui/button";
import { FC } from "react";
import Link from "next/link";

type CardComponentProps = {
  firstName: string;
  title: string;
  imageSrc: string;
};
const CardComponent: FC<CardComponentProps> = ({
  firstName,
  title,
  imageSrc,
}) => {
  return (
    <Card className="flex flex-col flex-1 text-center z-10 border-gray-800 ">
      <CardHeader className=" font-black text-center">{title}</CardHeader>
      <CardContent className="text-xs flex flex-1 items-center justify-evenly flex-wrap">
        <Headshot sizeVariant="medium" imageSrc={imageSrc} />
        <Button variant="outline">About {firstName}</Button>
      </CardContent>
    </Card>
  );
};

export const AboutUs = () => {
  const textString =
    "Whether this be your first voice reel, or you've worked in the industry for many years and are looking to refresh, our goal is to showcase the uniqueness of your voice, helping you stand out and booke voice work in a crowded market.";

  return (
    <>
      <div
        className="w-full flex flex-col items-center md:py-10 md:px-10 py-4 px-4 text-center"
        id="#about"
      >
        <h1 className="font-light text-5xl md:text-6xl mb-8">Meet the team</h1>
        <div className="max-w-[1200px] relative w-full h-96">
          <Image
            src="/about.jpeg"
            className="object-cover z-1"
            alt="about-image"
            fill
          />
        </div>
        <div className="flex flex-1 flex-col max-w-[1200px] relative w-full h-96">
          <div className="w-full flex-1 relative">
            <div className=" w-full h-full flex flex-col py-8 z-20 text-sm font-semibold">
              <p className="flex-1 pb-4">
                Based at{" "}
                <Link className="underline" href="https://idaudio.co.uk">
                  ID Audio Studios
                </Link>{" "}
                in North-West London, we produce bespoke, professional-quality
                voice reels, tailored to the demands of our client.
              </p>
              <p className="flex-1">{textString}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 w-full">
            <CardComponent
              title="Rob Cairns - Director"
              imageSrc="/robCairns.jpeg"
              firstName="Rob"
            />
            <CardComponent
              title="Laurence Pearson - Post Production"
              firstName="Laurence"
              imageSrc="/laurencePearson.jpeg"
            />

            <CardComponent
              title="Pip Williams - Script Supervisor"
              firstName="Pip"
              imageSrc="/pipWilliams.JPG"
            />
          </div>
        </div>
      </div>
    </>
  );
};
