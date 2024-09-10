import Button from "@/public/utils/button";
import Image from "next/image";
import leaf from "@/public/images/leaf.png";
import handgloves from "@/public/images/handgloves.png";

export default function AboutHero() {
  return (
    <section className=" h-screen w-full  lg:min-h-[800px]  relative bg-cerreneLightGreen -z-10 overflow-hidden">
      <div className=" slg:pt-[94px] md:pt-[80px] pt-[60px] flex flex-col md:items-start items-center justify-center gap-6 slg:gap-10 py-10 container z-10">
        <div className="lg:mt-[140px] mt-[70px] flex-wrap font-literata justify-center font-medium  text-[43px] whitespace-pre lg:text-[72px] text-center slg:text-left text-white flex flex-row">
          <span className="italic font-semibold">Exploring </span>
          <span>Our Foundation</span>
        </div>
        <div className="text-[14px] leading-[24px] text-white font-satoshi lg:w-[640px] slg:w-[530px] md:text-xl">
          Delve into Cerrene&apos;s roots, where passion & expertise converge to
          redefine cleanliness and repair services.
        </div>
        <Button
          type="primary"
          className="w-[220px] h-12 rounded-sm bg-cerreneOrange"
        >
          Contact Us
        </Button>
      </div>

      <div className=" absolute inset-0 -z-10">
        <Image src={leaf} alt="" fill />
      </div>
      <div className=" absolute right-0 top-0  h-full w-full md:flex hidden">
        <Image
          src={handgloves}
          alt=""
          className="object-contain object-right"
          fill
        />
      </div>
      <div className=" absolute right-0 top-0  h-full w-full flex md:hidden">
        <Image
          src={handgloves}
          alt=""
          className="object-contain  object-right-bottom"
          fill
        />
      </div>
      <div className=" absolute left-0 -bottom-[55px] italic -z-10  whitespace-pre right-0 text-center flex w-full text-[#4C4D1619] font-semibold italix lg:text-[200px] ">
        About Cerrene.
      </div>
    </section>
  );
}
