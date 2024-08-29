import star from "@/public/icons/star.svg"
import Image from "next/image"
import Link from "next/link";
import Dots from "@/public/utils/dots";

export default function Experience(){

    return(
        <section>
             <div className="bg-cerreneOffWhite lg:h-[94px]  w-full inset-0 z-10">
</div>
<div className="mx-auto leading-[120%] relative text-center lg:text-[72px] lg:pt-20 xl:pt-[91px] font-medium lg:w-[677px] text-cerreneGreen">
                Experience a New Level of <span className="font-semibold  italic"> Cleanliness</span> 
                <Image src={star} alt=""   className="absolute lg:w-[82px] lg:h-[84px] object-contain lg:bottom-20 xl:bottom-[91px] -right-24"/>
                </div>
                <Link href='/contact' className="h-[60px] mx-auto my-9 font-satoshi font-bold text-white  w-[277px] bg-cerreneOrange flex items-center justify-center rounded">Contact Us</Link> 
                <div className="w-full lg:h-[357px] relative  z-10 ">
                    <div className="z-10 bg-aboutBg h-full w-full bg-red-200">
                    <Dots className="z-20 -left-5 -top-[56px] "/>
                    <Dots className="-z-10 -right-[66px] -bottom-[42px] "/>
                    <Dots className="-z-30 -left-[58px] -bottom-[156px] origin-top rotate-90 "/>
                    </div>
               
                </div>
                
               
        </section>
    )
} 