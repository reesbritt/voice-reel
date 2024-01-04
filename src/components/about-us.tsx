"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Headshot } from "./headshot";
import { Button } from "./ui/button";
import { FC, useState } from "react";
import Link from "next/link";
import { CrossIcon, Plus } from "lucide-react";
import classNames from "classnames";

type CardComponentProps = {
  firstName: string;
  title: string;
  imageSrc: string;
  onClick: () => void;
  isActive: boolean;
  textContent: string;
  onCancel: () => void;
};
const CardComponent: FC<CardComponentProps> = ({
  firstName,
  title,
  imageSrc,
  onClick,
  isActive,
  textContent,
  onCancel,
}) => {
  const headerClasses = classNames(
    "flex flex-row items-center font-black text-center sho",
    {
      "justify-between": isActive,
      "justify-center": !isActive,
    }
  );
  return (
    <Card className="flex flex-col flex-1 text-center z-10 border-gray-800 shadow-lg">
      <CardHeader className={headerClasses}>
        <p className="py-3">{title}</p>
        {isActive && (
          <Button
            variant="link"
            className="text-black p-0 m-0"
            onClick={onCancel}
          >
            <Plus className="rotate-45" />
          </Button>
        )}
      </CardHeader>
      <CardContent className="text-xs flex flex-1 items-center justify-evenly ">
        <Headshot sizeVariant="medium" imageSrc={imageSrc} />
        {isActive ? (
          <p className="w-3/4">{textContent}</p>
        ) : (
          <Button variant="outline" onClick={onClick}>
            About {firstName}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export const AboutUs = () => {
  const textString =
    "Whether this be your first voice reel, or you've worked in the industry for many years and are looking to refresh, our goal is to showcase the uniqueness of your voice, helping you stand out and book voice work in a crowded market.";

  const robContent =
    "Rob works as a producer on audiobooks, video games and podcasts. He has worked with the likes of Maxine Peake, Ben Miles, Daniel Rigby and many more superb, highly experienced actors. He trained and worked as an actor so knows what it’s like being on the other side of the microphone. He works in a collaborative, relaxed atmosphere, as he thinks that’s when the best stuff happens. He started Voice Reel London because he wants to help voice actors progress in the industry without paying prohibitive prices.";

  const laurenceContent =
    "Laurence studied Film at the University of Falmouth, specialising in Sound Design. He has worked extensively as an engineer on audiobooks, video games and cartoons. His passion lies in making soundscapes, layering music and sound effects to create rich and fully realised worlds. Laurence is responsible for making sure the reels are mixed and mastered to industry standard.";

  const pipContent =
    "Pip is a writer, theatremaker and dramaturg. He holds an MA in Dramaturgy and Writing for Performance from Goldsmiths, and has had work performed at Camden People's Theatre, Southwark Playhouse, Cambridge Junction and the Vaults festival. He is the co-artistic director of critically acclaimed theatre company We Talk Of Horses, and his monologue One More Son is published by Nick Hern Books. At Voice Reel London we have a large and ever-expanding bank of scripts to choose from. It’s Pip’s personal mission to find the right ones for you.";
  const [expanded, setExpanded] = useState<1 | 2 | 3 | null>(null);
  return (
    <>
      <div
        className="w-full flex flex-col items-center md:py-10 md:px-10 py-4 px-4 text-center"
        id="#about"
      >
        <h1 className="font-light text-5xl md:text-6xl mb-8">About us</h1>
        <div className="max-w-[1200px] relative w-full h-[400px] mb-8">
          <Image
            src="/about.jpeg"
            className="object-cover z-1"
            alt="about-image"
            fill
          />
        </div>
        <div className="flex flex-1 flex-col max-w-[1200px] relative w-full h-96">
          <div className=" w-full h-full flex flex-col py-16 text-xl font-black">
            <p className="flex-1 pb-4 z-20">
              Recording at{" "}
              <Link className="underline" href="https://idaudio.co.uk">
                ID Audio Studios
              </Link>{" "}
              in North-West London, we produce bespoke, professional-quality
              voice reels, tailored to the demands of our client.
            </p>
            <p className="flex-1 z-20">{textString}</p>
          </div>
          <div className="w-full flex-1 relative"></div>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 w-full">
            {(expanded === null || expanded === 1) && (
              <CardComponent
                title="Rob Cairns - Director"
                imageSrc="/robCairns.jpeg"
                firstName="Rob"
                onClick={() => setExpanded(1)}
                isActive={expanded === 1}
                textContent={robContent}
                onCancel={() => setExpanded(null)}
              />
            )}
            {(expanded === null || expanded === 2) && (
              <CardComponent
                title="Laurence Pearson - Post Production"
                firstName="Laurence"
                imageSrc="/laurencePearson.jpeg"
                onClick={() => setExpanded(2)}
                isActive={expanded === 2}
                textContent={laurenceContent}
                onCancel={() => setExpanded(null)}
              />
            )}

            {(expanded === null || expanded === 3) && (
              <CardComponent
                title="Pip Williams - Script Supervisor"
                firstName="Pip"
                imageSrc="/pipWilliams.JPG"
                onClick={() => setExpanded(3)}
                isActive={expanded === 3}
                textContent={pipContent}
                onCancel={() => setExpanded(null)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
