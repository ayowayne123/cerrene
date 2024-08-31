import Image from "next/image";
import Expertise from "./expertise";
import Services from "./services";
import Serves from "./serves";
import Testimonials from "./testimonials";
import Discount from "./discount";

export const metadata = {
  title: "Plumbing Services | Cerrene ",
};
export default function Plumbing() {
  return (
    <main className="bg-cerreneOffWhite text-[#4e4e4e]">
      <Expertise />
      <Services />
      <Serves />
      <Testimonials />
      <Discount />
    </main>
  );
}
