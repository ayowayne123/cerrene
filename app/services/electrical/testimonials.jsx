import React from "react";
import Testimony from "@/public/utils/testimony";
import testimonials1 from "@/public/images/testimonials/testimonials1.png";
import testimonials2 from "@/public/images/testimonials/testimonials2.png";
import Link from "next/link";

function Testimonials() {
  return (
    <section className=" container pb-4">
      <h2 className="font-medium lg:text-[50px] xl:text-[56px] py-8 ">
        Clients&apos; Testimonials
      </h2>
      <div className="grid grid-cols-2 gap-6">
        <Testimony
          text={`Cerrene\'s team upgraded our entire office lighting system in Lagos, and the results were phenomenal. The team was professional and ensured minimal disruption to our operations. `}
          username="Tunde K."
          occupation="Business Owner"
          src={testimonials1}
        />
        <Testimony
          text={`I recently had Cerrene handle some electrical repairs in my home in Gaborone, and I couldn\'t be happier. Their expertise and attention to detail were evident from start to finish. `}
          username="Naledi M."
          occupation="Home Owner"
          src={testimonials2}
        />
      </div>
      <Link
        href="/testimonials"
        className="mt-10 border border-cerreneOrange text-cerreneOrange font-satoshi flex items-center justify-center lg:h-[60px] lg:w-[197px]"
      >
        See More
      </Link>
    </section>
  );
}

export default Testimonials;
