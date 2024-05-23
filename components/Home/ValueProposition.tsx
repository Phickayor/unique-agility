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
        className="absolute -z-10 top-8 left-0 w-full "
      />
      <div className="flex md:flex-row flex-col gap-3 md:gap-5 w-full py-10">
        <div className="w-full md:w-2/5 relative self-center py-5 md:py-10 lg:py-0 lg:self-auto">
          <img
            src="/images/vp.jpeg"
            className="absolute top-0 -z-10 rounded-2xl h-full w-full object-cover"
          />
          <img
            src="/images/ellipse.png"
            className="absolute -z-10 lg:bottom-0 w-full inset-x-0"
          />
          <div className="absolute inset-0 bg-green opacity-80 rounded-2xl "></div>
          <div className="h-full w-full relative px-5 flex flex-col justify-center gap-4">
            <label className="text-white">Let's be Agile Together</label>
            <h1 className="text-white text-2xl sm:text-3xl xl:text-4xl font-satoshi-semibold">
              Our Value Proposition
            </h1>
          </div>
        </div>
        <div className="w-full bg-[#F8F8F8] p-5 lg:p-10 rounded-2xl">
          <p className="xl:text-2xl text-[#7D818C]">
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

        <div className=" p-5 md:p-10 grid lg:grid-cols-3 lg:gap-y-0 gap-4 lg:gap-8 place-content-center relative">
          <h1 className="text-white col-span-3 lg:col-span-1 text-center text-[20px] sm:text-3xl lg:text-4xl leading-snug font-satoshi-semibold self-center">
            What differentiates us ?
          </h1>
          <ul className="text-white col-span-2 grid grid-cols-2 text-xs md:text-lg xl:text-xl list-disc gap-y-5 gap-x-8 self-center mx-auto w-11/12">
            <li>Accountabilty in All Endeavors</li>
            <li>Value Added Services</li>
            <li>100% Client Satisfaction</li>
            <li>Customer Support Commitment</li>
            <li>Uncompromising Integrity</li>
            <li>Government procurement Expertise</li>
            <li>Cost-Effective and Customized Solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ValueProposition;
