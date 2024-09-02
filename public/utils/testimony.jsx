import Button from "@/public/utils/button";
import Image from "next/image";
import circles from "@/public/images/circles.svg";

export default function Testimony({ text, username, occupation, src }) {
  return (
    <div className="text-[#4e4e4e] border-2 w-full  p-10 border-cerreneLightGreen bg-cerreneYellow rounded-lg overflow-hidden ">
      <div className="flex items-center mb-4">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <span key={i} className=" text-xl">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.15323 5.408C10.4202 3.136 11.0532 2 12.0002 2C12.9472 2 13.5802 3.136 14.8472 5.408L15.1752 5.996C15.5352 6.642 15.7152 6.965 15.9952 7.178C16.2752 7.391 16.6252 7.47 17.3252 7.628L17.9612 7.772C20.4212 8.329 21.6502 8.607 21.9432 9.548C22.2352 10.488 21.3972 11.469 19.7202 13.43L19.2862 13.937C18.8102 14.494 18.5712 14.773 18.4642 15.117C18.3572 15.462 18.3932 15.834 18.4652 16.577L18.5312 17.254C18.7842 19.871 18.9112 21.179 18.1452 21.76C17.3792 22.342 16.2272 21.811 13.9252 20.751L13.3282 20.477C12.6742 20.175 12.3472 20.025 12.0002 20.025C11.6532 20.025 11.3262 20.175 10.6722 20.477L10.0762 20.751C7.77323 21.811 6.62123 22.341 5.85624 21.761C5.08924 21.179 5.21623 19.871 5.46923 17.254L5.53523 16.578C5.60723 15.834 5.64323 15.462 5.53523 15.118C5.42923 14.773 5.19024 14.494 4.71424 13.938L4.28024 13.43C2.60324 11.47 1.76523 10.489 2.05723 9.548C2.35024 8.607 3.58024 8.328 6.04024 7.772L6.67624 7.628C7.37524 7.47 7.72424 7.391 8.00524 7.178C8.28524 6.965 8.46523 6.642 8.82523 5.996L9.15323 5.408Z"
                  fill="#9CA11C"
                />
              </svg>
            </span>
          ))}
      </div>
      <div className="lg:w-[460px] xl:w-[505px] leading-[130%] lg:text-[28px] xl:text-[32px]  font-satoshi">
        {text}
      </div>
      <div className="lg:pt-12 lg:pb-8 flex flex-row gap-4">
        <div className="relative h-20 w-20 rounded-full overflow-hidden">
          <Image src={src} alt="circles" className="object-contain" fill />
        </div>
        <div className="flex-col flex ">
          <div className="font-semibold lg:text-[28px] xl:text-[32px]">
            {username}
          </div>
          <div className="font-satoshi">{occupation}</div>
        </div>
      </div>
    </div>
  );
}
