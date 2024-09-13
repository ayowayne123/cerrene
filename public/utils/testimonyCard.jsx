import Button from "@/public/utils/button";
import Image from "next/image";
import circles from "@/public/images/circles.svg";

export default function TestimonyCard({
  text,
  username,
  occupation,
  src,
  location,
  className,
}) {
  return (
    <div
      className={`lg:w-[479px] slg:w-[400px] md:w-[510px] absolute w-[312px] p-4 md:p-6 text-white flex flex-col gap-4 rounded-[20px] overflow-hidden ${className}`}
    >
      <div className=" leading-[130%] lg:text-xl slg:text-lg md:text-base text-[13px] font-satoshi">
        {text}
      </div>
      <div className="flex flex-row gap-4 items-center">
        <div className="relative h-8 w-8 lg:h-12 lg:w-12 ">
          <Image
            src={src}
            className="object-contain"
            alt="photo of testimony giver"
            fill
          />
        </div>
        <div className="flex flex-col">
          <span className="lg:text-xl slg:text-lg md:text-base text-[13px]  font-bold m-0">
            {username}
          </span>
          <span className="font-satoshi md:text-base text-[10px] ">
            {occupation}, {location}.
          </span>
        </div>
      </div>
    </div>
  );
}
