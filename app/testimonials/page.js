import React from "react";
import Hero from "./hero";
import Videos from "./videos";
import Testimonial from "./testimonial";
import Discount from "./discount";

export const metadata = {
  title: "Testimonials | Cerrene ",
};
function Testimonials() {
  return (
    <main className="z-10 overflow-hidden">
      <Hero />
      <Testimonial />
      <Videos />
      <Discount />
    </main>
  );
}

export default Testimonials;
