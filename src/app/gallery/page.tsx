import { AudioPlayer } from "@/components/audio/audio";
import { Headshot } from "@/components/headshot";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const MusicPlayer = () => {
  return (
    <Card className="flex flex-col flex-1 text-center z-10 border-gray-800 ">
      <CardHeader className="text-xl font-black text-center">
        Example Person
      </CardHeader>
      <CardContent className="space-x-4  flex   ">
        <div className="p-2 border-r">
          <Headshot sizeVariant="medium" imageSrc="/laurencePearson.jpeg" />
        </div>
        <div className="flex-1">
          <AudioPlayer />
        </div>
      </CardContent>
    </Card>
  );
};
export default function Gallery() {
  return (
    <>
      <MusicPlayer />
    </>
  );
}
