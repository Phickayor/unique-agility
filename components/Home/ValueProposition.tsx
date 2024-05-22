import React from "react";

function ValueProposition() {
  return (
    <div className="relative">
      <img
        src="/images/ellipse-border.png"
        className="absolute top-0 left-0 w-full -z-10  "
      />
      <img
        src="/images/ellipse.png"
        className="absolute -z-10 top-8 left-0 w-full"
      />
      <div className="flex gap-3 sm:gap-5 w-full py-10 sm:py-20 ">
        <div className="xl:w-2/5 relative">
          <img
            src="/images/vp.jpeg"
            className="absolute -z-10 rounded-2xl h-full object-cover"
          />
          <img
            src="/images/ellipse.png"
            className="absolute -z-10 bottom-0 left-0 w-full"
          />
          <div className="absolute inset-0 bg-green opacity-80 rounded-2xl "></div>
          <div className="h-full w-full relative px-5 flex flex-col justify-center gap-4">
            <label className="text-[#E4E4E4] text-[8px] sm:text-sm xl:text-base">
              Let's be Agile Together
            </label>
            <h1 className="text-white text-sm sm:text-3xl xl:text-4xl font-satoshi-semibold">
              Our Value Proposition
            </h1>
          </div>
        </div>
        <div className="w-full bg-[#F8F8F8] p-5 sm:p-10 rounded-2xl">
          <p className="text-[10px] sm:text-xl xl:text-2xl text-[#7D818C]">
            We offer a unique blend of expertise and adaptability, delivering
            tailored business solutions that simplify operational complexities.
            Our commitment to innovation, client satisfaction, and unwavering
            integrity positions us as a reliable and adaptive partner for
            organizations seeking excellence.
          </p>
        </div>
      </div>
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

        <div className=" p-5 md:p-10 grid lg:grid-cols-3 lg:gap-y-0 gap-4 lg:gap-8 place-content-center relative text-center xl:text-left">
          <h1 className="text-white col-span-3 lg:col-span-1 mx-auto w-fit text-[20px] sm:text-3xl lg:text-4xl leading-snug font-satoshi-semibold self-center">
            What differentiates us ?
          </h1>
          <ul className="text-white col-span-2 lg:grid grid-cols-2 flex flex-wrap [&>*]:self-center text-[12px] sm:text-sm md:text-lg xl:text-xl list-disc gap-y-5 gap-x-8 self-center">
            <li>Accountabilty in All Endeavors</li>
            <li>Value Added Services</li>
            <li>Government procurement Expertise</li>
            <li>100% Client Satisfaction</li>
            <li>Customer Support Commitment</li>
            <li>Uncompromising Integrity</li>
            <li>Cost-Effective and Customized Solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ValueProposition;
