import Image from "next/image";
import gridImage1 from "@/public/images/gridImage1.png"
import gridImage2 from "@/public/images/gridImage2.png"
import gridImage3 from "@/public/images/gridImage4.png"
import gridImage4 from "@/public/images/gridImage3.png"

export default function Mission() {
  return (
   <section className="lg:py-[58px] text-[#4e4e4e]">
    <div className="container">
<h3 className="uppercase font-satoshi font-medium tracking-[4%] text-cerreneLightGreen ">CERRENE&apos;S MISSION / CORE VALUES</h3>
<p className="lg:text-[36px] xl:text-[40px] font-satoshi font-medium leading-[130%] lg:py-8 lg:w-[685px]"> Empowering spaces with exceptional cleanliness and reliability,</p>
    </div>
<div className="grid lg:grid-cols-10 lg:grid-rows-vertical h-[950px] text-[#F8FABF] ">

<div className=" relative col-span-3 row-span-2"> 
<Image className="object-cover h-full w-full" src={gridImage1} alt="grid image" fill/>
</div>

<div className="bg-cerreneOrange col-span-2 row-span-1 flex flex-col pt-20 pl-6 "> 
<h2 className="italic lg:text-[40px] font-semibold py-3">Excellence</h2>
<p className="lg:text-[32px] lg:w-[172px] pt-5  leading-[110%]">Pursuing <span className="italic">perfection</span> in every service.</p>
</div>

<div className=" relative col-span-2 row-span-1"> 
    <Image className="object-cover h-full w-full" src={gridImage2} alt="grid image" fill/>
</div>

<div className="bg-cerreneLightGreen col-span-3 row-span-1 flex flex-col lg:pt-20 lg:pl-[60px]"> 
<h2 className="italic lg:text-[40px] font-semibold py-3">Integrity</h2>
<p className="lg:text-[32px] lg:w-[172px] pt-5  leading-[110%]"><span className="italic">Honesty</span>  and  <span className="italic">ethics</span>  guide us.</p>
</div>

<div className="bg-[#F8FABF] text-cerreneGreen col-span-4 row-span-1 flex flex-col items-center justify-center"> 
<p className="lg:text-[56px] lg:w-[387px]  text-center  leading-[110%]">New   <span className="italic">solution</span>  to easy living  </p>
</div>

<div className=" relative col-span-3 row-span-2"> 
    <Image className="object-cover h-full w-full" src={gridImage3} alt="grid image" fill/>
</div>

<div className="bg-cerreneGreen col-span-3 row-span-1 flex flex-col lg:pt-20 lg:pl-[60px]"> 
<h2 className="italic lg:text-[40px] font-semibold py-3">Reliability</h2>
<p className="lg:text-[32px] lg:w-[172px] pt-5  leading-[110%]"><span className="italic">Consistent,</span> <span className="italic">dependable</span>    service delivery. </p>
</div>

<div className=" relative col-span-2 row-span-1"> 
    <Image className="object-cover h-full w-full" src={gridImage4} alt="grid image" fill/>
</div>

<div className="bg-cerreneDarkOrange col-span-2 row-span-1 flex flex-col pt-16 pl-6 "> 
<h2 className="italic lg:text-[40px] font-semibold py-2">Innovation</h2>
<p className="lg:text-[32px] lg:w-[172px] pt-4  leading-[110%]">Constantly <span className="italic">improving,</span>  <span className="italic">adapting,</span> and <span className="italic">evolving.</span></p>
</div>

</div>
   </section>
  );
}
