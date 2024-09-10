import Image from "next/image";
import Link from "next/link";
import Dots from "@/public/utils/dots";
import tapIconServices from "@/public/icons/tapIconServices.svg";

const Imagecard = ({ title, text, services }) => {
  return (
    <div className=" grid md:grid-cols-2 slg:gap-6 gap-8 md:gap-3 ">
      <div className="flex flex-row gap-5">
        <div className="bg-cerreneLightGreen w-[10px] h-[160px] slg:w-[13px] slg:h-[153px] rounded-xl flex-shrink-0 translate-y-[14px] "></div>
        <div className="lg:w-[513px] ">
          <h3 className="font-medium slg:text-[36px] text-3xl lg:text-[40px] pb-6 m-0">
            {title}
          </h3>
          <div className="slg:text-xl md:text-lg  font-satoshi font-normal">
            {text}
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col slg:text-xl md:text-base text-xl lg:text-[28px] font-satoshi italic leading-[140%] gap-6 pb-12">
          {services.map((indi, index) => (
            <div className="flex items-center font-normal gap-5" key={index}>
              <i className="relative size-7 ">
                <Image
                  src={tapIconServices}
                  alt="tapIconServices"
                  className="object-contain"
                  fill
                />
              </i>
              <p>{indi}</p>
            </div>
          ))}
        </div>

        <Link href="/" className="orangeSolidButton">
          Contact Us
        </Link>
      </div>
    </div>
  );
};
const serviceList = [
  {
    title: "Residential",
    text: "Our skilled team is dedicated to ensuring the integrity and functionality of your home's plumbing system, providing prompt and reliable service when you need it most.",
    services: [
      "Leak detection and repair",
      "Drain cleaning and unclogging",
      "Fixture Installation and repair",
      "Pipe repair and replacement",
      "Plumbing system inspections & more",
    ],
  },
  {
    title: "Commercial",
    text: "From comprehensive drain cleaning and restroom maintenance to kitchen plumbing and emergency repairs, we provide reliable solutions tailored to your commercial needs.",
    services: [
      "Commercial drain cleaning",
      "Restroom plumbing",
      "Water heater services",
      "Backflow prevention",
      "Gas Plumbing services",
      "Pipe repair and replacement",
      "Plumbing system inspections & more",
    ],
  },
];

export default function Services() {
  return (
    <section>
      <div className="container pb-24 pt-7">
        <h2 className="font-medium slg:text-[50px] xl:text-[56px] text-[24px] md:text-[40px] py-8 ">
          Plumbing Services We Offer
        </h2>
        <div className="grid  gap-y-16 gap-x-6">
          {serviceList.map((card, index) => (
            <Imagecard
              services={card.services}
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
