import Button from "@/public/utils/button";

export default function Hero() {
  return (
    <section className=" h-dvh w-full flex flex-col items-center justify-center gap-5 py-10 ">
        <div className="uppercase font-satoshi text-sm text-cerreneLightGreen tracking-[4%] flex items-center justify-center">discover cerrene</div>
        <p className="font-literata font-medium text-[43px]  text-center text-cerreneGreen"> <span className="italic font-semibold">Sparkling </span> Clean Meets <span className="italic font-semibold">Reliable</span>  Repair.</p>
   <div className="text-[14px] leading-[24px] text-center font-satoshi">We don&apos;t just clean or fix – we elevate. From pristine cleanliness to expert repairs, we&apos;re dedicated to exceeding your expectations every step of the way.</div>
   <div className="w-[220px] h-12 bg-cerreneOrange text-white flex items-center justify-center ">Contact Us</div>
   <Button type="primary" className="">This Button</Button>
    </section>
  );
}
