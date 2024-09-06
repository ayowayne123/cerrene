import Button from "@/public/utils/button";
import Image from "next/image";

import constellations from "@/public/images/constellations.svg";

export default function Hero() {
  return (
    <section className=" h-dvh w-full lg:min-h-[800px] min-h-[650px] flex flex-col items-center justify-center gap-5 py-10 relative">
      <div className="bg-white lg:h-[94px] h-[60px] md:h-[72px] absolute w-full inset-0 z-10"></div>
      <Image
        src={constellations}
        alt=""
        className="object-cover hero-svg "
        fill
      />
      <div className="uppercase font-satoshi w-full text-sm text-cerreneLightGreen animate-slide-up tracking-[4%] flex items-center justify-center relative z-20">
        discover cerrene
        <div className="bg-cerreneLightGreen w-[140px] h-[20px] md:w-[300px] slg:w-[400px] md:h-[32px] slg:h-[44px] hidden md:flex lg:h-[51px] xl:w-[595px] lg:w-[550px] absolute right-0  animate-slide-in-right"></div>
      </div>
      <p
        className="slg:w-[858px] animate-slide-up delay-400 font-literata font-medium text-[48px] md:text-[56px] slg:text-[70px] lg:text-[80px] z-20  text-center text-cerreneGreen"
        style={{ opacity: 0, animationDelay: "0.25s" }}
      >
        <span className="italic font-semibold">Sparkling </span> Clean Meets{" "}
        <span className="italic font-semibold">Reliable</span> Repair.
      </p>
      <div
        className="text-[14px] animate-slide-up delay-600 z-20 leading-[24px] text-center font-satoshi md:w-[648px] md:text-lg px-3 lg:px-0"
        style={{ opacity: 0, animationDelay: "0.5s" }}
      >
        We don&apos;t just clean or fix – we elevate. From pristine cleanliness
        to expert repairs, we&apos;re dedicated to exceeding your expectations
        every step of the way.
      </div>
      <Button
        type="primary"
        className="w-[220px] animate-fade-in z-20 h-12 rounded-sm bg-cerreneOrange"
        style={{ opacity: 0, animationDelay: "15s" }}
      >
        Contact Us
      </Button>
      <div className="bg-cerreneLightGreen w-[140px] h-[20px] md:w-[200px] md:h-[32px] flex lg:h-[51px] xl:w-[335px] lg:w-[300px] absolute left-0 bottom-0 animate-slide-in-left"></div>
    </section>
  );
}
