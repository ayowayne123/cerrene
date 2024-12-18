import Link from "next/link";
import Image from "next/image";
import leaf from "@/public/images/leaf.png";
import handgloves from "@/public/images/handgloves.png";

export default function AboutHero() {
  return (
    <section className=" h-screen w-full min-h-[800px] lg:min-h-[800px] md:min-h-full  relative bg-cerreneLightGreen -z-10 overflow-hidden">
      <div className=" slg:pt-[94px] md:pt-[80px] pt-[60px] flex flex-col md:items-start items-center justify-center gap-6 slg:gap-10 py-10 container z-10">
        <div  data-aos="fade-left"
            data-aos-once="true"
             className="lg:mt-[140px] mt-[70px] flex-wrap font-literata justify-center font-medium  text-[43px] whitespace-pre lg:text-[72px] text-center slg:text-left text-white flex flex-row">
          <span  className="italic font-semibold">Exploring </span>
          <span>Our Foundation</span>
        </div>
        <div className="text-[14px] leading-[24px] text-white font-satoshi lg:w-[640px] slg:w-[530px] md:text-xl"  data-aos="flip-up"
            data-aos-once="true"
            data-aos-delay="300">
          Delve into Cerrene&apos;s roots, where passion & expertise converge to
          redefine cleanliness and repair services.
        </div>
        <Link href="https://wa.me/2347061686434?text=I%20want%20to%20find%20out%20more%20about%20Cerrene"
         target="_blank"
          rel="noopener noreferrer" 
          data-aos="flip-down"
            data-aos-once="true"
            data-aos-delay="500"
           className="orangeSolidButton ">
          Contact Us
        </Link>
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
