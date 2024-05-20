import React from "react";

function Leadership() {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-satoshi-semibold ">Our Leadership</h1>
      <p className="mx-auto w-10/12 py-4 leading-loose text-lg text-[#516371]  ">
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
      <div className="flex gap-5 w-full py-2 ">
        <div className="xl:w-2/5 relative">
          <img
            src="/images/ellipse.png"
            className="absolute z-10 bottom-0 left-0 w-full"
          />
          <div className="absolute inset-0 bg-green opacity-80 rounded-2xl "></div>
          <div className="h-full w-full relative px-5 flex flex-col justify-center gap-4 text-left">
            <label className="text-[#E4E4E4] text-sm ">Our Founder/CEO</label>
            <h1 className="text-white text-3xl xl:text-4xl font-satoshi-semibold">
              Onyinye Nwegbe
            </h1>
          </div>
        </div>
        <div className="w-full bg-[#F8F8F8] p-10 rounded-2xl">
          <p className="text-xl text-left text-[#7D818C]">
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
