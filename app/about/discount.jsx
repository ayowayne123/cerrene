import Image from "next/image";
import Link from "next/link";

export default function Discount() {
  return (
    <section className="w-full slg:min-h-[381px] bg-aboutBg2">
      <div className="relative bg-[#F0712766] h-full w-full flex flex-col items-center slg:py-12 py-10">
        <div
          className="mx-auto pt-2 font-bold text-white text-center
        text-[28px] md:text-[36px] slg:text-[50px] xl:text-[54px]
        w-[90%] md:w-[80%] slg:w-[690px] xl:w-[750px]"
        >
          Get 15% off your first appointment with Cerrene!
        </div>
        <Link
          href="/contact"
          className="h-[50px] md:h-[60px] mt-6 md:mt-8 font-satoshi font-bold text-white w-[220px] md:w-[277px] bg-cerreneOrange flex items-center justify-center rounded"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
