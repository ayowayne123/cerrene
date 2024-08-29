
import Image from "next/image"
import Link from "next/link";
import Dots from "@/public/utils/dots";
import commercialCleaning from "@/public/images/commercialCleaning.png"
import postConstructionCleaning from "@/public/images/postConstructionCleaning.png"
import eventsCleaning from "@/public/images/eventsCleaning.png"
import moveInCleaning from "@/public/images/moveInCleaning.png"
import regularCleaning from "@/public/images/regularCleaning.png"
import deepCleaning from "@/public/images/deepCleaning.png"


const Imagecard =({title,text,services})=>{
    return(
        <div className=" grid grid-cols-2 ">
            <div className="flex flex-row gap-5">
            <div className="bg-cerreneLightGreen lg:w-[13px] lg:h-[153px] rounded-xl flex-shrink-0 translate-y-[14px]">
            </div>
            <div className="lg:w-[513px]">
            <h3 className="font-medium lg:text-[40px] pb-6 m-0">{title}</h3>
                <div className="lg:text-xl font-satoshi font-medium">{text}</div>
                
           </div>
            </div>
          <div>
            <div className="flex flex-col lg:text-[28px] font-satoshi italic leading-[140%] gap-6">
            {services.map((indi, index) => (
                <div key={index}>{indi}</div>
                ))}
            </div>
          
                  <Link href='/contact' className="h-[60px] font-satoshi font-bold text-white  w-[277px] bg-cerreneOrange flex items-center justify-center rounded">Contact Us</Link> 
          </div>
            
         
        </div>
    )
}


const serviceList = [
    {
        
        title: "Residential",
        text: "Our skilled team is dedicated to ensuring the integrity and functionality of your home's plumbing system, providing prompt and reliable service when you need it most.",
        services : [
            "Leak detection and repair",
            "Drain cleaning and unclogging",
            "Fixture Installation and repair",
            "Pipe repair and replacement",
            "Plumbing system inspections & more"

        ]

    },


]

export default function Services(){

    return(
        <section>
            <div className="container pb-24 pt-7">
            <h2 className="font-medium lg:text-[50px] xl:text-[56px] py-8 ">Plumbing Services We Offer</h2>
            <div className='grid  gap-y-16 gap-x-6'>
{serviceList.map((card, index) => (
                <Imagecard services={card.services}
                 title={card.title} 
                 text={card.text}
                key={index}/>
                ))}
</div>
            </div>

     
        </section>
    )
} 