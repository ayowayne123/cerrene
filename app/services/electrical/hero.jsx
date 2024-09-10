import React from "react";
import Image from "next/image";
import heroElectrical from "@/public/images/heroElectrical.png";
import Link from "next/link";

function Hero() {
  return (
    <section className="h-screen min-h-[600px] lg:max-h-[950px] overflow-hidden">
      <div className="bg-cerreneOffWhite slg:h-[94px] h-[60px] md:h-[80px]  w-full inset-0 z-10"></div>

      <div className="relative h-full">
        <div className=" lg:py-10 h-full  font-medium container flex flex-row gap-10 overflow-hidden">
          <Image src={heroElectrical} alt="" fill className="object-cover" />
          <div className="bg-[#62632c66]  absolute inset-0 h-full w-full text-[#FFF7EB] flex flex-col items-center justify-center lg:block">
            <h1 className="leading-[120%] font-medium mx-auto slg:w-[680px] md:w-[600px] xl:w-[730px] w-[309px] text-[48px] md:text-[54px] slg:text-[66px] xl:text-[72px]  text-center lg:pt-28 xl:pt-32 ">
              <span className="italic font-semibold">Excellence</span> in Every
              Connection
            </h1>
            <p className="font-satoshi w-[309px] md:text-xl italic mx-auto text-center leading-[140%] md:w-[546px] py-10 ">
              Cerrene&apos;s electrical services bring power, precision, and
              peace of mind to your home or business.
            </p>
            <Link href="/" className="orangeSolidButton mx-auto">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
