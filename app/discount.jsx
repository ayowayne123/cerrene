import Button from "@/public/utils/button";
import Link from "next/link";
import Image from "next/image";
import circles from "@/public/images/circles.svg";

export default function Discount() {
  return (
    <section className="w-full flex flex-col items-center lg:py-24 slg:py-16 py-10">
      <div className="relative overflow-hidden px-5 lg:px-12 slg:px-9 bg-cerreneYellow lg:w-[1140px] w-[311px] md:w-[650px] slg:w-[880px]  min-h-[460px] slg:min-h-[10px] rounded-xl ">
        <div className="flex h-full flex-col slg:flex-row slg:justify-between items-center">
          {/* Left Section: Text Content */}
          <div className="flex flex-col h-full pt-28 md:pt-4 md:pb-9 slg:py-6 pb-9 gap-8 slg:w-[500px] lg:w-[550px] order-last slg:order-first">
            <div className="italic text-[40px] font-medium text-center slg:text-left leading-[120%]">
              Special offer: <span>15% discount</span>
            </div>
            <div className="font-satoshi slg:text-xl md:text-lg text-sm text-center slg:text-left">
              Enjoy a 15% discount on your first appointment with Cerrene.
              Whether you need cleaning, electrical, or plumbing services, our
              expert team is ready to assist you.
            </div>
            <Link href="/" className="orangeSolidButton">
              Contact Us
            </Link>
          </div>

          {/* Right Section: Image */}
          <div className="md:relative absolute -top-56 md:top-0 md:bottom-0 left-0 right-0">
            <Image
              src={circles}
              alt="Circles illustration"
              width={306}
              height={345}
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
