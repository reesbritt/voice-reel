import { Headshot } from "@/components/headshot";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import classNames from "classnames";
import { FC } from "react";

const MusicPlayer: FC<MusicPlayerProps> = ({
  name,
  image,
  audioSrc,
  highlight,
}) => {
  const classes = classNames(
    "flex flex-col flex-1 text-center z-10 border-gray-800 m-2 shadow-md",
    {
      "lg:col-span-2": highlight,
    }
  );
  return (
    <Card className={classes}>
      {/* <CardHeader className="text-xl font-black text-center"></CardHeader> */}
      <CardContent className="space-x-4 flex justify-center items-center flex-col md:flex-row">
        <div className="p-2 flex flex-col justify-center">
          <p className="text-xl font-black text-center p-4">{name}</p>
          <Headshot
            sizeVariant="medium"
            imageSrc={image}
            classNames="mx-auto"
          />
        </div>
        <div className="">
          <audio controls>
            <source src={audioSrc} />
          </audio>
        </div>
      </CardContent>
    </Card>
  );
};

type MusicPlayerProps = {
  audioSrc: string;
  name: string;
  image: string;
  highlight?: boolean;
};
export default function Gallery() {
  const data: MusicPlayerProps[] = [
    {
      name: "Timothy West",
      audioSrc: "/timothyWest.mp3",
      image: "/timothyWest.jpeg",
      highlight: true,
    },
    {
      name: "Kathleen Cranham",
      audioSrc: "/kathleenCranham.wav",
      image: "/kathleenCranham.jpeg",
    },
    {
      name: "Luke Rees-Oliviere",
      audioSrc: "/lukeRees.mp3",
      image: "/lukeRees.JPG",
    },
    {
      name: "Charlotte Victoria",
      audioSrc: "charloteeVictoria.mp3",
      image: "/charlotteVictoria.jpeg",
    },
    {
      name: "Rob Cairns",
      audioSrc: "/robCairns.mp3",
      image: "/robCairns.jpeg",
    },
    {
      name: "Magdalena Sverlander",
      audioSrc: "/magdalenaSverlander.mp3",
      image: "/magdalenaSverlander.jpeg ",
    },
    {
      name: "Leda Douglas",
      audioSrc: "/ledaDouglas.mp3",
      image: "/ledaDouglas.jpeg",
    },
  ];
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 md:px-8 px-2">
      {data.map((props, i) => (
        <MusicPlayer key={i} {...props} />
      ))}
    </div>
  );
}
