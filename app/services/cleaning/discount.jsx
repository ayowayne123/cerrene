import Link from "next/link";

export default function Discount() {
  return (
    <section className="w-full slg:py-24 py-12  container">
      <div className="lg:h-[601px] md:h-[550px] h-[750px]  grid-rows-2 md:grid-rows-1 grid lg:grid-cols-elevate slg:grid-cols-elevateSmall md:grid-cols-elevateMd bg-cerreneDarkOrange rounded-2xl overflow-hidden">
        <div className="relative h-full">
          <div className="h-full md:w-full px-10 text-[36px] absolute inset-0 bg-[#4E4E4E66] leading-[120%] text-white flex items-center justify-center font-semibold md:text-[40px] lg:text-[54px] lg:px-10 md:px-6 slg:text-[48px]">
            Get 15% off your first appointment with Cerrene!
          </div>
        </div>
        <div className=" flex h-full w-full flex-col items-center justify-center bg-cerreneDarkOrange gap-12 ">
          <div className="font-satoshi self-center italic text-white lg:text-[32px] slg:text-[28px] text-[22px] text-center leading-[130%] lg:w-[649px] slg:w-[560px] md:w-full w-[300px]  ">
            Whether it&apos;s your home or office, we ensure every corner is
            spotless and inviting.
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/contact"
              className="h-[60px] font-satoshi font-bold text-white  w-[277px] bg-cerreneOrange flex items-center justify-center rounded"
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="h-[60px] font-satoshi font-bold text-cerreneOrange  w-[277px] border border-cerreneOrange flex items-center justify-center rounded"
            >
              Get Hired
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
