import Image from "next/image";
import AboutHero from "./aboutHero";
import Mission from "./misson";
import Success from "./success";
import Expertise from "./expertise";
import Discount from "./discount";

export default function About() {
  return (
    <main className="">
        <AboutHero/>
        <Mission/>
        <Success/>
        <Expertise/>
        <Discount/>
  
    </main>
  );
}
