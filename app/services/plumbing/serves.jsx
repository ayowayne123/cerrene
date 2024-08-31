import React from "react";
import Image from "next/image";
import servesPlumbingDoodle from "@/public/icons/servesPlumbingDoodle.svg";

function Serves() {
  return (
    <section className="bg-cerreneLightGreen lg:h-[305px] relative">
      <Image
        src={servesPlumbingDoodle}
        alt=""
        fill
        className="right-0 object-right object-contain  "
      />
      <div className="container text-cerreneYellow h-full text-[40px] text-left italic leading-[130%] flex flex-col justify-center">
        <span className="w-[918px]">
          {" "}
          <span className="font-satoshi">
            Cerrene proudly serves clients in both{" "}
          </span>
          <span className="font-bold text-[44px]">Nigeria,</span>{" "}
          <span className="font-satoshi">and</span>{" "}
          <span className="font-bold text-[44px]">Botswana,</span>{" "}
          <span className="font-satoshi">
            delivering top-quality services with professionalism and expertise.
          </span>
        </span>
      </div>
    </section>
  );
}

export default Serves;
