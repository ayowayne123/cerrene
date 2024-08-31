import React from "react";
import Image from "next/image";
import heroElectrical from "@/public/images/heroElectrical.png";
import Link from "next/link";

function Hero() {
  return (
    <section className="h-dvh min-h-[600px] max-h-[950px] overflow-hidden">
      <div className="bg-cerreneOffWhite lg:h-[94px]  w-full inset-0 z-10"></div>

      <div className="relative lg:py-10 lg:h-full  font-medium container flex flex-row gap-10 overflow-hidden">
        <Image src={heroElectrical} alt="" fill className="object-cover" />
        <div className="bg-[#4C4D1666] absolute inset-0 h-full w-full text-[#FFF7EB]">
          <h1 className="leading-[120%] font-medium mx-auto lg:w-[680px] xl:w-[730px] lg:text-[66px] xl:text-[72px]  text-center lg:pt-28 xl:pt-32 ">
            <span className="italic font-semibold">Excellence</span> in Every
            Connection
          </h1>
          <p className="font-satoshi lg:text-xl italic mx-auto text-center leading-[140%] lg:w-[546px] py-10 ">
            Cerrene&apos;s electrical services bring power, precision, and peace
            of mind to your home or business.
          </p>
          <Link
            href="/contact"
            className="h-[60px] mx-auto font-satoshi font-bold text-white  w-[277px] bg-cerreneOrange flex items-center justify-center rounded"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
