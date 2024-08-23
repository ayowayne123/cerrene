
import Image from "next/image";
import Link from "next/link";


export default function Discount() {
  return (
    <section className="w-full  lg:h-[381px] bg-aboutBg">
      <div className="relative bg-cerreneYellow bg-[#F0712766] h-full w-full flex flex-col items-center lg:py-12 py-10  ">
    <div className="mx-auto pt-2 font-bold text-white lg:text-[50px] xl:text-[54px] lg:w-[690px] xl:w-[750px] text-center ">Get 15% off your first appointment with Cerrene!</div> 
    <Link href='/' className="h-[60px] mt-9 font-satoshi font-bold text-white  w-[277px] bg-cerreneOrange flex items-center justify-center rounded">Contact Us</Link> 
      </div>
    </section>
  );
}
