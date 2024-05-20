import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Home/Hero";
import Partners from "@/components/Home/Partners";
import Testimonials from "@/components/Home/Testimonials";
import ValueProposition from "@/components/Home/ValueProposition";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activeBar={"home"} />
      <div className="flex-1">
        <Hero />
        <ValueProposition />
        <Partners />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}
