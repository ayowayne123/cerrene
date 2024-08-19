import Link from "next/link"
import Image from "next/image"
import engineer from "@/public/images/engineer.png"

export default function Contact() {
    return (
        <section className="w-full py-24  container">
            <div className="lg:h-[601px] mx-9 grid grid-cols-elevate rounded-2xl overflow-hidden">
<div className="relative h-full">
<div>
    <Image src={engineer} alt='engineer' className="object-cover " fill />
</div>
<div className="h-full w-full absolute inset-0 bg-[#4E4E4E66] leading-[120%] text-white flex items-center justify-center font-semibold lg:text-[54px] lg:px-10">
Get 15% off your first appointment with Cerrene!
</div>
</div>
<div className="bg-cerreneDarkOrange flex h-full flex-col items-center justify-center  gap-12">
    <div className="font-satoshi text-white font-medium text-[32px] leading-[130%] lg:w-[472px] text-center">Ready to Elevate Your Space? Contact Cerrene Now!</div>
    <div className="flex flex-col gap-4">
    <Link href='/' className="h-[60px] font-satoshi font-bold text-white  w-[277px] bg-cerreneOrange flex items-center justify-center rounded">Contact Us</Link>
    <Link href='/' className="h-[60px] font-satoshi font-bold text-cerreneOrange  w-[277px] border border-cerreneOrange flex items-center justify-center rounded">Get Hired</Link>
    </div>

</div>
            </div>
           
   

        </section>
    )
}