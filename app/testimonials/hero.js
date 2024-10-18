import React from "react";
import Link from "next/link";
import TestimonyCard from "@/public/utils/testimonyCard";
import ahmedTestimony from "@/public/images/testimonials/ahmedTestimony.png";
import mariaTestimony from "@/public/images/testimonials/mariaTestimony.png";
import tumiTestimony from "@/public/images/testimonials/tumiTestimony.png";

function Hero() {
  return (
    <section className="h-screen min-h-[640px] max-h-[700px] slg:min-h-[780px] md:min-h-[750px] md:max-h-[850px] lg:max-h-[800px] bg-cerreneYellow md:rounded-b-[40px]  z-10">
      <div className="bg-cerreneYellow  top-gutter"></div>
      <div className="md:flex hidden flex-row container relative  h-full z-20">
        <div className="lg:px-16 slg:px-10 flex gap-10 flex-col slg:pt-[75px] md:pt-[60px] w-full  ">
          <h1 className="font-medium slg:text-[52px] md:text-[44px] lg:text-[66px] xl:text-[72px] text-cerreneGreen  md:w-[380px] slg:w-[450px] lg:w-[580px] xl:w-[620px] leading-[120%]">
            Real <span className="italic font-semibold">Experiences,</span> Real
            <span className="italic font-semibold">Satisfaction.</span>
          </h1>
          <Link
            href="/contact"
            className="h-[60px] font-satoshi font-bold text-white  w-[277px] bg-cerreneOrange flex items-center justify-center rounded"
          >
            Contact Us
          </Link>
        </div>
        <span className="font-satoshi font-normal lg:text-xl slg:text-lg md:w-[250px] lg:w-[389px] slg:w-[300px] md:pt-36 slg:pt-48 lg:pt-56 slg:mr-16 flex-shrink-0  ">
          Read on to see how we&apos;ve transformed spaces and earned the trust
          of homeowners and businesses in Nigeria and Botswana.
        </span>
        <div className="absolute -bottom-3 slg:-bottom-24 left-0 right-0 z-10 container slg:h-[460px] md:h-[480px]  ">
          <div className="h-full lg:w-[994px] slg:w-[850px] md:w-[500px] relative  mx-auto z-30 ">
            <TestimonyCard
              className="bg-cerreneLightGreen slg:-rotate-[3.9deg]  md:-rotate-[2.9deg] top-0 slg:top-[56px] left-0"
              text={`Cerrene\'s team did an amazing job! My home has never looked cleaner. Highly recommend their services.`}
              src={mariaTestimony}
              username="Maria Akorede"
              occupation="Home Owner"
              location="Banana Island"
            />
            <TestimonyCard
              className="bg-cerreneGreen slg:rotate-[7.5deg]  md:rotate-[4.9deg] top-40 slg:top-0 right-0 "
              text={`Fast, reliable, and professional. Cerrene fixed our electrical issues effortlessly. Great service!`}
              src={ahmedTestimony}
              username="Ahmed Sarafa"
              occupation="Business Owner"
              location="Victoria Island"
            />
            <TestimonyCard
              className="bg-cerreneLightGreen md:-rotate-[5.9deg] md:flex hidden slg:-rotate-[8.9deg] bottom-0 slg:left-[25%] z-40 "
              text={`Our plumbing problems were resolved quickly and efficiently by Cerrene. Excellent work and friendly staff.`}
              src={tumiTestimony}
              username="Tumi p"
              occupation="Business Owner"
              location="Gaborone"
            />
          </div>
        </div>
      </div>

      {/* mobile here */}
      <div className="flex md:hidden flex-col items-center container relative  h-full z-20">
        <div className=" items-center justify-center flex-col flex gap-6 py-12 w-[310px] ">
          <h1 className="font-medium text-center text-[36px] text-cerreneGreen  leading-[120%]">
            Real <span className="italic font-semibold">Experiences,</span> Real
            <span className="italic font-semibold">Satisfaction.</span>
          </h1>
          <span className="font-satoshi font-normal lg:text-xl slg:text-lg md:w-[250px] lg:w-[389px] slg:w-[300px] md:pt-36 slg:pt-48 lg:pt-56 slg:mr-16 flex-shrink-0  ">
            Read on to see how we&apos;ve transformed spaces and earned the
            trust of homeowners and businesses in Nigeria and Botswana.
          </span>
          <Link href="/contact" className="orangeSolidButton">
            Contact Us
          </Link>
        </div>

        <div className="absolute -bottom-1 left-0 right-0 z-10 container h-[300px]  ">
          <div className="h-full w-[310px] relative  mx-auto z-30 ">
            <TestimonyCard
              className="bg-cerreneLightGreen -rotate-[3.9deg] left-0 right-0  bottom-32"
              text={`Cerrene\'s team did an amazing job! My home has never looked cleaner. Highly recommend their services.`}
              src={mariaTestimony}
              username="Maria Akorede"
              occupation="Home Owner"
              location="Banana Island"
            />
            <TestimonyCard
              className="bg-cerreneGreen rotate-[7.5deg] left-0 right-0  bottom-0 "
              text={`Fast, reliable, and professional. Cerrene fixed our electrical issues effortlessly. Great service!`}
              src={ahmedTestimony}
              username="Ahmed Sarafa"
              occupation="Business Owner"
              location="Victoria Island"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
