import React from "react";
import Link from "next/link";
import TestimonyCard from "@/public/utils/testimonyCard";
import ahmedTestimony from "@/public/images/testimonials/ahmedTestimony.png";
import mariaTestimony from "@/public/images/testimonials/mariaTestimony.png";
import tumiTestimony from "@/public/images/testimonials/tumiTestimony.png";



function Hero() {
  return (
    <section className="h-dvh lg:min-h-[700px] lg:max-h-[800px] bg-cerreneYellow lg:rounded-b-[40px] overflow-hidden z-10">
      <div className="bg-cerreneYellow lg:h-[94px]  w-full inset-0 z-10"></div>
      <div className="flex flex-row container relative bg-red-400 h-full z-20">
        <div className="px-16 flex gap-10 flex-col pt-[75px] w-full ">
          <h1 className="font-medium lg:text-[66px] xl:text-[72px] text-cerreneGreen lg:w-[580px] xl:w-[620px] leading-[120%]">
            Real <span className="italic font-semibold">Experiences,</span> Real{" "}
            <span className="italic font-semibold">Satisfaction.</span>
          </h1>
          <Link
            href="/contact"
            className="h-[60px] font-satoshi font-bold text-white  w-[277px] bg-cerreneOrange flex items-center justify-center rounded"
          >
            Contact Us
          </Link>
        </div>
        <span className="font-satoshi font-normal lg:text-xl lg:w-[389px] lg:pt-56 lg:mr-16 flex-shrink-0  place-content-end">
          Read on to see how we&apos;ve transformed spaces and earned the trust
          of homeowners and businesses in Nigeria and Botswana.
        </span>
        <div className="absolute -bottom-24 left-0 right-0 z-30 container h-[460px] ">
        <div className="h-full lg:w-[994px] relative  mx-auto ">
        <TestimonyCard
      className="bg-cerreneLightGreen -rotate-[3.9deg] top-[56px] left-0"
      text={`Cerrene\'s team did an amazing job! My home has never looked cleaner. Highly recommend their services.`}
      src={mariaTestimony}
      username="Maria Akorede"
      occupation="Home Owner"
      location="Banana Island"
      />
       <TestimonyCard
      className="bg-cerreneGreen rotate-[7.5deg] top-0 right-0 "
      text={`Fast, reliable, and professional. Cerrene fixed our electrical issues effortlessly. Great service!`}
src={ahmedTestimony}
username="Ahmed Sarafa"
occupation="Business Owner"
      location="Victoria Island"
      
      />
      <TestimonyCard
      className="bg-cerreneLightGreen -rotate-[8.9deg] bottom-0 left-[25%] "
      text={`Our plumbing problems were resolved quickly and efficiently by Cerrene. Excellent work and friendly staff.`}
      src={tumiTestimony}
      username="Tumi p"
      occupation="Business Owner"
      location="Gaborone"
      />
        </div>

      </div>
      </div>
      
      
    </section>
  );
}

export default Hero;
