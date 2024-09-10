import React from "react";
import Testimony from "@/public/utils/testimony";
import testimonials1 from "@/public/images/testimonials/testimonials1.png";
import testimonials2 from "@/public/images/testimonials/testimonials2.png";
import Link from "next/link";

function Testimonials() {
  return (
    <section className=" container">
      <h2 className="font-medium lg:text-[50px] xl:text-[56px] md:text-[40px] py-8 text-[24px] ">
        Clients&apos; Testimonials
      </h2>
      <div className="grid md:grid-cols-2 slg:gap-6 md:gap-4 gap-6 ">
        <Testimony
          text={`Cerrene\'s commercial plumbing service was exceptional. They responded promptly to our emergency call minimizing downtime for our business`}
          username="James T."
          occupation="Business Owner"
          src={testimonials1}
        />
        <Testimony
          text={`I\'ve used Cerrene for several residential plumbing projects. Their team is knowledgeable and always goes above and beyond to ensure the job is done right.`}
          username="Sarah P."
          occupation="Home Owner"
          src={testimonials2}
        />
      </div>
      <Link href="/testimonials" className="orangeBorderButton ">
        See More
      </Link>
    </section>
  );
}

export default Testimonials;
