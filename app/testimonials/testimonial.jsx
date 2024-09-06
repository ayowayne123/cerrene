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
    <section className="lg:pt-[360px] relative overflow-hidden">
      <div className="absolute bg-cerreneLightGreen rounded-full w-[200px] h-[200px] -left-[52px] top-[243px] blur-[50px] ">
        {" "}
      </div>
      <div className="absolute bg-cerreneYellow rounded-full w-[200px] h-[200px] -left-[81px] top-[354px] blur-[90px] ">
        {" "}
      </div>
      <div className="absolute bg-cerreneLightGreen rounded-full w-[200px] h-[200px] -right-[52px] bottom-[43px] blur-[50px] ">
        {" "}
      </div>
      <div className="absolute bg-cerreneYellow rounded-full w-[200px] h-[200px] -right-[81px] bottom-[154px] blur-[90px] ">
        {" "}
      </div>
      <div className="">
        <h1 className="font-semibold leading-[130%] text-cerreneGreen lg:text-[56px] mx-auto text-center lg:w-[686px]">
          Happy <span className="font-semibold italic">Experiences</span> Await
          You With Cerrene.
        </h1>
        <div className="lg:py-16 flex flex-col h-[1300px]  flex-wrap content-center justify-start gap-x-4 gap-y-10 ">
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
