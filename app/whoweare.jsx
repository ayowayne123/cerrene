import Image from "next/image";
import whoweare1 from "@/public/images/whoweare1.png";
import whoweare2 from "@/public/images/whoweare2.png";
import whoweare3 from "@/public/images/whoweare3.png";
import whoweare4 from "@/public/images/whoweare4.png";
import whoweare5 from "@/public/images/whoweare5.png";
import whoweare6 from "@/public/images/whoweare6.png";
import spiral from "@/public/images/spiral.svg";
import Button from "@/public/utils/button";

export default function Who() {
  const images = [
    { src: whoweare1, height: 300, width: 526 },
    { src: whoweare2, height: 300, width: 422 },
    { src: whoweare3, height: 300, width: 316 },
    { src: whoweare4, height: 300, width: 316 },
    { src: whoweare5, height: 300, width: 422 },
    { src: whoweare6, height: 300, width: 526 },
  ];
  const imagesPhones = [
    { src: whoweare1, height: 300, width: 526 },
    { src: whoweare2, height: 300, width: 422 },
  ];

  return (
    <section className="bg-cerreneLightOrange py-8 h-[850px] md:h-[790px] lg:h-[1080px] slg:h-[900px] relative">
      <div>
        <Image src={spiral} alt="" fill className="object-cover" />
      </div>
      <div className="container z-10 absolute lg:top-8 lg:left-0 lg:right-0">
        <div className="lg:w-[918px] slg:w-[850px] md:w-[600px] text-[#4e4e4e] text-[18px] font-satoshi font-medium md:text-[28px] lg:text-[40px] slg:text-[34px] lg:pb-3">
          While you sit back and unwind, our expert team handles every aspect
          with precision and care. From scrubbing away grime to fixing faulty
          wiring or leaky pipes, we&apos;ve got you covered.
        </div>

        {/* First Line of Images */}
        <div className="md:flex gap-7 justify-between mt-12 hidden">
          {images.slice(0, 3).map((image, index) => (
            <div key={index}>
              <Image
                src={image.src}
                alt={`Who we are image ${index + 1}`}
                width={image.width}
                height={image.height}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Second Line of Images */}
        <div className="hidden md:flex gap-7 justify-between my-7">
          {images.slice(3).map((image, index) => (
            <div key={index}>
              <Image
                src={image.src}
                alt={`Who we are image ${index + 4}`}
                width={image.width}
                height={image.height}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Phone Line of images */}
        <div className="flex flex-col gap-7 justify-between my-12 md:hidden">
          {imagesPhones.slice(0, 3).map((image, index) => (
            <div key={index}>
              <Image
                src={image.src}
                alt={`Who we are image ${index + 1}`}
                width={image.width}
                height={image.height}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <Button
          type="primary"
          className="w-[220px] h-12 rounded-sm bg-cerreneOrange"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
}
