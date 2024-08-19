import wiggle from "@/public/images/wiggle.svg"
import Image from "next/image"

export default function Solution() {
    return (
        <section className="w-full bg-cerreneLightGreen lg:h-[935px] relative overflow-hidden">
            <Image src={wiggle} fill alt='' className="  object-right flex object-contain"/>
            <div className="container relative h-full">
                <div className="font-medium text-white italic lg:w-[560px] leading-[120%] xl:w-[600px] xl:text-[60px] lg:text-[54px] py-12">Cerrene. is the new solution for elevating your living and working spaces.</div>
              
<div className="text-[#4C4D16] absolute right-16 bottom-32  lg:w-[918px] font-bold italic text-[44px] pr-4 "> 
   <span className="font-satoshi text-[40px] not-italic font-normal">Cerrene brings its renowned reliability and expertise in cleaning, electrical, and plumbing services, ensuring homes and businesses across</span>  Botswana <span className="font-satoshi text-[40px] not-italic font-normal">and</span> Nigeria <span className="font-satoshi text-[40px] not-italic font-normal">shine with excellence.</span>
    </div>
            </div>

        </section>
    )
}