import Image from "next/image";
import Link from "next/link";
import nigeriaBg from "@/public/images/nigeriaBg.png";
import botswanaBg from "@/public/images/botswanaBg.png";

export default function Serves() {
  return (
    <section className="relative h-[534px] w-full">
      <div className="grid grid-cols-2 w-full h-full gap-px">
        <div className="h-full w-full relative">
          <Image
            src={nigeriaBg}
            alt=""
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="h-full w-full relative">
          <Image
            src={botswanaBg}
            alt=""
            fill
            className="object-cover object-bottom"
          />
        </div>
      </div>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-[#9DA21F00] to-[#A0A422]">
        <div className="container text-white h-full slg:text-[40px] md:text-[34px] text-[24px] text-left italic leading-[130%] flex flex-col justify-end">
          <span className="pb-[52px] slg:w-[800px] md:w-[690px] w-full">
            {" "}
            <span className="font-satoshi">Cerrene serves </span>
            <span className="font-bold slg:text-[44px] md:text-[36px] text-[26px] ">
              Nigeria,
            </span>{" "}
            <span className="font-satoshi">and</span>{" "}
            <span className="font-bold slg:text-[44px] md:text-[36px] text-[26px] ">
              Botswana,
            </span>{" "}
            <span className="font-satoshi">
              providing premier cleaning, electrical, and plumbing services to
              both cities.
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
