import Button from "@/public/utils/button";
import Image from "next/image";
import Link from "next/link";
import blogLine from "@/public/icons/blogLine.svg";

export default function Hero() {
  return (
    <section className="">
      <div className="bg-white top-gutter"></div>
      <div className="container h-[375px] md:h-[400px] slg:h-[400px] lg:h-[480px] flex flex-col items-center justify-center slg:gap-10 lg:gap-12 gap-8">
        <h1 className="font-medium slg:text-[80px] md:text-6xl text-5xl lg:text-[100px] leading-[130%] text-center text-cerreneGreen relative">
          Cerrene <span className="italic font-semibold">Chronicles</span>
          <div className="absolute slg:h-32 slg:w-32 slg:-right-24 slg:-bottom-20 md:h-24 md:w-24 md:-bottom-16 md:-right-9  h-20 w-20 -bottom-9 -right-3">
            <div className="relative h-full w-full">
              <Image src={blogLine} alt="" fill className="object-contain  " />
            </div>
          </div>
        </h1>
        <p className="slg:text-xl font-satoshi slg:w-[670px] md:w-[480px] w-[300px] text-center text-[#4e4e4e]">
          Welcome to the Cerrene Blog: Cerrene Chronicles! Dive into a world of
          expert insights, tips, and trends in cleaning, electrical, and
          plumbing services.{" "}
        </p>
      </div>
    </section>
  );
}
