import React from "react";
import Image from "next/image";
import servesBulb from "@/public/images/servesBulb.png";

function Serves() {
  return (
    <section className="mb-16 relative">
      <div className="container text-cerreneYellow h-full lg:text-[48px] text-left italic leading-[130%] flex justify-center">
        <span className=" bg-cerreneDarkOrange rounded-3xl lg:h-[720px] lg:pl-[252px] lg:pt-44 lg:pr-44 relative z-10 ">
          <div className="absolute inset-0 lg:h-3/4 -z-10">
            <div className="relative h-full w-full">
              <div className="absolute bg-[#F2C48C] rounded-full lg:w-[320px] -left-10 lg:h-[260px] top-40 blur-3xl"></div>
              <Image
                src={servesBulb}
                alt=""
                fill
                className="object-left object-contain "
              />
            </div>
          </div>
          <span className="font-satoshi">
            Cerrene proudly offers top-quality electrical services in both
          </span>
          <span className="font-bold"> Nigeria,</span>{" "}
          <span className="font-satoshi">and </span>{" "}
          <span className="font-bold">Botswana.</span>{" "}
          <span className="font-satoshi">
            Whether you need residential or commercial electrical solutions, our
            skilled professionals are ready to deliver excellence and
            reliability.
          </span>
        </span>
      </div>
    </section>
  );
}

export default Serves;
