import Button from "@/public/utils/button";
import Image from "next/image";
import circles from "@/public/images/circles.svg";

export default function Quote({ text, username, occupation, src, className }) {
  return (
    <div className="text-[#4e4e4e]  shrink">
      <div
        className={`xl:w-[424px] lg:w-[380px] px-[30px] py-[60px] bg-cerreneYellow flex flex-col gap-4 relative rounded-[20px] border-cerreneGreen border-2 ${className}`}
      >
        <div className="absolute text-[200px] text-cerreneLightGreen leading-[70%] -top-5 left-0 font-semibold ">
          “
        </div>
        <div className=" leading-[130%] lg:text-xl  font-satoshi">{text}</div>

        <div className="bg-red-500"></div>
      </div>
      <div className="flex flex-row gap-4 items-center px-16 py-3 ">
        <div className="relative h-8 w-8 lg:h-[56px] lg:w-[56px] ">
          <Image
            src={src}
            className="object-contain"
            alt="photo of testimony giver"
            fill
          />
        </div>

        <div>
          <h4 className="lg:text-2xl  font-bold">{username}</h4>
          <span className="font-satoshi ">{occupation}</span>
        </div>
      </div>
    </div>
  );
}
