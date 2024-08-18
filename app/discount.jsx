import Button from "@/public/utils/button";
import Image from "next/image";
import circles from "@/public/images/circles.svg";

export default function Discount() {
  return (
    <section className="w-full flex flex-col items-center lg:py-24 py-10">
      <div className="relative overflow-hidden px-5 lg:px-12 bg-cerreneYellow lg:w-[1140px] w-[311px] min-h-[460px] lg:min-h-[10px] rounded-xl ">
        <div className="flex h-full flex-col lg:flex-row lg:justify-between">
          {/* Left Section: Text Content */}
          <div className="flex flex-col h-full pt-28 lg:pt-9 pb-9 lg:pb-12 gap-8 lg:w-[550px] order-last lg:order-first">
            <div className="italic text-[40px] font-medium text-center lg:text-left leading=[120%]">
              Special offer: <span>15% discount</span>
            </div>
            <div className="font-satoshi lg:text-xl text-sm text-center lg:text-left">
              Enjoy a 15% discount on your first appointment with Cerrene.
              Whether you need cleaning, electrical, or plumbing services, our
              expert team is ready to assist you.
            </div>
            <Button
              type="primary"
              className="w-[220px] h-12 rounded-sm bg-cerreneOrange text-white place-self-center lg:place-self-start"
            > Contact Us
            </Button>
          </div>

          {/* Right Section: Image */}
          <div className="md:relative absolute -top-56 md:top-0 left-0 right-0">
            <Image
              src={circles}
              alt="Circles illustration"
        
              width={306}
              height={345}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
