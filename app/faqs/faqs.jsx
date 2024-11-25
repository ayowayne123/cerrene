"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import faqsImage from "@/public/images/faqs.svg"
import { FaWhatsapp , FaInstagram,FaRegEnvelope} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What services does Cerrene offer?",
      answer:
        "Cerrene provides comprehensive cleaning, electrical, and plumbing services for both residential and commercial clients.",
    },
    {
      question: "How can I book a service with Cerrene?",
      answer:
        "You can book a service by visiting our website and filling out the contact form, or by calling our customer service hotline.",
    },
    {
      question: "Do you offer emergency services?",
      answer:
        "Yes, Cerrene offers emergency electrical and plumbing services to address urgent issues promptly.",
    },
    {
      question: "What areas do you serve?",
      answer: "Cerrene proudly serves clients in Lagos, Nigeria, and Gaborone, Botswana.",
    },
    {
      question: "How do I prepare for a service appointment?",
      answer:
        "For cleaning services, please remove any personal items from the areas to be cleaned. For electrical or plumbing services, ensure that the technician has clear access to the work area.",
    },
    {
      question: "What should I do if I am not satisfied with the service?",
      answer:
        "Your satisfaction is our priority. If you are not satisfied with our service, please contact us immediately, and we will address your concerns promptly.",
    },
    {
      question: "What types of properties do you service?",
      answer:
        "We service a wide range of properties, including residential homes, offices, retail stores, restaurants, and commercial buildings.",
    },
    {
      question: "Can I get a quote before booking a service?",
      answer:
        "Absolutely! Contact us with the details of your request, and we will provide you with a detailed quote.",
    },
    {
      question: "Do you offer discounts for first-time customers?",
      answer: "Yes, we offer a 15% discount on your first service appointment with Cerrene.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods, including credit/debit cards, bank transfers, and mobile payments.",
    },
    {
      question: "Can I customize my service package?",
      answer:
        "Yes, we offer customizable service packages to meet your specific needs and requirements. Contact us to discuss your preferences.",
    },
    {
      question: "Are your technicians licensed and insured?",
      answer:
        "Yes, all of our technicians are fully licensed and insured to provide safe and reliable services.",
    },
    {
      question: "Are there any contracts or commitments required?",
      answer: "No, our services do not require long-term contracts or commitments.",
    },
  ];

  return (
    <section className="bg-white pb-24">
       <div className="bg-cerreneYellow top-gutter"></div>
      <div className="lg:h-[730px] bg-cerreneYellow rounded-b-[450px] overflow-hidden flex items-center  flex-col justify-center lg:gap-[72px]">
        <h1 className="font-medium text-cerreneGreen slg:text-[72px] text-[36px]">
          Find <span className="italic font-semibold">Answers,</span> Get Help.
        </h1>
        <p className="mt-4 text-cerreneGreen text-xl leading-7 text-center font-satoshi max-w-[670px]"> 
          Our goal is to ensure you have all the information you need for a
          seamless experience with Cerrene. If you have additional questions,
          feel free to contact us directly. We&apos;re here to help!
        </p>
      </div>
      <div className="container text-[#4e4e4e]">
        <h2 className="text-cerreneGreen text-[56px] font-semibold py-10 border-b border-[#4C4D1680]">FAQs</h2>
        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#4C4D1680] py-10 cursor-pointer flex justify-between items-start"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex space-x-[72px] ">
              <span className=" font-medium flex flex-row  text-[28px] text-cerreneLightGreen">
              {`${(index + 1).toString().padStart(2, "0")}`}
                </span>
             
                <h3 className=" font-medium flex flex-col  text-[28px] ">
            <span>{faq.question} </span>
            {activeIndex === index && (
                <p className="mt-2 text-gray-600 leading-6 font-satoshi text-lg lg:max-w-[650px] slg:max-w-[590px]">{faq.answer}</p>
              )}
                </h3>
               
              </div>
              <span className="text-cerreneLightGreen font-bold  text-[28px] ">
                  {activeIndex === index ? "-" : "+"}
                </span>
              
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center container h-full">
        <div className="relative slg:h-[310px] slg:w-[615px] h-[200px] w-full  translate-y-5 z-10"> <Image src={faqsImage} alt="Image of faqs" className="object-fit" fill /></div>
       
       <div className="bg-cerreneLightGreen text-cerreneYellow flex flex-col items-center justify-between slg:pt-16 slg:pb-28  w-full slg:h-[430px] h-96 z-20 rounded-[20px]">
       <h2 className="font-medium text-2xl slg:text-[40px] mb-4">
          Got More Questions For Us?
        </h2>
        <div className="grid grid-cols-2 md:flex flex-row items-center justify-center  slg:gap-[125px] text-center font-satoshi text-xl">
          <Link href="https://wa.me/2347061686434" target="_blank" className="text-cerreneYellow flex flex-col gap-1 items-center justify-center">
          <span className="text-center text-3xl"><FaWhatsapp/></span>
          <span>Chat with Us</span>
            
          </Link>
          <a href="mailto:hello@cerrene.com" className="text-cerreneYellow flex flex-col gap-1 items-center justify-center">
            <span className="text-center text-3xl"><FaRegEnvelope/></span>
            <span></span>
            hello@cerrene.com
          </a>
          <p className="text-cerreneYellow flex flex-col gap-1 items-center justify-center">
            <span className="text-center text-3xl"><FiPhoneCall/></span>
            <span></span>+234 901 2347 000</p>
          <Link href="#" className="text-cerreneYellow flex flex-col gap-1 items-center justify-center">
          <span className="text-center text-3xl"><FaInstagram/></span>
          <span></span>
            Social Media
          </Link>
        </div>
        </div>
       
      </div>
    </section>
  );
}
