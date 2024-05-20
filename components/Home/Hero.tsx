import React from "react";

function Hero() {
  return (
    <div className="flex gap-5 py-10 xl:py-20">
      <div className="flex flex-col gap-2 h-fit self-center">
        <img src="/images/right-arrow.png" className="scale-75" />
        <img src="/images/left-frame.png" className="scale-150 object-cover" />
      </div>
      <div className="text-center space-y-10">
        <h1 className="font-satoshi-bold text-5xl xl:text-7xl xl:leading-[80px]">
          Strategic Solutions for{" "}
          <span className="text-green">Government & Commercial Clients</span>
        </h1>
        <p className="text-green mx-auto w-8/12">
          We provide strategic technology, human capital, and business
          consulting to Government and Commercial Clients.
        </p>
      </div>

      <div className="flex flex-col gap-2 self-center h-fit">
        <img src="/images/left-arrow.png" className="scale-75" />
        <img src="/images/right-frame.png" className="scale-150" />
      </div>
    </div>
  );
}

export default Hero;
