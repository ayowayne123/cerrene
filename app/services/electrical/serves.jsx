import React from "react";
import Image from "next/image";
import servesBulb from "@/public/images/servesBulb.png";

function Serves() {
  return (
    <section className="mb-16 relative">
      <div className="container text-cerreneYellow h-full slg:text-[40px] lg:text-[48px] md:text-[30px] text-left italic leading-[130%] flex justify-center">
        <span className=" bg-cerreneDarkOrange rounded-3xl md:h-[500px] slg:h-[650px] lg:h-[720px] slg:pl-[252px] md:pr-16 md:pt-28 md:pl-[160px] lg:pb-0 slg:pb-20 slg:pt-44 slg:pr-20 lg:pr-44 relative z-10 ">
          <div className="absolute inset-0 slg:h-3/4 -z-10">
            <div className="relative h-full w-full">
              <div className="absolute bg-[#F2C48C] rounded-full md:w-[240px] md:h-[200px] slg:w-[320px] md:top-28  slg:-left-10 slg:h-[260px] slg:top-40 blur-3xl"></div>
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
