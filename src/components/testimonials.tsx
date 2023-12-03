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
    <Card className="bg-gray-800 text-white p-4 w-3/4">
      <CardDescription className="flex text-white text-lg items-center pt-4">
        <div className="pr-4">
          <Headshot sizeVariant="medium" imageSrc={imageSrc} />
        </div>
        <p className="px-4">{text}</p>
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
  ];
  return (
    <div className=" flex flex-col px-10 justify-center items-center py-20 w-full space-y-4">
      {options.map((option) => (
        <TestimonialContainer key="title" {...option} />
      ))}
    </div>
  );
};
