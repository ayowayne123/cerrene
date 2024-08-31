import React from "react";
import Hero from "./hero";
import Services from "./services";

function Electrical() {
  return (
    <main className="bg-cerreneOffWhite text-[#4e4e4e]">
      <Hero />
      <Services />
    </main>
  );
}

export const metadata = {
  title: "Electrical Services | Cerrene ",
};
export default Electrical;
