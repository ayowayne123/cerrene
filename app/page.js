import Image from "next/image";
import Hero from "./hero";
import Photos from "./photogrid";
import Discount from "./discount";
import Who from "./whoweare";

export default function Home() {
  return (
    <main className="">
   <Hero/>
   <Photos/>
   <Discount/>
   <Who/>
    </main>
  );
}
