import AboutUs from "@/components/About/AboutUs";
import Customers from "@/components/About/Customers";
import Leadership from "@/components/About/Leadership";
import MissionAndVision from "@/components/About/MissionAndVision";
import Values from "@/components/About/Values";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activeBar={"about"} />
      <div className="flex-1">
        <AboutUs />
        <MissionAndVision />
        <Values />
        <Customers />
        <Leadership />
      </div>
      <Footer hideContact={false} />
    </div>
  );
}

export default About;
