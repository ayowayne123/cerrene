import wiggle from "@/public/images/wiggle.svg";
import Image from "next/image";

export default function Solution() {
  return (
    <section className="w-full bg-cerreneLightGreen slg:min-h-[855px] lg:h-[935px] relative overflow-hidden">
      <Image
        src={wiggle}
        fill
        alt=""
        className="  object-right flex object-contain"
      />
      <div className="container relative h-full">
        <div className="font-medium text-white italic slg:w-[420px] md:w-[350px] lg:w-[560px] leading-[120%] text-[40px]  xl:w-[600px] xl:text-[60px] slg:text-[48px] lg:text-[54px] py-12">
          Cerrene. is the new solution for elevating your living and working
          spaces.
        </div>

        <div className="text-[#4C4D16] lg:absolute right-16 bottom-32 slg:w-[790px] lg:w-[918px] font-bold italic slg:text-[40px]  text-[28px] lg:text-[44px] md:ml-40 pr-4 lg:pml-0  lg:pt-0 slg:pt-16 pt-8 pb-8">
          <span className="font-satoshi text-[24px] slg:text-[36px] lg:text-[40px] not-italic font-normal">
            Cerrene brings its renowned reliability and expertise in cleaning,
            electrical, and plumbing services, ensuring homes and businesses
            across
          </span>{" "}
          Botswana{" "}
          <span className="font-satoshi  text-[24px] slg:text-[36px] lg:text-[40px] not-italic font-normal">
            and
          </span>{" "}
          Nigeria{" "}
          <span className="font-satoshi  text-[24px] slg:text-[36px]  lg:text-[40px] not-italic font-normal">
            shine with excellence.
          </span>
        </div>
      </div>
    </section>
  );
}
