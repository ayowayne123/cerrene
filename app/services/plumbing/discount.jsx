import Link from "next/link";
import Image from "next/image";
import tapDiscount from "@/public/images/tapDiscount.png";

export default function Discount() {
  return (
    <section className="w-full py-24  container">
      <div className="lg:h-[601px]  flex flex-row bg-cerreneDarkGreen gap-6  overflow-hidden">
        <div className=" flex h-full rounded-2xl flex-shrink-0 w-2/3 flex-col items-center justify-center bg-cerreneGreen gap-12 ">
          <div className="font-satoshi self-center italic text-cerreneYellow text-[32px] text-center leading-[130%] lg:w-[472px]  ">
            Ready to experience top-notch plumbing services?
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="h-[60px] font-satoshi font-bold text-cerreneYellow  w-[277px] bg-cerreneLightGreen flex items-center justify-center rounded"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="h-[60px] font-satoshi font-bold text-cerreneLightGreen  w-[277px] border border-cerreneLightGreen flex items-center justify-center rounded"
            >
              Get Hired
            </Link>
          </div>
        </div>
        <div className="relative h-full w-full rounded-2xl overflow-hidden">
          <Image src={tapDiscount} alt="" fill className="object-cover" />
          <div className="h-full w-full absolute text-bold inset-0 bg-[#F071274d] leading-[120%] text-white flex items-center justify-center font-semibold lg:text-[44px] xl:text-[48px] lg:px-10">
            Enjoy a 15% discount on your first service.
          </div>
        </div>
      </div>
    </section>
  );
}
