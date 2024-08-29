
import Image from "next/image"
import Link from "next/link";
import Dots from "@/public/utils/dots";
import tapsPlumbing from "@/public/images/tapsPlumbing.png"

export default function Experience(){

    return(
        <section>
             <div className="bg-cerreneOffWhite lg:h-[94px]  w-full inset-0 z-10">
</div>
<div className=" relative lg:py-10  font-medium container flex flex-row gap-10 overflow-hidden">
<Dots className=" -right-[46px] top-[40px]  "/>
<Dots className=" -left-5 bottom-2 z-20 "/>
                <div className="relative lg:w-[506px] lg:h-[664px] rounded-[20px] overflow-hidden flex-shrink-0">
                <Image src={tapsPlumbing} alt=""   className="object-cover " fill/>
                </div>
                <div className="flex flex-col gap-10 justify-center">
                    <h2 className="lg:text-[66px] xl:text-[72px] text-cerreneGreen  "> Plumbing <span className="italic">Perfection</span>: Cerrene&apos;s Expertise.</h2>
                    <p className="lg:text-xl lg:w-[518px] font-satoshi leading-[140%]">Dive into a world of plumbing excellence with Cerrene. From leak repairs to installations, We've got you covered. Contact us today!</p>
                    <Link href='/contact' className="h-[60px] font-satoshi font-bold text-white  w-[277px] bg-cerreneOrange flex items-center justify-center rounded">Contact Us</Link> 
                </div>
               
                </div>
               
                
               
        </section>
    )
} 