import React from "react";

function Values() {
  return (
    <div className="py-10 xl:py-20" id="values">
      <h2 className="text-2xl md:text-3xl xl:text-4xl text-center font-satoshi-semibold">
        Our Core Values
      </h2>
      <ul className="grid grid-cols-3 gap-2.5 md:gap-5 py-10  [&>*]:bg-green text-white sm:text-xl lg:text-2xl md:[&>*]:py-6 [&>*]:py-4 [&>*]:rounded-xl [&>*]:self-center text-center">
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
          className="absolute bottom-0 right-1/4 w-1/2 "
        />
        <div className="absolute inset-0 bg-green opacity-80 rounded-2xl "></div>

        <div
          id="corporate"
          className="mx-auto w-full lg:grid grid-cols-3 lg:gap-y-0 space-y-4 lg:gap-8 relative p-5 md:p-10 "
        >
          <h1 className="text-white col-span-3 lg:col-span-1 text-center text-[20px] sm:text-3xl lg:text-4xl leading-snug font-satoshi-semibold self-center ">
            Our Corporate Objectives
          </h1>
          <ul className="text-white col-span-2 grid grid-cols-2 text-xs gap-4 w-full md:text-lg list-disc md:gap-6 px-2 lg:px-0">
            <li>Continuously Innovate</li>
            <li>Foster Strong Partnerships</li>
            <li>Promote Diversity and Inclusivity</li>
            <li>Maintain 100% Client Satisfaction</li>
            <li>Community and Social Empowerment</li>
            <li>Provide Cost-Effective Solutions</li>
            <li>Consult with the Government as Middlemen</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Values;
