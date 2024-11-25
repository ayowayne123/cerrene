"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Dots from "@/public/utils/dots";

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
    <section className="bg-white">
       <div className="bg-cerreneYellow top-gutter"></div>
      <div className="lg:h-[730px] bg-cerreneYellow rounded-b-[450px] overflow-hidden flex items-center  flex-col justify-center lg:gap-[72px]">
        <h1 className="font-medium text-cerreneGreen slg:text-[72px] text-[36px]">
          Find <span className="italic font-semibold">Answers,</span> Get Help.
        </h1>
        <p className="mt-4 text-cerreneGreen text-xl leading-7 text-center font-satoshi max-w-[670px]"> 
          Our goal is to ensure you have all the information you need for a
          seamless experience with Cerrene. If you have additional questions,
          feel free to contact us directly. We're here to help!
        </p>
      </div>
      <div className="mt-12 container text-[#4e4e4e]">
        <h2 className="text-cerreneGreen text-[56px] font-semibold mb-6">FAQs</h2>
        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-4 cursor-pointer flex justify-between items-start"
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
      <div className="mt-12 flex flex-col items-center">
        <h2 className="text-cerreneGreen font-medium text-2xl mb-4">
          Got More Questions For Us?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <Link href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" className="text-cerreneGreen">
            Chat with Us
          </Link>
          <a href="mailto:hello@cerrene.com" className="text-cerreneGreen">
            hello@cerrene.com
          </a>
          <p className="text-cerreneGreen">+234 901 2347 000</p>
          <Link href="#" className="text-cerreneGreen">
            Social Media
          </Link>
        </div>
      </div>
    </section>
  );
}
