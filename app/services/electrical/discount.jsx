import Link from "next/link";
import Image from "next/image";
import tapDiscount from "@/public/images/tapDiscount.png";

export default function Discount() {
  return (
    <section className="w-full py-24  container">
      <div className="lg:h-[601px] lg:w-[1000px]  bg-cerreneDarkOrange  overflow-hidden mx-auto">
        <div className=" flex h-full rounded-2xl flex-shrink-0  flex-col items-center justify-center bg-cerrene gap-12 ">
          <div className="font-medium self-center italic text-cerreneYellow lg:text-[48px] text-[32px] text-center leading-[130%] lg:w-[643px]  ">
            Get 15% off your first appointment with Cerrene!
          </div>
          <div className="font-satoshi self-center italic text-cerreneYellow text-[32px] text-center leading-[130%] lg:w-[678px]  ">
            Trust Cerrene&apos;s expert electricians to handle all your
            electrical needs with precision and care.
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/contact"
              className="h-[60px] font-satoshi font-bold text-white  w-[277px] bg-cerreneOrange flex items-center justify-center rounded"
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="h-[60px] font-satoshi font-bold text-cerreneOrange  w-[277px] border border-cerreneOrange flex items-center justify-center rounded"
            >
              Get Hired
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
