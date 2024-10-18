import Button from "@/public/utils/button";
import Image from "next/image";
import Link from "next/link";

export default function Videos() {
  return (
    <section className=" w-full gap-5  relative font-satoshi text-[#4e4e4e] py-10 md:py-5">
      <div className=" bg-cerreneLightGreen w-[140px] h-[20px]   md:h-[32px] slg:h-[44px] hidden md:flex lg:h-[65px] -z-10 md:w-[calc((100vw_-_768px)_/_2_+_70px)] slg:w-[calc((100vw_-_1024px)_/_2_+_70px)] lg:w-[calc((100vw_-_1280px)_/_2_+_70px)] xl:w-[calc((100vw_-_1440px)_/_2_+_70px)] absolute left-0 rounded-tr-3xl md:top-0 slg:-top-8 animate-slide-in-left "></div>
      {/* phone line */}
      <div className=" bg-cerreneLightGreen w-[140px] h-[30px] rounded-tr-3xl top-5 absolute -z-10  md:hidden animate-slide-in-left "></div>

      <div className="container grid lg:grid-cols-videos slg:grid-cols-videosSmall md:grid-cols-videosMd gap-x-8">
        <div className=" lg:h-96 md:h-auto h-60 slg:h-72 ">
          <iframe
            src="https://www.youtube.com/embed/8LSt8_11wbQ"
            width="100%"
            height="100%"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="justify-center flex flex-col md:gap-3 gap-3 slg:gap-4 md:py-0 slg:py-4 py-4 lg:gap-9">
          <h2>Cleaning Services</h2>
          <p className="slg:text-xl  lg:text-2xl">
            “As a filmmaker, maintaining a clean and organized set is crucial
            for smooth production. Cerrene&apos;s cleaning service has been a
            game-changer for us. Their team is thorough, professional, and
            incredibly detail-oriented”.
          </p>
          <p className="slg:text-2xl lg:text-3xl italic font-semibold text-cerreneGreen">
            - Moyin Ezekiel{" "}
          </p>
        </div>
      </div>

      <div className="container grid lg:grid-cols-videosReverse slg:grid-cols-videosReverseSmall md:grid-cols-videosReverseMd gap-x-8 md:py-8 pt-10 slg:py-12">
        <div className="justify-center flex flex-col md:gap-3 gap-3 slg:gap-4 md:py-0 slg:py-4 py-4 lg:gap-9 row-start-2 md:row-start-1">
          <h2>Cleaning Services</h2>
          <p className="slg:text-xl  lg:text-2xl">
            “As a filmmaker, maintaining a clean and organized set is crucial
            for smooth production. Cerrene&apos;s cleaning service has been a
            game-changer for us. Their team is thorough, professional, and
            incredibly detail-oriented”.
          </p>
          <p className="slg:text-2xl lg:text-3xl italic font-semibold text-cerreneGreen">
            - Moyin Ezekiel{" "}
          </p>
        </div>
        <div className=" lg:h-96 md:h-auto h-60 slg:h-72 ">
          <iframe
            src="https://www.youtube.com/embed/8LSt8_11wbQ"
            width="100%"
            height="100%"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className=" bg-cerreneLightGreen w-[140px] h-[20px] md:w-[calc((100vw_-_768px)_/_2_+_300px)]  slg:w-[calc((100vw_-_1024px)_/_2_+_400px)]  md:h-[32px] slg:h-[44px] hidden md:flex lg:h-[65px] -z-10 lg:w-[calc((100vw_-_1280px)_/_2_+_500px)] xl:w-[calc((100vw_-_1440px)_/_2_+_500px)] absolute right-0 rounded-bl-3xl bottom-8 slg:bottom-4 animate-slide-in-right "></div>
    </section>
  );
}
