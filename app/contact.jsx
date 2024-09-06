import Link from "next/link";
import Image from "next/image";
import engineer from "@/public/images/engineer.png";

export default function Contact() {
  return (
    <section className="w-full lg:py-24 py-16 container">
      <div className="lg:h-[601px] slg:h-[550px] lg:mx-9 slg:mx-3 grid lg:grid-cols-elevate slg:grid-cols-2 rounded-2xl overflow-hidden">
        <div className="relative slg:h-full h-[400px] md:h-[500px]">
          <div>
            <Image
              src={engineer}
              alt="engineer"
              className="object-cover object-top "
              fill
            />
          </div>
          <div className="h-full w-full absolute inset-0 bg-[#4E4E4E66] leading-[120%] text-white flex items-center justify-center font-semibold text-[40px] lg:text-[54px] px-10 lg;py-0 py-16">
            Get 15% off your first appointment with Cerrene!
          </div>
        </div>
        <div className="bg-cerreneDarkOrange flex slg:h-full flex-col items-center justify-center  lg:gap-12 gap-6 lg:py-0 lg:px-0 px-8 py-12">
          <div className="font-satoshi text-white font0normal lg:font-medium text-[32px] leading-[130%]  lg:w-[472px] text-center">
            Ready to Elevate Your Space? Contact Cerrene Now!
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="h-[60px] font-satoshi font-bold text-white  w-[277px] bg-cerreneOrange flex items-center justify-center rounded"
            >
              Contact Us
            </Link>
            <Link
              href="/"
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
