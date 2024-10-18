"use client";
import React, { useEffect } from "react";
import Hero from "./hero";
import Photos from "./photogrid";
import Discount from "./discount";
import Who from "./whoweare";
import Services from "./services";
import Solution from "./solution";
import Discover from "./discover";
import Contact from "./contact";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="overflow-hidden">
      <Hero />
      <Photos />
      <Discount />
      <Who />
      <Services />
      <Solution />
      <Discover />

      <Contact />
    </main>
  );
}
