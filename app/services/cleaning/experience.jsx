import star from "@/public/icons/star.svg";
import Image from "next/image";
import Link from "next/link";
import Dots from "@/public/utils/dots";

export default function Experience() {
  return (
    <section className="">
      <div className="bg-cerreneOffWhite  slg:h-[94px] h-[60px] md:h-[80px]  w-full inset-0 z-10"></div>
      <div className="mx-auto leading-[120%] relative text-center slg:text-[72px] text-[27px] w-[260px] md:text-[56px] pt-[72px] slg:pt-20 xl:pt-[91px] font-medium slg:w-[677px] md:w-[530px] text-cerreneGreen mb-6 md:mb-2">
        Experience a New Level of{" "}
        <span className="font-semibold  italic"> Cleanliness</span>
        <Image
          src={star}
          alt=""
          className="absolute h-9 w-9 rotate-[23deg] md:rotate-0 md:w-[82px] md:h-[84px] object-contain md:bottom-20 xl:bottom-[91px] md:-right-24 -right-9 bottom-6"
        />
      </div>
      <Link
        href="/contact"
        className="h-[60px] mx-auto my-9 font-satoshi font-bold text-white  w-[277px] bg-cerreneOrange hidden md:flex items-center justify-center rounded"
      >
        Contact Us
      </Link>
      <div className="w-full md:h-[357px] h-[390px] relative  z-10 ">
        <div className="z-10 bg-aboutBg h-full w-full bg-red-200">
          <Dots className="z-20 -left-5 -top-[56px] md:flex hidden " />
          <Dots className="-z-10 -right-[66px] -bottom-[42px] " />
          <Dots className="-z-30 -left-[58px] -bottom-[156px] origin-top rotate-90 slg:flex hidden" />
        </div>
      </div>
      <Link
        href="/contact"
        className="h-[60px] mx-auto mb-9 mt-12 z-20 font-satoshi font-bold text-white  w-[277px] bg-cerreneOrange md:hidden flex items-center justify-center rounded"
      >
        Contact Us
      </Link>
    </section>
  );
}
