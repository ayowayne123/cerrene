import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <section className="h-dvh lg:min-h-[600px] lg:max-h-[800px] bg-cerreneYellow lg:rounded-b-[40px] overflow-hidden">
      <div className="bg-cerreneYellow lg:h-[94px]  w-full inset-0 z-10"></div>
      <div className="flex flex-row container">
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
        <span className="font-satoshi lg:text-xl lg:w-[389px] flex lg:pt-56 place-content-end   ">
          Read on to see how we&apos;ve transformed spaces and earned the trust
          of homeowners and businesses in Nigeria and Botswana.
        </span>
      </div>
    </section>
  );
}

export default Hero;
