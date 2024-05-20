import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AllServices from "@/components/Services/AllServices";
import React from "react";

function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activeBar={"services"} />
      <div className="flex-1">
        <AllServices />
      </div>
      <Footer hideContact={false} />
    </div>
  );
}

export default Services;
