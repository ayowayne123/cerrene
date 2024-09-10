import React from "react";
import Image from "next/image";
import servesPlumbingDoodle from "@/public/icons/servesPlumbingDoodle.svg";

function Serves() {
  return (
    <section className="bg-cerreneLightGreen slg:h-[305px] h-[365px] relative">
      <Image
        src={servesPlumbingDoodle}
        alt=""
        fill
        className=" object-right md:object-contain object-cover h-full slg:w-full w-10 "
      />
      <div className="container text-cerreneYellow h-full slg:text-[40px] md:text-[30px] text-[24px] text-left italic leading-[130%] flex flex-col justify-center">
        <span className="lg:w-[918px] md:w-[580px] pl-0 md:pl-20 slg:pl-0">
          {" "}
          <span className="font-satoshi">
            Cerrene proudly serves clients in both{" "}
          </span>
          <span className="font-bold text-[24px] md:text-[32px]  slg:text-[44px]">
            Nigeria,
          </span>{" "}
          <span className="font-satoshi">and</span>{" "}
          <span className="font-bold text-[24px] md:text-[32px]  slg:text-[44px]">
            Botswana,
          </span>{" "}
          <span className="font-satoshi">
            delivering top-quality services with professionalism and expertise.
          </span>
        </span>
      </div>
    </section>
  );
}

export default Serves;
