import { Packages } from "@/components/packages";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type SectionData = {
  title: string;
  text: string;
};
const ProcessSection = ({
  title,
  subSections,
}: {
  title: string;
  subSections: SectionData[];
}) => {
  return (
    <div className="flex flex-col p-4">
      <h2 className="text-6xl font-bold pb-2">{title}</h2>
      {subSections.map(({ title, text }) => {
        return (
          <>
            <p className="font-semibold pt-4">{title}</p>
            <p>{text}</p>
          </>
        );
      })}
    </div>
  );
};

const SECTION_DATA = [
  {
    sectionTitle: "Before",
    subSections: [
      {
        title: "The consulation",
        text: "We’ll have a quick chat over Zoom to get to know each other a little. This is just an opportunity for you to ask any questions and for us to get an idea of your voice, where you’re at, and what you’re looking for in the reel.",
      },
      {
        title: "The Scripts",
        text: "We’ll go away and gather a selection of scripts tailored to your voice, showcasing a range of different qualities and tones.",
      },
    ],
  },
  {
    sectionTitle: "On the day",
    subSections: [
      {
        title: "The Record",
        text: "You’ll come to the award-winning ID Audio Studios (link) and we'll record each script. We'll play around with them and record each a few times so that we have different options for the edit. We’ll offer you direction and technical advice to make sure they sound as good as possible.",
      },
    ],
  },
  {
    sectionTitle: "After",
    subSections: [
      {
        title: "The Edit",
        text: "We’ll set to work editing the recordings, cutting them together, using all the best takes.",
      },
      {
        title: "The Mix",
        text: " Using our extensive bank of music and sfx, we’ll bring the reel to life.",
      },
    ],
  },
];
export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-[800px] pb-8">
      {SECTION_DATA.map((section) => {
        return (
          <ProcessSection
            title={section.sectionTitle}
            subSections={section.subSections}
            key={section.sectionTitle}
          />
        );
      })}
      <div className="flex flex-col p-4">
        <h2 className="text-6xl font-bold pb-2">Then</h2>
        <p className="pt-4">
          When we’re happy that they’re up to scratch, we will send your
          finished professional quality reels to you in WAV and MP3 form, ready
          to be uploaded to Spotlight and elsewhere!
        </p>
        <p className="pt-2">
          Your reels will also go into the{" "}
          <Link href="https://idaudio.co.uk">
            <p className="underline inline">ID Audio Studios</p>
          </Link>{" "}
          Voice Bank, used by the casting team.
        </p>
      </div>
    </div>
  );
}
