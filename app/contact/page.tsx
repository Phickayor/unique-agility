import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activeBar={"contact"} />
      <div className="flex-1">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
