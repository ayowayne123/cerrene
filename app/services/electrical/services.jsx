import Image from "next/image";
import Link from "next/link";
import Dots from "@/public/utils/dots";
import plugIconServices from "@/public/icons/plugIconServices.svg";

const Imagecard = ({ title, text, services }) => {
  return (
    <div className=" grid grid-cols-2 ">
      <div className="flex flex-row gap-5">
        <div className="bg-cerreneLightGreen lg:w-[13px] lg:h-[153px] rounded-xl flex-shrink-0 translate-y-[14px]"></div>
        <div className="lg:w-[513px]">
          <h3 className="font-medium lg:text-[40px] pb-6 m-0">{title}</h3>
          <div className="lg:text-xl font-satoshi font-normal">{text}</div>
        </div>
      </div>
      <div>
        <div className="flex flex-col  lg:text-[28px] font-satoshi italic leading-[140%] gap-6 pb-12">
          {services.map((indi, index) => (
            <div className="flex items-center font-normal gap-5" key={index}>
              <i className="relative size-7 ">
                <Image
                  src={plugIconServices}
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
    text: "Cerrene offers a variety of residential electrical services to meet the diverse needs of homeowners. Some of the residential electrical services.",
    services: [
      "Electrical inspections",
      "Electrical repairs",
      "Lighting installation and repair",
      "Electrical panel upgrades",
      "Home automation installation & more",
    ],
  },
  {
    title: "Commercial",
    text: "Cerrene provides a range of commercial electrical services to businesses and commercial establishments",
    services: [
      "Electrical system design and installation",
      "Electrical upgrades and retrofits",
      "Lighting design and installation",
      "Electrical maintenance and repairs",
      "Data and communication wiring",
      "Energy efficiency solutions",
      "Code compliance and safety inspections",
    ],
  },
];

export default function Services() {
  return (
    <section>
      <div className="container pb-24 pt-7">
        <h2 className="font-medium lg:text-[50px] xl:text-[56px] py-8 ">
          Electrical Services We Offer
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
