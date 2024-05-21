import React from "react";

function Leadership() {
  return (
    <div className="text-center py-10">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-satoshi-semibold ">
        Our Leadership
      </h1>
      <p className="mx-auto md:w-10/12 py-4 md:leading-loose md:text-lg text-[#516371]  ">
        Our leadership team at Unique Agility LLC, comprised of seasoned
        professionals, excels in innovation, client satisfaction, and
        operational excellence. They guide the company with strategic thinking,
        business strategy, and technology management, ensuring our services are
        technically proficient and aligned with client needs. Committed to
        fostering a collaborative culture, they prioritize talent development
        for both internal teams and clients, driving continuous improvement.
        Their expertise and integrity are key to the success of Unique Agility
        LLC.
      </p>
      <div className="flex gap-3 md:gap-5 w-full  py-2 ">
        <div className="w-2/5 relative self-center py-5 md:py-10 lg:py-0 lg:self-auto">
          <img
            src="/images/ellipse.png"
            className="absolute z-10 bottom-0 left-0 w-full"
          />
          <div className="absolute inset-0 bg-green opacity-80 rounded-2xl "></div>
          <div className="h-full w-full relative px-5 flex flex-col justify-center gap-4">
            <label className="text-[#E4E4E4] text-[8px] sm:text-sm xl:text-base">
              Our Founder/CEO
            </label>
            <h1 className="text-white text-sm sm:text-3xl xl:text-4xl font-satoshi-semibold">
              Onyinye Nwegbe
            </h1>
          </div>
        </div>
        <div className="w-full bg-[#F8F8F8] p-5 lg:p-10 rounded-2xl">
          <p className="text-[10px] sm:text-xl xl:text-2xl text-[#7D818C]">
            Onyinye Nwegbe, Founder and CEO of Unique Agility LLC, is an expert
            in Agile methodologies with MBAs and certifications like PMP and
            SAFe RTE. He has held senior roles at major companies, excelling in
            team coaching and Agile transitions. He leads Unique Agility in
            innovation, community development, and impactful business solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
