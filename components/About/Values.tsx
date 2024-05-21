import React from "react";

function Values() {
  return (
    <div className="py-10 xl:py-20">
      <h2 className="text-3xl xl:text-4xl text-center font-satoshi-semibold">
        Our Core Values
      </h2>
      <ul className="grid grid-cols-3 gap-5 py-10  [&>*]:bg-green text-white sm:text-xl lg:text-2xl md:[&>*]:py-6 [&>*]:py-4 [&>*]:rounded-xl [&>*]:self-center text-center">
        <li>Innovation</li>
        <li>Collaboration</li>
        <li>Integrity</li>
        <li>Diversity</li>
        <li>Inclusivity</li>
        <li>Excellence</li>
      </ul>
      <div className="relative ">
        <img
          src="/images/diff.jpeg"
          className="absolute -z-10 rounded-2xl w-full h-full object-cover"
        />
        <img
          src="/images/ellipse.png"
          className="absolute -z-10 bottom-0 right-1/4 w-1/2 "
        />
        <div className="absolute inset-0 bg-green opacity-80 rounded-2xl "></div>

        <div className="mx-auto w-full px-10 grid lg:grid-cols-3 lg:gap-y-0 gap-4 lg:gap-8 place-content-center relative p-5 md:p-10 text-center xl:text-left">
          <h1 className="text-white col-span-3 lg:col-span-1 text-center text-[20px] sm:text-3xl lg:text-4xl leading-snug font-satoshi-semibold self-center">
            Our Corporate Objectives
          </h1>
          <ul className="text-white mx-auto sm:w-11/12 col-span-2 lg:grid grid-cols-2 flex flex-wrap [&>*]:self-center text-[12px] sm:text-sm md:text-lg xl:text-xl list-disc gap-6 self-center">
            <li>Continuously Innovate</li>
            <li>Promote Diversity and Inclusivity</li>
            <li>Maintain 100% Client Satisfaction</li>
            <li>Consult with the Government as Middlemen</li>
            <li>Foster Strong Partnerships</li>
            <li>Provide Cost-Effective Solutions</li>
            <li>Community and Social Empowerment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Values;
