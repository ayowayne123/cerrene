import Image from "next/image";
import botswana from "@/public/icons/botswana.svg";
import nigeria from "@/public/icons/nigeria.svg";
import successphoto from "@/public/images/successphoto.png"
import successphoto2 from "@/public/images/successphoto2.png"
import successphoto3 from "@/public/images/successphoto3.png"
import dotted from "@/public/icons/dotted.svg"
import doodle from "@/public/icons/doodle.svg"

const ImageDotted=({src})=>{
  return (
    <div className="">
       <Image src={dotted} fill alt=""  className="scale-125"/>
      <Image src={src} fill alt=""  className="rounded-full overflow-hidden"/>
    </div>
  )

}

export default function Success() {
  return (
    <section className="bg-cerreneYellow lg:h-[1024px] w-full text-cerreneDarkOrange">
      <div className="container lg:pb-[68px] lg:pt-10 flex flex-col justify-between h-full">
        <div className="flex flex-row justify-between">
          <div className="pt-5">
            <h3 className="font-satoshi uppercase font-medium tracking-[4%]">
              CERRENE IN NUMBERS
            </h3>
          <div className="relative size-[128px] lg:mt-[77px]"><ImageDotted src={successphoto}/></div>  
          </div>
          <div className="flex flex-col items-start">
            <span>
              <span className="text-cerreneGreen text-[80px] font-bold italic">2</span>
              <span className="font-satoshi lg:text-[40px]"> countries</span>
            </span>
            <ul className="font-satoshi flex flex-col lg:text-[28px] pl-6">
              <li className="flex items-center before:content-['•'] before:mr-2 before:text-cerreneDarkOrange">
                <div className="w-full items-center flex flex-row justify-between gap-6"> Nigeria
                <Image src={nigeria} alt="Nigeria" className=" " /></div>
               
              </li>
              <li className="flex items-center before:content-['•'] before:mr-2 before:text-cerreneDarkOrange">
              <div className="w-full items-center flex flex-row justify-between gap-6"> Botswana
              <Image src={botswana} alt="Nigeria" className=" " /></div>
              </li>
            </ul>
          </div>
        </div>
        <div className="place-self-center flex flex-col items-center relative">
<span className="font-semibold lg:text-[160px] text-cerreneGreen italic leading-[110%] relative">105
  <Image src={doodle} alt=""   className="absolute lg:w-[382px] lg:h-[189px] scale-[150%] object-contain inset-0"/>
</span>
<span className="font-satoshi text-[40px]">successful projects</span>
<div className="absolute lg:-right-[197px] lg:top-[26px]"><div className="relative size-[91px] lg:mt-[30px] mx-auto"><ImageDotted src={successphoto2}/></div> </div>
 
        </div>
        <div>
        <div className="gap-3 flex items-end pb-[30px] ">
<span className="font-semibold text-[60px] text-cerreneGreen italic">75</span>
<span className="font-satoshi text-[40px]">happy clients</span>
        </div>
        <div className="relative size-[91px] lg:mt-[30px] mx-auto"><ImageDotted src={successphoto3}/></div>  
        </div>
      </div>
    </section>
  );
}
