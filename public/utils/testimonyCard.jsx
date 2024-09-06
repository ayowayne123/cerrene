import Button from "@/public/utils/button";
import Image from "next/image";
import circles from "@/public/images/circles.svg";

export default function TestimonyCard({ text, username, occupation, src,location ,className}) {
  return (
    <div className={`w-[479px] absolute  p-6 text-white flex flex-col gap-4 rounded-[20px] overflow-hidden ${className}`}>
     
      <div className=" leading-[130%] lg:text-xl  font-satoshi">
        {text}
      </div>
      <div className="flex flex-row gap-4 items-center">
       <div className="relative h-8 w-8 lg:h-12 lg:w-12 ">
        <Image src={src} className="object-contain" alt="photo of testimony giver" fill/>
       </div>
       <div>
        <h4 className="lg:text-xl  font-bold">{username}</h4>
        <span className="font-satoshi ">{occupation }, {location}.</span>
       </div>
      </div>
    </div>
  );
}
