import Image from "next/image";
import cleanliness from "@/public/images/cleanliness.png";
import plumbing from "@/public/images/plumbing.png";
import electrical from "@/public/images/electrical.png";
import yinka from "@/public/images/yinka.jpg";
import tayo from "@/public/images/tayo.png";
import quote from "@/public/images/quote.png";
import Link from "next/link";

const Service = ({ type, src, heading, paragraph1, paragraph2, href }) => {
  return (
    <div
      data-aos-once="true"
      className={`grid  md:gap-6 xl:gap-10 ${
        type == "reverse"
          ? "lg:grid-cols-reverse slg:grid-cols-reverseSmall md:grid-cols-reverseMd"
          : "lg:grid-cols-services slg:grid-cols-servicesSmall md:grid-cols-servicesMd"
      } `}
    >
      <div
        className="relative md:w-full lg:h-[612px] md:h-[450px] slg:h-[500px] w-[311px] h-60 "
        data-aos="fade-left"
        data-aos-easing="ease-in"
        data-aos-once="true"
      >
        <Image src={src} alt="" className="object-cover" fill />
      </div>
      <div
        className={`flex flex-col justify-center ${
          type == "reverse" ? "md:order-first" : ""
        } `}
      >
        <h1
          className="lg:text-[48px] text-[32px] font-medium leading-[130%] mb-6 lg:mb-11"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-easing="ease-in"
        >
          {" "}
          {heading}
        </h1>
        <p
          className="font-satoshi text-sm md:text-base slg:text-lg lg:text-xl  mb-4"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-easing="ease-in"
        >
          {paragraph1}
        </p>
        <p
          className="font-satoshi text-sm md:text-base slg:text-lg lg:text-xl lg:mt-4"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-easing="ease-in"
        >
          {paragraph2}
        </p>
        <Link
          data-aos="flip-up"
          data-aos-once="true"
          data-aos-delay="300"
          href={href}
          className="mt-10 border border-cerreneOrange text-cerreneOrange font-satoshi flex items-center justify-center slg:h-[60px] slg:w-[197px] h-[48px] w-[160px] "
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

const Testimonials = ({ name, occupation, src, testimony }) => {
  return (
    <div className="grid slg:grid-cols-2 gap-10 lg:px-20 w-full">
      <div className="w-full slg:max-w-[600px] relative">
        <div
          className="w-full h-[464px] relative"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in"
        >
          <Image
            src={src}
            alt="photo of testimony giver"
            className="object-cover object-top"
            fill
          />
        </div>
        <h2
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-easing="ease-in"
          className="font-medium slg:py-4 text-[32px] text-center"
        >
          {name}
        </h2>
        <p
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-easing="ease-in"
          className="font-satoshi  text-xl text-center"
        >
          {occupation}
        </p>
      </div>
      <div
        className="flex flex-col justify-start gap-16"
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-easing="ease-in"
      >
        <div className="lg:text-[32px] slg:text-[28px] leading-[140%] md:text-[22px] relative w-full">
          {" "}
          <span className="font-satoshi">{testimony}</span>
          <div className="absolute md:-bottom-10 right-0 ">
            <div className="relative md:h-20 h-12 w-12 md:w-20">
              <Image
                src={quote}
                alt=""
                className="object-contain md:w-20 w-12 flex"
                fill
              />
            </div>
          </div>
        </div>
        <Link
          className="border-cerreneOrange text-cerreneOrange flex items-center justify-center border h-[48px] w-[160px]  slg:h-[60px] slg:w-[197px]"
          href="/testimonials"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

const serviceData = [
  {
    type: "",
    src: cleanliness,
    heading: "Immaculate Cleanliness.",
    paragraph1:
      "Our cleaning services at Cerrene are more than just a wipe-down. We pride ourselves on delivering immaculate cleanliness that transforms your space into a sanctuary.",
    paragraph2:
      "Whether it's your home, office, or commercial space, our meticulous attention to detail ensures a sparkling clean environment every time.",
    href: "/services/cleaning",
  },
  {
    type: "reverse",
    src: electrical,
    heading: "Expert Electrical Services.",
    paragraph1:
      "From installations and upgrades to repairs and troubleshooting, we handle it all with precision and expertise. ",
    paragraph2:
      "Whether you need new lighting fixtures, circuit repairs, or panel upgrades, you can count on us to deliver reliable solutions tailored to your needs.",
    href: "/services/electrical",
  },
  {
    type: "",
    src: plumbing,
    heading: "Plumbing Expertise.",
    paragraph1:
      "From leaky faucets and clogged drains to pipe repairs and water heater installations, we tackle every plumbing challenge with efficiency and expertise. ",
    paragraph2:
      "With Cerrene, you can trust that your plumbing problems will be resolved quickly and effectively, allowing you to get back to your routine with peace of mind.",
    href: "/services/plumbing",
  },
];

const testimonialData = [
  {
    src: yinka,
    name: "Yinka Bamidele",
    occupation: "Author/Podcaster",
    testimony:
      "As an author and podcaster, I need a clean and organized environment to stay focused and productive. Cerrene's cleaning services have been outstanding. Their team always leaves my workspace spotless. The peace of mind they provide allows me to concentrate on my creative work without any distractions.",
  },
  {
    src: tayo,
    name: "Tayo Adeoluwa",
    occupation: "CEO. Prime Tech",
    testimony:
      "Cerrene's cleaning service has truly transformed my home. Their attention to detail is unmatched, and every surface sparkles when they're done. I couldn't be happier.",
  },
];

export default function Services() {
  return (
    <section className="text-[#4e4e4e] lg:py-24 slg:py-20 md:py-16 py-12 container">
      <h1 className="leading-[110%] font-medium text-[36px] md:text-[40px] xl:text-[56px] lg:text-[48px]">
        Discover Our <span className="italic">Comprehensive</span> Services
      </h1>
      <div className="py-6 gap-6 lg:gap-6 flex flex-col">
        {serviceData.map((card, index) => (
          <Service
            type={card.type}
            src={card.src}
            heading={card.heading}
            paragraph1={card.paragraph1}
            paragraph2={card.paragraph2}
            key={index}
            href={card.href}
          />
        ))}
      </div>
      <h1 className="leading-[110%] font-medium text-[36px] xl:text-[56px] lg:text-[48px] mt-5 md:mt-8 slg:mt-2">
        Our Clients Speak For Themselves
      </h1>
      <span className="font-satoshi md:text-xl flex my-6">
        At Cerrene, we believe in letting our work speak for itself. But
        don&apos;t just take our word for it—hear from our satisfied clients
        themselves.
      </span>
      <div className="lg:gap-16  gap-6 slg:gap-8 flex flex-col shrink-0 w-full  pb-4">
        {testimonialData.map((card, index) => (
          <Testimonials
            type={card.type}
            src={card.src}
            name={card.name}
            occupation={card.occupation}
            testimony={card.testimony}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
