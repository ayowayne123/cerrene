import Link from "next/link";
import Image from "next/image";
import tapDiscount from "@/public/images/tapDiscount.png";

export default function Discount() {
  return (
    <section className="w-full py-24  container">
      <div className="slg:h-[601px] md:h-[550px]  flex flex-col md:flex-row bg-cerreneDarkGreen gap-6  overflow-hidden">
        <div className=" flex md:h-full h-[468px] rounded-2xl flex-shrink-0 md:w-3/5 lg:w-2/3 slg:w-3/5 flex-col items-center justify-center bg-cerreneGreen gap-10 ">
          <div className="font-satoshi self-center italic text-cerreneYellow md:text-[28px] text-[24px] slg:text-[32px] text-center leading-[130%] slg:w-[472px]  ">
            Ready to experience top-notch plumbing services?
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/contact"
              className="h-[60px] font-satoshi font-bold text-cerreneYellow  w-[277px] bg-cerreneLightGreen flex items-center justify-center rounded"
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="h-[60px] font-satoshi font-bold text-cerreneLightGreen  w-[277px] border border-cerreneLightGreen flex items-center justify-center rounded"
            >
              Get Hired
            </Link>
          </div>
        </div>
        <div className="relative md:h-full h-[468px] w-full rounded-2xl overflow-hidden">
          <Image src={tapDiscount} alt="" fill className="object-cover" />
          <div className="h-full w-full absolute text-bold inset-0 bg-[#F071274d] leading-[120%] text-white flex items-center justify-center font-semibold md:text-[32px] px-8 text-[40px]  slg:text-[44px] xl:text-[48px] slg:px-10">
            Enjoy a 15% discount on your first service.
          </div>
        </div>
      </div>
    </section>
  );
}
