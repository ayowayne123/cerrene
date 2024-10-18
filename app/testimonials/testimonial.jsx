import React from "react";
import Link from "next/link";
import Quote from "@/public/utils/testimonyQuote";
import mariaTestimony from "@/public/images/testimonials/mariaTestimony.png";

const testimonials = [
  {
    text: "Cerrene's cleaning service exceeded my expectations. My house has never been this spotless. Highly recommended!",
    username: "Ngozi R.",
    occupation: "Home owner",
    src: mariaTestimony,
  },
  {
    text: "Thanks to Cerrene, our home's electrical system is now safe and functional. Their expertise is unmatched.",
    username: "Fatima S.",
    occupation: "Home owner",
    src: mariaTestimony,
  },
  {
    text: "I was amazed by the quality of Cerrene's cleaning service. They went above and beyond to ensure everything was perfect. Every nook and cranny was spotless, and they used eco-friendly products.",
    username: "Grace M.",
    occupation: "Eco-consultant",
    src: mariaTestimony,
  },
  {
    text: "I couldn't be happier with Cerrene's plumbing service. They resolved our leak quickly and were very courteous. The technician took the time to explain what went wrong and how they fixed it. Exceptional service!",
    username: "Tebogo K.",
    occupation: "Property Manager",
    src: mariaTestimony,
  },

  {
    text: "The electricians from Cerrene were professional and efficient. They fixed our wiring issues in no time. Fantastic service!",
    username: "Michael D.",
    occupation: "Restaurant owner",
    src: mariaTestimony,
  },

  {
    text: "The plumbing repairs done by Cerrene were top-notch. They explained everything clearly and got the job done right the first time. I appreciate their transparency and professionalism.",
    username: "Peter J.",
    occupation: "Facility Manager",
    src: mariaTestimony,
  },
  {
    text: "Our business premises have never looked better. Cerrene's cleaning crew is thorough and reliable. They consistently go above and beyond to ensure our office is spotless and comfortable for our employees and clients.",
    username: "Lerato M.",
    occupation: "Business owner",
    src: mariaTestimony,
  },

  {
    text: "Cerrene's plumbing service was excellent. They were quick, efficient, and left no mess behind. Highly satisfied!",
    username: "Chipo B.",
    occupation: "Home owner",
    src: mariaTestimony,
  },
  {
    text: "Cerrene's prompt response to our electrical emergency was a lifesaver. Exceptional service and very professional!",
    username: "Ahmed A.",
    occupation: "Hotel Manager",
    src: mariaTestimony,
  },
];

function Testimonial() {
  return (
    <section className="lg:pt-[360px] slg:pt-[300px] md:pt-[200px] pt-[100px] relative overflow-hidden -z-10">
      <div className="absolute bg-cerreneLightGreen rounded-full w-[120px] h-[120px] slg:w-[170px] slg:h-[170px] lg:w-[200px] lg:h-[200px] slg:-left-[52px] md:-left-[25px] md:top-[100px] slg:top-[150px] lg:top-[243px] blur-[50px] ">
        {" "}
      </div>
      <div className="absolute bg-cerreneYellow rounded-full w-[120px] h-[120px] slg:w-[170px] slg:h-[170px] lg:w-[200px] lg:h-[200px] -left-[81px] md:-left-[45px] md:top-[180px] slg:top-[250px] lg:top-[354px] blur-[90px] ">
        {" "}
      </div>
      <div className="absolute bg-cerreneLightGreen rounded-full w-[120px] h-[120px] slg:w-[170px] slg:h-[170px] lg:w-[200px] lg:h-[200px] -right-[52px] bottom-[43px] blur-[50px] ">
        {" "}
      </div>
      <div className="absolute bg-cerreneYellow rounded-full w-[120px] h-[120px] slg:w-[170px] slg:h-[170px] lg:w-[200px] lg:h-[200px] -right-[81px] bottom-[154px] blur-[90px] ">
        {" "}
      </div>
      <div className="">
        <h1 className="font-semibold leading-[130%] text-cerreneGreen md:text-[40px] slg:w-[500px] md:w-[500px] lg:text-[56px] mx-auto text-center lg:w-[686px] pb-3">
          Happy <span className="font-semibold italic">Experiences</span> Await
          You With Cerrene.
        </h1>
        <div className="xl:py-16 slg:py-10 md:py-6  flex flex-col slg:h-[1750px] lg:h-[1300px] md:h-[1500px] flex-wrap content-center justify-start gap-x-4 gap-y-6 slg:gap-y-10 ">
          {testimonials.map((testimonial, index) => (
            <Quote
              key={index}
              text={testimonial.text}
              username={testimonial.username}
              occupation={testimonial.occupation}
              src={testimonial.src}
              className={
                index % 2 === 0 ? "bg-cerreneYellow" : "bg-cerreneLightGreen"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
