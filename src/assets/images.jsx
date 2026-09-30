import heroImg from "./hero-img.webp";
import thumbOne from "./Emma & Joshua.webp";
import thumbTwo from "./Catrin & Tim.webp";
import thumbThree from "./Victoria & Oscar.webp";
import thumbFour from "./Pippa & Josh.webp";
import thumbFive from "./Abbi & Craig.webp";
import thumbSix from "./Alice & Kris.webp";
import thumbSeven from "./Kathryn & Brendan.webp";
import thumbEight from "./Laurie & Glen.webp";
import thumbNine from "./Lucy & Callum.webp";
import thumbTen from "./Rhona & Stewart.webp";
import thumbEleven from "./Rachel & Dom.webp";
import thumbTwelve from "./Rosie & Ben.webp";
import thumbThirteen from "./Megan & Connor.webp";
import thumbFourteen from "./Nicole & Alex.webp";
import thumbFifteen from "./Hannah & Xigg.webp";
import thumbSixteen from "./Carrie & Angus.webp";
import thumbSeventeen from "./Lowri & Dan.webp";
import thumbEighteen from "./Emily & Tom.webp";

const HeroImg = ({ className }) => {
  return (
    <img
      src={heroImg}
      alt="Claire McGowan, wedding photographer"
      className={className}
    />
  );
};

const WorkImage = ({ src, alt, className = "" }) => {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
};

const works = [
  {
    id: 1,
    image: thumbOne,
    couple: "Emma & Joshua",
    alt: "Emma and Joshua wedding photography",
    variant: "portrait",
  },
  {
    id: 2,
    image: thumbTwo,
    couple: "Catrin & Tim",
    alt: "Catrin and Tim wedding photography",
    variant: "tall",
  },
  {
    id: 3,
    image: thumbThree,
    couple: "Victoria & Oscar",
    alt: "Victoria and Oscar wedding photography",
    variant: "portrait",
  },
  {
    id: 4,
    image: thumbFour,
    couple: "Pippa & Josh",
    alt: "Pippa and Josh wedding photography",
    variant: "portrait",
  },
  {
    id: 5,
    image: thumbFive,
    couple: "Abbi & Craig",
    alt: "Abbi and Craig wedding photography",
    variant: "portrait",
  },
  {
    id: 6,
    image: thumbSix,
    couple: "Alice & Kris",
    alt: "Alice and Kris wedding photography",
    variant: "portrait",
  },
  {
    id: 7,
    image: thumbSeven,
    couple: "Kathryn & Brendan",
    alt: "Kathryn and Brendan wedding photography",
    variant: "portrait",
  },
  {
    id: 8,
    image: thumbEight,
    couple: "Laurie & Glen",
    alt: "Laurie and Glen wedding photography",
    variant: "landscape",
  },
  {
    id: 9,
    image: thumbNine,
    couple: "Lucy & Callum",
    alt: "Lucy and Callum wedding photography",
    variant: "portrait",
  },
  {
    id: 10,
    image: thumbTen,
    couple: "Rhona & Stewart",
    alt: "Rhona and Stewart wedding photography",
    variant: "portrait",
  },
  {
    id: 11,
    image: thumbEleven,
    couple: "Rachel & Dom",
    alt: "Rachel and Dom wedding photography",
    variant: "landscape",
  },
  {
    id: 12,
    image: thumbTwelve,
    couple: "Rosie & Ben",
    alt: "Rosie and Ben wedding photography",
    variant: "portrait",
  },
  {
    id: 13,
    image: thumbThirteen,
    couple: "Megan & Connor",
    alt: "Megan and Connor wedding photography",
    variant: "portrait",
  },
  {
    id: 14,
    image: thumbFourteen,
    couple: "Nicole & Alex",
    alt: "Nicole and Alex wedding photography",
    variant: "landscape",
  },
  {
    id: 15,
    image: thumbFifteen,
    couple: "Hannah & Xigg",
    alt: "Hannah and Xigg wedding photography",
    variant: "portrait",
  },
  {
    id: 16,
    image: thumbSixteen,
    couple: "Carrie & Angus",
    alt: "Carrie and Angus wedding photography",
    variant: "portrait",
  },
  {
    id: 17,
    image: thumbSeventeen,
    couple: "Lowri & Dan",
    alt: "Lowri and Dan wedding photography",
    variant: "portrait",
  },
  {
    id: 18,
    image: thumbEighteen,
    couple: "Emily & Tom",
    alt: "Emily and Tom wedding photography",
    variant: "portrait",
  },
];

export { HeroImg, WorkImage, works };
