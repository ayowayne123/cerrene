
import Image from "next/image"
import Link from "next/link";
import nigeriaBg from "@/public/images/nigeriaBg.png"
import botswanaBg from "@/public/images/botswanaBg.png"



export default function Serves(){

    return(
        <section  className="relative lg:h-[534px] w-full">
            <div className="grid grid-cols-2 w-full h-full gap-px">
                <div className="h-full w-full relative">
                    <Image src={nigeriaBg} alt="" fill className="object-cover"/>
                </div>  
                <div className="h-full w-full relative">
                    <Image src={botswanaBg} alt="" fill className="object-cover"/>
                </div>  
            </div>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-[#9DA21F00] to-[#A0A422]">
<div className="container text-white h-full text-[40px] text-left italic leading-[130%] flex flex-col justify-end">
<span className="lg:pb-[52px] w-[800px]"> <span className="font-satoshi">Cerrene serves </span><span className="font-bold text-[44px]">Nigeria,</span> <span className="font-satoshi">and</span>  <span className="font-bold text-[44px]">Botswana,</span> <span className="font-satoshi">providing premier cleaning, electrical, and plumbing services to both cities.</span></span>
</div>
            </div>
          

     
        </section>
    )
} 