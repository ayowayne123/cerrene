import Link from "next/link";
import Image from "next/image";
import tapDiscount from "@/public/images/tapDiscount.png";

export default function Discount() {
  return (
    <section className="w-full slg:py-24 py-16  slg:container ">
      <div className="bg-cerreneDarkOrange w-full slg:w-[900px] lg:w-[1073px] mx-auto flex flex-col gap-6 items-center justify-center py-[60px] overflow-hidden rounded-none slg:rounded-2xl">
        <h2 className="text-cerreneYellow flex flex-col items-center justify-center font-medium text-[32px] slg:text-[40px] lg:text-[48px] leading-[130%] text-center w-[280px] md:w-[500px] slg:w-[580px]  lg:w-[640px] ">
          <span>Join Our Satisfied Customers.</span>
          <span> Get 15% off now!</span>
        </h2>
        <p className="italic font-satoshi text-center slg:text-xl lg:text-3xl text-cerreneYellow w-[280px] md:w-[500px] slg:w-[580px]  lg:w-[640px] ">
          You too can let others know how we made a difference in your home or
          business.
        </p>
        <div className="flex flex-col gap-4">
          <Link href="/" className="orangeSolidButton">
            Contact Us
          </Link>
          <Link href="/contact" className="orangeBorderButtonBig">
            Get Hired
          </Link>
        </div>
      </div>
    </section>
  );
}
