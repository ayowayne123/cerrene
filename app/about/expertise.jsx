import Image from "next/image";
import cleanexpert from "@/public/images/cleanexpert.png";
import plumbingexpert from "@/public/images/plumbingexpert.png";
import electricexpert from "@/public/images/electricexpert.png";
import Link from "next/link";

const Imagecard = ({ src, title, text, link }) => {
  return (
    <div className="relative   ">
      <div className="lg:h-[355px] h-[280px] md:h-[455px] w-full gap-6 rounded-2xl overflow-hidden relative">
        <Image src={src} alt="" className="object-cover" fill />
      </div>
      <div className="lg:pr-8 slg:pr-1.5 pb-5">
        <h3 className="font-medium leading-[130%] capitalize lg:text-[40px] text-[36px] md:text-[40px] py-4">
          {title}
        </h3>
        <p className="font-satoshi py-2 leading-[140%] lg:text-[20px] text-[18px] md:text-[20px] ">
          {text}
        </p>
      </div>
      <Link
        href={link}
        className="border border-cerreneOrange text-cerreneOrange font-satoshi px-10 py-2"
      >
        Learn More
      </Link>
    </div>
  );
};

const imageDetails = [
  {
    src: cleanexpert,
    title: "cleaning services",
    text: "Our cleaning services at Cerrene are more than just a wipe-down. We pride ourselves on delivering immaculate cleanliness that transforms your space into a sanctuary.",
    link: "/services/cleaning",
  },
  {
    src: plumbingexpert,
    title: "Electrical Services",
    text: "From installations and upgrades to repairs and troubleshooting, we handle it all with precision and expertise. You can always count on us.",
    link: "/services/electrical",
  },
  {
    src: electricexpert,
    title: "plumbing services",
    text: "From leaky faucets and clogged drains to pipe repairs and water heater installations, we tackle every plumbing challenge with efficiency and expertise.",
    link: "/services/plumbing",
  },
];
export default function Expertise() {
  return (
    <section className="lg:py-[96px] py-16 md:py-20 text-[#4e4e4e]">
      <div className="container">
        <h3 className="lg:text-[50px] xl:text-[56px] md:text-[48px] text-4xl font-medium leading-[110%] ">
          Our Expertise
        </h3>
        <div className="grid slg:grid-cols-3 lg:gap-6 slg:gap-3 md:gap-8 gap-6 lg:py-8 md:pt-12 pt-8">
          {imageDetails.map((card, index) => (
            <Imagecard
              src={card.src}
              title={card.title}
              text={card.text}
              link={card.link}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
