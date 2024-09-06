import React from "react";
import Hero from "./hero";
import Testimonial from "./testimonial";

export const metadata = {
  title: "Testimonials | Cerrene ",
};
function Testimonials() {
  return (
    <main>
      <Hero />
      <Testimonial/>
    </main>
  );
}

export default Testimonials;
