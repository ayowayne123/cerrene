import Button from "@/public/utils/button";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className=" h-dvh w-full   relative bg-cerreneLightGreen ">
<div className=" flex flex-col items-start justify-center gap-5 py-10"> 
<div className=" mt-[94px] font-literata font-medium text-[43px] lg:text-[80px]  text-left text-white"> Exploring Our Foundation</div>
</div>
       
       
   <div className="text-[14px] leading-[24px] text-center font-satoshi lg:w-[648px] lg:text-lg">We don&apos;t just clean or fix – we elevate. From pristine cleanliness to expert repairs, we&apos;re dedicated to exceeding your expectations every step of the way.</div>
   <Button type="primary" className="w-[220px] h-12 rounded-sm bg-cerreneOrange">Contact Us</Button>
   <div className="bg-cerreneLightGreen w-[140px] h-[20px] md:w-[200px] md:h-[32px] flex lg:h-[51px] xl:w-[335px] lg:w-[300px] absolute left-0 bottom-0"></div>
    </section>
  );
}
