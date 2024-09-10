import Link from "next/link";
import Image from "next/image";
import tapDiscount from "@/public/images/tapDiscount.png";

export default function Discount() {
  return (
    <section className="w-full py-24  container">
      <div className="slg:h-[601px] md:h-[550px] h-[473px] rounded-[20px] lg:w-[1000px] w-full bg-cerreneDarkOrange  overflow-hidden mx-auto">
        <div className=" flex h-full rounded-2xl flex-shrink-0  flex-col items-center justify-center bg-cerrene gap-6 slg:gap-12 ">
          <div className="font-medium self-center italic text-cerreneYellow slg:text-[48px] text-[30px] md:text-[32px] text-center leading-[130%] slg:w-[643px]  ">
            Get 15% off your first appointment with Cerrene!
          </div>
          <div className="font-satoshi self-center italic text-cerreneYellow md:text-[26px] slg:text-[32px] text-center leading-[130%] slg:w-[678px] md:w-[500px] w-[310px] ">
            Trust Cerrene&apos;s expert electricians to handle all your
            electrical needs with precision and care.
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/" className="orangeSolidButton">
              Contact Us
            </Link>
            <Link href="/contact" className="orangeBorderButtonBig">
              Get Hired
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
