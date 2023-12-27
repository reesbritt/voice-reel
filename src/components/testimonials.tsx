import { Headshot } from "./headshot";
import { Card, CardDescription, CardTitle } from "./ui/card";

const TestimonialContainer = ({
  title,
  text,
  imageSrc,
}: {
  title: string;
  text: string;
  imageSrc: string;
}) => {
  return (
    <Card className="bg-gray-800 text-white p-4 w-3/4 shadow-md shadow-gray-400">
      <CardDescription className="flex flex-col md:flex-row text-white text-xs md:text-lg items-center pt-4">
        <div className="pr-4">
          <Headshot sizeVariant="medium" imageSrc={imageSrc} />
        </div>
        <p className="md:px-4 md:py-0 py-4">{text}</p>
      </CardDescription>
      <CardTitle className="text-right">
        {title}
        <p className="italic font-light text-sm">Reel Package Here</p>
      </CardTitle>
    </Card>
  );
};
export const Testimonials = () => {
  const options = [
    {
      title: "Luke Rees-Oliviere",
      text: "Loved my recent session with Voice Reel London at ID Audio. They provided a great range of scripts and Rob's direction was clear and concise. The reel sounds brilliant and has alread got me castings. Thank you!",
      imageSrc: "/reesReel.JPG",
    },
    {
      title: "Hazel Caulfield",
      text: "I enjoyed every minute of doing my voice reel with Rob at ID Audio studios. We worked together to find text best suited for me and had a productive and fun session in the wonderful modern and equipped studios. Really happy with the results!",
      imageSrc: "/Caulfield.JPG",
    },
    {
      text: "I loved recording my reel with Voice Reel London. The atmosphere in the studio is so calm and inviting. Rob was supportive and offered impeccable guidance. My finished reel had a smoothness and variety that I was extremely pleased with.",
      title: "Nell Barlow",
      imageSrc: "/nellBarlow.jpg",
    },
  ];
  return (
    <div className="flex flex-col p-4 md:px-10 justify-center items-center md:py-20 w-full space-y-4">
      {options.map((option) => (
        <TestimonialContainer key="title" {...option} />
      ))}
    </div>
  );
};
