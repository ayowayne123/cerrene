
import Image from "next/image"
import Link from "next/link";
import Dots from "@/public/utils/dots";
import commercialCleaning from "@/public/images/commercialCleaning.png"
import postConstructionCleaning from "@/public/images/postConstructionCleaning.png"
import eventsCleaning from "@/public/images/eventsCleaning.png"
import moveInCleaning from "@/public/images/moveInCleaning.png"
import regularCleaning from "@/public/images/regularCleaning.png"
import deepCleaning from "@/public/images/deepCleaning.png"


const Imagecard =({src, title, text})=>{
    return(
        <div className="relative flex flex-col justify-between   ">
            <div>
            <div className="lg:h-[355px] w-full gap-6 rounded-2xl overflow-hidden relative"> 
                <Image src={src} alt="" className='object-cover' fill /> 
            </div>
           <div className="pb-5 pr-12">
            <h3 className="font-medium leading-[130%] capitalize lg:text-[40px] py-4">{title}</h3>
            <p className="font-satoshi py-2 leading-[140%] lg:text-[20px] ">{text}</p>
           </div>
            </div>
            
           <Link href='/contact' className="h-[60px] font-satoshi font-bold text-white  w-[277px] bg-cerreneOrange flex items-center justify-center rounded">Contact Us</Link> 
        </div>
    )
}


const imageDetails = [
    {
        src:commercialCleaning,
        title: "Commercial Cleaning",
        text: "Cleaning services for office buildings, retail spaces, restaurants, and other commercial establishments, including regular janitorial services."

    },
    {
        src:postConstructionCleaning,
        title: "Post-Construction Cleaning",
        text: "Specialized cleaning services to remove dust, debris, and residue left behind after construction or renovation projects."

    },
    {
        src:eventsCleaning,
        title: "Events Cleaning",
        text: "Cleaning services before and after events, parties, or gatherings to ensure venues are clean, sanitary, and presentable."

    },
    {
        src:moveInCleaning,
        title: "Move-In/Move-Out Cleaning",
        text: "Cleaning services designed to prepare a space for new occupants or restore it to pristine condition after moving out."

    },
    {
        src:regularCleaning,
        title: "Regular Cleaning",
        text: "Scheduled cleaning services to maintain cleanliness and tidiness on a recurring basis, such as weekly or bi-weekly visits."

    },
    {
        src:deepCleaning,
        title: "Deep Cleaning",
        text: "Thorough and comprehensive cleaning that targets areas not typically covered in regular cleaning, such as behind appliances, inside cabinets, and baseboards."

    },

]

export default function Services(){

    return(
        <section>
            <div className="container pb-24 pt-7">
            <h2 className="font-medium lg:text-[50px] xl:text-[56px] py-8 z-40 ">Cleaning Services We Offer</h2>
            <div className='grid grid-cols-2 gap-y-16 gap-x-6 py-8'>
{imageDetails.map((card, index) => (
                <Imagecard src={card.src} 
                 title={card.title} 
                 text={card.text}
                key={index}/>
                ))}
</div>
            </div>

     
        </section>
    )
} 