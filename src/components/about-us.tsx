import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Headshot } from "./headshot";

const CardComponentRob = () => {
  return (
    <Card className="flex flex-col flex-1 text-center z-10 border-gray-800">
      <CardHeader className="text-xl font-black">
        Rob Cairns -<br /> Director
      </CardHeader>
      <CardContent className="space-y-4 text-xs flex flex-1 flex-col justify-center items-center">
        <div className="w-3/4 h-[350px] relative">
          {" "}
          <Image
            fill
            objectFit="cover"
            src="/robCairns.jpeg"
            alt="Pip Williams - Script Supervisor"
          />
        </div>
        <div className="flex-col flex justify-center space-y-4">
          <p className="pt-4">
            Rob works as a producer on audiobooks, video games and podcasts. He
            has worked with the likes of Maxine Peake, Ben Miles, Daniel Rigby
            and many more superb, highly experienced actors.
          </p>
          <p>
            {
              "He trained and worked as an actor so knows what it's like being on the other side of the microphone."
            }
          </p>
          <p>
            {
              "He works in a collborative, relaxed atmosphere, as he thinks that's when the best stuff happens."
            }
          </p>
          <p>
            He started Voice Reel London because he wants to help voice actors
            progress in the industry without paying prohibitive prices.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const CardComponentLaurence = () => {
  return (
    <Card className="flex flex-col flex-1 text-center z-10 border-gray-800">
      <CardHeader className="text-xl font-black">
        Laurence Pearson -<br /> Post Production
      </CardHeader>
      <CardContent className="space-y-4 text-xs flex-1 flex flex-col justify-center items-center">
        <div className="w-3/4 h-[350px] relative">
          {" "}
          <Image
            fill
            objectFit="cover"
            src="/robCairns.jpeg"
            alt="Pip Williams - Script Supervisor"
          />
        </div>
        <div className="flex-col flex justify-center space-y-4">
          <p className="pt-4">
            Laurence studied film at the University of Falmouth, specialising in
            Sound Design. He has worked extensively as an engineer on
            audiobooks, video games and cartoons.
          </p>
          <p>
            {
              "Laurence's passion lies in making soundscapes, layering music and sound effects to create rich and fully realised worlds."
            }
          </p>
          <p>
            Laurence is responsible for making sure the reels are mixed and
            mastered to industy standard.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const CardComponentPip = () => {
  return (
    <Card className="flex flex-col flex-1 text-center z-10 border-gray-800">
      <CardHeader className="text-xl font-black">
        Pip Williams -<br /> Script Supervisor
      </CardHeader>
      <CardContent className="space-y-4 text-xs flex flex-1 flex-col justify-center items-center">
        <div className="w-3/4 h-[350px] relative">
          {" "}
          <Image
            fill
            objectFit="cover"
            src="/pipWilliams.JPG"
            alt="Pip Williams - Script Supervisor"
          />
        </div>

        <div className="flex-col flex justify-center space-y-4">
          <p className="pt-4">
            {
              "Pip is a writed, theatremaker and dramaturg. He holds an MA in dramaturgy and writing for performance from Goldsmiths, and he has had work performed at Camden People's Theatre, Southwark Playhouse, Cambrdige, Junction and the Vaults festival."
            }
          </p>
          <p>
            He is the co-artistic director of critically acclaimed theatre
            company We Talk Of Horses, and his monologue One More Son is
            published by Nick Hern Books.
          </p>
          <p>
            {
              "At Voice Reel London we have a large and ever-expanding bank of scripts to choose from. It's Pip's personal mission to find the right ones for you."
            }
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
export const AboutUs = () => {
  return (
    <div className="w-full flex flex-col items-center py-10 px-10 " id="#about">
      <h1 className="font-bold text-4xl mb-8">About Us</h1>
      <div className="flex space-x-16 px-4 relative">
        <CardComponentRob />
        <CardComponentLaurence />
        <CardComponentPip />
      </div>
    </div>
  );
};
