import React from "react";

function Values() {
  return (
    <div className="py-20">
      <h2 className="text-3xl xl:text-4xl text-center font-satoshi-semibold">
        Our Core Values
      </h2>
      <ul className="grid grid-cols-3 gap-5 py-10 [&>*]:bg-green text-white text-2xl [&>*]:px-10 [&>*]:py-6 [&>*]:rounded-xl [&>*]:self-center text-center">
        <li>Innovation</li>
        <li>Collaboration</li>
        <li>Integrity</li>
        <li>Diversify and Inclusivity</li>
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

        <div className="grid grid-cols-3 gap-x-8 place-content-center relative p-10">
          <h1 className="text-white mx-auto w-fit text-4xl leading-snug font-satoshi-semibold self-center">
            Our Corporate Objectives
          </h1>
          <ul className="text-white text-lg xl:text-xl list-disc space-y-4 self-center">
            <li>Continuously Innovate</li>
            <li>Promote Diversity and Inclusivity</li>
            <li>Maintain 100% Client Satisfaction</li>
            <li>Consult with the Government as Middlemen</li>
          </ul>
          <ul className="text-white text-lg xl:text-xl list-disc space-y-4 self-center">
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
