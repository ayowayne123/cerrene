import Link from "next/link"


export default function Discount() {
    return (
        <section className="w-full py-24  container">
            <div className="lg:h-[601px]  grid grid-cols-elevate bg-cerreneDarkOrange rounded-2xl overflow-hidden">
<div className="relative h-full">

<div className="h-full w-full absolute inset-0 bg-[#4E4E4E66] leading-[120%] text-white flex items-center justify-center font-semibold lg:text-[54px] lg:px-10">
Get 15% off your first appointment with Cerrene!
</div>
</div>
<div className=" flex h-full w-full flex-col items-center justify-center bg-cerreneDarkOrange gap-12 ">
    <div className="font-satoshi self-center italic text-white text-[32px] text-center leading-[130%] lg:w-[649px]  ">Whether it&apos;s your home or office, we ensure every corner is spotless and inviting.</div>
    <div className="flex flex-col gap-4">
    <Link href='/' className="h-[60px] font-satoshi font-bold text-white  w-[277px] bg-cerreneOrange flex items-center justify-center rounded">Contact Us</Link>
    <Link href='/' className="h-[60px] font-satoshi font-bold text-cerreneOrange  w-[277px] border border-cerreneOrange flex items-center justify-center rounded">Get Hired</Link>
    </div>

</div>
            </div>
           
   

        </section>
    )
}