import Image from "next/image";
import Link from "next/link";
import Dots from "@/public/utils/dots";
import tapsPlumbing from "@/public/images/tapsPlumbing.png";

export default function Experience() {
  return (
    <section className="relative">
      <Dots className=" md:-right-[46px] slg:top-[134px] md:top-[112px] top-[124px] -right-[196px] " />
      <Dots className="-left-9 slg:-left-5 bottom-2 z-20 " />
      <div className="bg-cerreneOffWhite slg:h-[94px] h-[60px] md:h-[80px]  w-full inset-0 z-10"></div>
      <div className=" relative slg:py-10 md:py-8 py-16  font-medium container flex-col gap-12 flex md:flex-row slg:gap-7 md:gap-5 lg:gap-10 overflow-hidden">
        <div className="relative md:flex hidden lg:w-[506px] md:w-[375px] md:h-[500px] slg:w-[480px] lg:h-[664px] slg:h-[600px] rounded-[20px] overflow-hidden flex-shrink-0">
          <Image src={tapsPlumbing} alt="" className="object-cover " fill />
        </div>
        <div className="flex flex-col lg:gap-10 slg:gap-7 md:gap-5 gap-6 justify-center md:items-start items-center text-center md:text-left">
          <h2 className="lg:text-[66px] md:text-[30px] text-[43px] slg:text-[44px] xl:text-[72px] text-cerreneGreen  ">
            {" "}
            Plumbing <span className="italic">Perfection</span>: Cerrene&apos;s
            Expertise.
          </h2>
          <p className="lg:text-xl slg:text-lg lg:w-[518px] font-satoshi leading-[140%]">
            Dive into a world of plumbing excellence with Cerrene. From leak
            repairs to installations, We&apos;ve got you covered. Contact us
            today!
          </p>
          <Link
            href="/contact"
            className="h-[60px] font-satoshi font-bold text-white  w-[277px] bg-cerreneOrange flex items-center justify-center rounded"
          >
            Contact Us
          </Link>
        </div>
        <div className="relative flex md:hidden h-[492px] w-full rounded-[20px] overflow-hidden flex-shrink-0">
          <Image src={tapsPlumbing} alt="" className="object-cover " fill />
        </div>
      </div>
    </section>
  );
}
