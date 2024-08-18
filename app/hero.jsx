import Button from "@/public/utils/button";

export default function Hero() {
  return (
    <section className=" h-dvh w-full flex flex-col items-center justify-center gap-5 py-10 ">
        <div className="uppercase font-satoshi w-full text-sm text-cerreneLightGreen tracking-[4%] flex items-center justify-center relative">discover cerrene

        <div className="bg-cerreneLightGreen w-[140px] h-[20px] md:w-[200px] md:h-[32px] flex lg:h-[51px] xl:w-[595px] lg:w-[550px] absolute right-0 "></div>
        </div>
        <p className="lg:w-[858px] font-literata font-medium text-[43px] lg:text-[80px]  text-center text-cerreneGreen"> <span className="italic font-semibold">Sparkling </span> Clean Meets <span className="italic font-semibold">Reliable</span>  Repair.</p>
   <div className="text-[14px] leading-[24px] text-center font-satoshi lg:w-[648px] lg:text-lg">We don&apos;t just clean or fix – we elevate. From pristine cleanliness to expert repairs, we&apos;re dedicated to exceeding your expectations every step of the way.</div>
   <Button type="primary" className="w-[220px] h-12 rounded-sm bg-cerreneOrange">Contact Us</Button>
   <div className="bg-cerreneLightGreen w-[140px] h-[20px] md:w-[200px] md:h-[32px] flex lg:h-[51px] xl:w-[335px] lg:w-[300px] absolute left-0 bottom-0"></div>
    </section>
  );
}
