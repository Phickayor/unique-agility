import React from "react";

function MissionAndVision() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div id="mission" className="flex justify-between py-10">
        <div className="flex flex-col gap-4 md:w-fit">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-satoshi-semibold">
            Our Mission
          </h2>
          <p className="font-satoshi-light sm:text-lg lg:text-2xl text-[#516371]">
            Our mission is to empower organizations to thrive by delivering
            tailored, agile, and technology-driven business solutions that
            exceed expectations
          </p>
        </div>
        <div className="flex justify-center space-y-10 lg:space-y-20 -space-x-10 lg:-space-x-20 w-full">
          <img
            src="/images/mission-1.jpeg"
            className="z-20 rounded-full w-16 sm:w-32 lg:w-52 h-16 sm:h-32 lg:h-52"
          />
          <img
            src="/images/mission-2.jpeg"
            className="rounded-full w-16 sm:w-32 lg:w-52 h-16 sm:h-32 lg:h-52"
          />
        </div>
      </div>
      <div id="vision" className="flex justify-between py-5">
        <div className="flex flex-col gap-4 md:w-fit">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-satoshi-semibold">
            Our Vision
          </h2>
          <p className="font-satoshi-light sm:text-lg lg:text-2xl text-[#516371]">
            Our vision is to be a global leader in delivering innovative and adaptive business solutions, consistently driving operational excellence for our clients.
          </p>
        </div>
        <div className="relative flex -space-x-5 sm:-space-x-10 lg:-space-x-20 justify-center w-full">
          <img
            src="/images/vision-1.png"
            className="z-20 top-0 rounded-full w-16 sm:w-32 lg:w-52 h-16 sm:h-32 lg:h-52"
          />
          <img
            src="/images/vision-2.png"
            className="rounded-full w-16 sm:w-32 lg:w-52 h-16 sm:h-32 lg:h-52"
          />
        </div>
      </div>
    </div>
  );
}

export default MissionAndVision;
