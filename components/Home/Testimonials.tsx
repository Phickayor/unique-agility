import React from "react";
import { FaAngleRight } from "react-icons/fa6";

function Testimonials() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-satoshi-bold">Testimonial</h1>
      <img src="/images/meet.png" className="mx-auto w-fit self-center " />
      <div className="flex flex-col gap-4 mx-auto w-9/12">
        <p className="text-xl leading-loose mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis
          autem possimus facilis asperiores rem ullam, dolorem id tenetur
          quaerat, veritatis voluptatum alias deserunt eveniet. Molestias
          repellat numquam quae corporis?
        </p>
        <div className="gap-2">
          <h5 className="font-satoshi-semibold">
            Larry Pageim Fred & Sergey Brin
          </h5>
          <p>Sr. Director, Brand Marketing</p>
        </div>
        <div className="p-4 self-center bg-black rounded-full">
          <FaAngleRight className="text-3xl text-white" />
        </div>
      </div>
      <div className="relative my-10">
        <img
          src="/images/test.jpeg"
          className="absolute -z-10 rounded-2xl w-full h-full object-cover"
        />
        <img
          src="/images/waves.png"
          className="absolute z-10 rounded-2xl w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green opacity-80 rounded-2xl "></div>

        <div className="relative p-10  text-left space-y-3 ">
          <h1 className="text-white text-3xl xl:text-4xl font-satoshi-semibold">
            Work Together with Unique Agility
          </h1>
          <p className="text-lg text-[#A7ABB6]">
            We provide strategic technology, human capital, and business
            consulting to Government and Commercial Clients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
