import Image from "next/image";
import AboutHero from "./aboutHero";
import Mission from "./misson";
import Success from "./success";
import Expertise from "./expertise";
import Discount from "./discount";

export const metadata = {
  title: "About CERRENE | Cerrene ",
};

export default function About() {
  return (
    <main className="overflow-hidden" >
      <AboutHero />
      <Mission />
      <Success />
      <Expertise />
      <Discount />
    </main>
  );
}
