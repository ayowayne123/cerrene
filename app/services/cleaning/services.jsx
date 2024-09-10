import Image from "next/image";
import Link from "next/link";
import Dots from "@/public/utils/dots";
import commercialCleaning from "@/public/images/commercialCleaning.png";
import postConstructionCleaning from "@/public/images/postConstructionCleaning.png";
import eventsCleaning from "@/public/images/eventsCleaning.png";
import moveInCleaning from "@/public/images/moveInCleaning.png";
import regularCleaning from "@/public/images/regularCleaning.png";
import deepCleaning from "@/public/images/deepCleaning.png";

const Imagecard = ({ src, title, text }) => {
  return (
    <div className="relative flex flex-col justify-between items-center md:items-start  ">
      <div>
        <div className="lg:h-[355px] h-[180px] md:h-[250pxw -full gap-6 rounded-2xl overflow-hidden relative">
          <Image src={src} alt="" className="object-cover" fill />
        </div>
        <div className="pb-5 lg:pr-12 slg:pr-8 flex flex-col items-center md:items-start ">
          <h3 className="font-medium leading-[130%] capitalize lg:text-[40px] md:text-[30px] text-[20px] py-4">
            {title}
          </h3>
          <p className="font-satoshi py-2 leading-[140%] lg:text-[20px] text-[12px] text-center md:text-left md:text-[18px] md:w-full w-[280px] ">
            {text}
          </p>
        </div>
      </div>

      <Link href="/" className="orangeSolidButton">
        Contact Us
      </Link>
    </div>
  );
};

const imageDetails = [
  {
    src: commercialCleaning,
    title: "Commercial Cleaning",
    text: "Cleaning services for office buildings, retail spaces, restaurants, and other commercial establishments, including regular janitorial services.",
  },
  {
    src: postConstructionCleaning,
    title: "Post-Construction Cleaning",
    text: "Specialized cleaning services to remove dust, debris, and residue left behind after construction or renovation projects.",
  },
  {
    src: eventsCleaning,
    title: "Events Cleaning",
    text: "Cleaning services before and after events, parties, or gatherings to ensure venues are clean, sanitary, and presentable.",
  },
  {
    src: moveInCleaning,
    title: "Move-In/Move-Out Cleaning",
    text: "Cleaning services designed to prepare a space for new occupants or restore it to pristine condition after moving out.",
  },
  {
    src: regularCleaning,
    title: "Regular Cleaning",
    text: "Scheduled cleaning services to maintain cleanliness and tidiness on a recurring basis, such as weekly or bi-weekly visits.",
  },
  {
    src: deepCleaning,
    title: "Deep Cleaning",
    text: "Thorough and comprehensive cleaning that targets areas not typically covered in regular cleaning, such as behind appliances, inside cabinets, and baseboards.",
  },
];

export default function Services() {
  return (
    <section className="z-20">
      <div className="container pb-24 pt-7">
        <h2 className="font-medium slg:text-[50px] text-[24px] md:text-[40px] xl:text-[56px] md:py-8 z-40 ">
          Cleaning Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-y-9 gap-x-4 slg:gap-y-16 slg:gap-x-6 py-8">
          {imageDetails.map((card, index) => (
            <Imagecard
              src={card.src}
              title={card.title}
              text={card.text}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
