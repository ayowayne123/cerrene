import React from "react";
import Hero from "./hero";
import Services from "./services";
import Serves from "./serves";
import Testimonials from "./testimonials";
import Discount from "./discount";

function Electrical() {
  return (
    <main className="bg-cerreneOffWhite text-[#4e4e4e]">
      <Hero />
      <Services />
      <Serves />
      <Testimonials />
      <Discount />
    </main>
  );
}

export const metadata = {
  title: "Electrical Services | Cerrene ",
};
export default Electrical;
