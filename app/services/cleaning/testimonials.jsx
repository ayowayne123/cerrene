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
          text={`Cerrene\'s cleaning service has been a game-changer for our office. Their attention to detail is remarkable, and they always leave our space looking pristine.`}
          username="Francis O."
          occupation="Lagos, Nigeria"
          src={testimonials1}
        />
        <Testimony
          text={`I can\'t thank Cerrene enough for their exceptional cleaning service. They transformed my home, and I couldn\'t be happier with the results.`}
          username="Fatima M."
          occupation="Gaborone, Botswana"
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
