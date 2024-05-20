import React from "react";

function MissionAndVision() {
  return (
    <div className="py-10 flex flex-col gap-20">
      <div className="flex justify-between py-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl xl:text-4xl font-satoshi-semibold">
            Our Mission
          </h2>
          <p className="font-satoshi-light text-2xl text-[#516371]">
            Our mission if to empower organizations to thrive by delivering
            tailored, agile, and technology-driven business solutions that
            exceed expectations
          </p>
        </div>
        <div className="w-full h-full ">
          <div className="relative">
            <img
              src="/images/mission-1.jpeg"
              className="absolute z-20 -top-10 left-32 rounded-full w-52 h-52"
            />
            <img
              src="/images/mission-2.jpeg"
              className="absolute right-14  top-10 rounded-full w-52 h-52"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between py-5">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl xl:text-4xl font-satoshi-semibold">
            Our Vision
          </h2>
          <p className="font-satoshi-light text-2xl text-[#516371]">
            Our vision a leading provider of innovative and adaptive business
            solutions globally, driving operational excellence for our clients.
          </p>
        </div>
        <div className="w-full h-full ">
          <div className="relative">
            <img
              src="/images/mission-1.jpeg"
              className="absolute z-20 top-10 left-32 rounded-full w-52 h-52"
            />
            <img
              src="/images/mission-2.jpeg"
              className="absolute right-14  top-10 rounded-full w-52 h-52"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionAndVision;
