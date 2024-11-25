import Image from "next/image";
import gridImage1 from "@/public/images/gridImage1.png";
import gridImage2 from "@/public/images/gridImage2.png";
import gridImage3 from "@/public/images/gridImage4.png";
import gridImage4 from "@/public/images/gridImage3.png";

export default function Mission() {
  return (
    <section className="lg:py-[58px] py-10 text-[#4e4e4e]">
      <div className="container">
        <h3 className="uppercase font-satoshi font-medium tracking-[4%] text-cerreneLightGreen italic "
         data-aos="fade-down"
         data-aos-once="true"
         >
          CERRENE&apos;S MISSION / CORE VALUES
        </h3>
        <p
        data-aos="fade-left"
         data-aos-once="true"
         className="lg:text-[36px] slg:text-[30px] md:text-[24px] xl:text-[40px] font-satoshi font-medium leading-[130%] py-6 slg:py-8 lg:w-[685px] slg:w-[600px] md:w-[500px]">
          
          Empowering spaces with exceptional cleanliness and reliability,
        </p>
      </div>
      <div className="grid md:grid-cols-10 grid-cols-2 w-full slg:grid-rows-verticalSmall md:grid-rows-verticalMd lg:grid-rows-vertical lg:h-[950px] text-[#F8FABF] ">
        <div className=" relative col-span-2 w-full h-[480px] md:h-full md:col-span-3 md:row-span-2 md:col-start-1 row-start-2">
          <Image
            className="object-cover h-[480px]  md:h-full w-full"
            src={gridImage1}
            alt="grid image"
            fill
          />
        </div>

        <div className="bg-cerreneOrange md:col-span-2 md:row-span-1 flex flex-col lg:pt-20 lg:pl-6 slg:pt-10 md:pb-0 md:pt-4 slg:pl-3 md:pl-2 pt-9 pb-9 pl-6 ">
          <h2 data-aos="flip-down"
         data-aos-once="true" className="italic slg:text-[32px] text-[24px] lg:text-[40px] font-semibold py-3">
            Excellence
          </h2>
          <p
          data-aos="fade-up"
         data-aos-once="true" 
         data-aos-delay="400" 
         className="lg:text-[32px] slg:text-[24px] text-[20px] w-[150px] slg:w-[172px] pt-5  leading-[110%]">
            Pursuing <span className="italic">perfection</span> in every
            service.
          </p>
        </div>

        <div className=" relative md:col-span-2 h-60 md:h-full md:row-span-1">
          <Image
            className="object-cover h-60 md:h-full w-full"
            src={gridImage2}
            alt="grid image"
            fill
          />
        </div>

        <div className="bg-cerreneLightGreen  md:col-span-3 md:row-span-1 flex flex-col lg:pt-20 lg:pl-[60px] slg:pt-10 slg:pl-10 md:pl-6 md:pt-4   pt-9 pb-9 pl-6 md:pb-0">
          <h2 data-aos="flip-down"
         data-aos-once="true" className="italic lg:text-[40px] slg:text-[32px] text-[24px] font-semibold py-3">
            Integrity
          </h2>
          <p
          data-aos="fade-up"
         data-aos-once="true" 
         data-aos-delay="400" 
         className="lg:text-[32px] slg:text-[24px] text-[20px] w-[150px] slg:w-[172px] pt-5  leading-[110%]">
            <span className="italic">Honesty</span> and{" "}
            <span className="italic">ethics</span> guide us.
          </p>
        </div>

        <div className="bg-[#F8FABF] text-cerreneGreen md:col-span-4 md:row-span-1 hidden md:flex flex-col items-center justify-center">
          <p
          data-aos="fade-up"
         data-aos-once="true" 
         data-aos-delay="400" 
         className="lg:text-[56px] slg:text-[44px] md:text-[32px] lg:w-[387px]  text-center  leading-[110%]">
            New <span className="italic">solution</span> to easy living{" "}
          </p>
        </div>

        <div className=" relative w-full h-[480px] md:h-full md:col-span-3 md:row-span-2 col-span-2">
          <Image
            className="object-cover h-[480px] md:h-full w-full"
            src={gridImage3}
            alt="grid image"
            fill
          />
        </div>

        <div className="bg-cerreneGreen md:col-span-3 md:row-span-1 col-span-2 row-start-3 flex flex-col lg:pt-20 lg:pl-[60px] slg:pt-10 pt-9 pb-9 pl-6 slg:pl-10 md:pl-6 md:pt-4 ">
          <h2 data-aos="flip-down"
         data-aos-once="true" className="italic lg:text-[40px]  slg:text-[32px] text-[24px] font-semibold py-3">
            Reliability
          </h2>
          <p
          data-aos="fade-up"
         data-aos-once="true" 
         data-aos-delay="400" 
         className="lg:text-[32px] slg:text-[24px] text-[20px] w-60   md:w-[160px] slg:w-[172px] pt-5  leading-[110%]">
            <span className="italic">Consistent,</span>{" "}
            <span className="italic">dependable</span> service delivery.{" "}
          </p>
        </div>

        <div className=" relative md:col-span-2  h-60 md:h-full md:row-span-1 row-start-4 col-start-1 md:col-start-4 md:row-start-3">
          <Image
            className="object-cover h-60 md:h-full w-full"
            src={gridImage4}
            alt="grid image"
            fill
          />
        </div>

        <div className="bg-cerreneDarkOrange col-span-2 md:row-span-1 flex flex-col lg:pt-16 lg:pl-6 slg:pt-10 slg:pl-3 md:pt-4  md:pl-2 pt-9 pb-9 pl-6">
          <h2 data-aos="flip-down"
         data-aos-once="true" className="italic lg:text-[40px] slg:text-[32px] text-[24px] font-semibold py-2">
            Innovation
          </h2>
          <p
          data-aos="fade-up"
         data-aos-once="true" 
         data-aos-delay="400" 
         className="lg:text-[32px] slg:text-[24px] text-[20px] w-60 md:w-[150px] slg:w-[172px] pt-4  leading-[110%]">
            Constantly <span className="italic">improving,</span>{" "}
            <span className="italic">adapting,</span> and{" "}
            <span className="italic">evolving.</span>
          </p>
        </div>
        <div className="bg-[#F8FABF] text-cerreneGreen col-span-2 md:row-span-1 md:hidden flex flex-col items-center justify-center h-40">
          <p
          data-aos="fade-up"
         data-aos-once="true" 
         data-aos-delay="400" 
         className="lg:text-[56px] slg:text-[44px] text-[32px] lg:w-[387px]  text-center  leading-[110%]">
            New <span className="italic">solution</span> to easy living{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
