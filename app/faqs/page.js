import Faqs from "./faqs";

export const metadata = {
    title: "Frequently Asked Questions | Cerrene ",
  };
  
  export default function FaqsPage() {
    return (
      <main className="bg-cerreneOffWhite text-[#4e4e4e] overflow-hidden">
       <Faqs/>
      </main>
    );
  }