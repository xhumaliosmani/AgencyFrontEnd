import React from "react";
import Link from "next/link";
import Navbar from "@/src/Navbar/Navbar";
import Footer from "@/src/Footer/Footer";
import CallToAction from "@/src/Calltoaction/CallToAction";
import HeroSection from "@/src/HeroSection/HeroSection";
import Cards from "@/src/Cards/Cards";
import Features from "@/src/Features/Features";
import Script from "next/script";
import Testimonial from "@/src/Testemonial/Testimonial";

const home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Cards />
      <CallToAction />
      <Testimonial/>
      <Footer />
    </div>
  );
};

export default home;
