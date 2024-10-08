import Image from "next/image";
import Experience from "./experience";
import Services from "./services";
import Serves from "./serves";
import Testimonials from "./testimonials";
import Discount from "./discount";

export const metadata = {
  title: "Cleaning Services | Cerrene ",
};

export default function Cleaning() {
  return (
    <main className="bg-cerreneOffWhite text-[#4e4e4e] overflow-hidden">
      <Experience />
      <Services />
      <Serves />
      <Testimonials />
      <Discount />
    </main>
  );
}
