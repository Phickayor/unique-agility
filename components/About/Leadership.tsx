import React from "react";

function Leadership() {
  return (
    <div className="bg-offWhite py-14" id="leadership">
      <div className="flex lg:flex-row flex-col justify-between gap-10">
        <div className="w-full gap-5 flex flex-col">
          <img
            src="/images/ceo-office.jpg"
            alt=""
            className="object-cover h-56 self-center w-full lg:h-72 xl:h-96 rounded-2xl"
          />
          <div className="space-y-3 text-center hidden lg:block">
            <h1 className="font-bold text-primaryHeader text-2xl">
              Onyinye Nwegbe
            </h1>
            <label>Our Founder / CEO</label>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-3xl xl:text-4xl font-bold">Our Leadership</h1>
          <p className="xl:text-lg">
            Unique Agility LLC's leadership excels in innovation, client
            satisfaction, and operational excellence, fostering talent and
            strategic, technically proficient services.
          </p>
          <p className="xl:text-lg">
            <span className="font-satoshi-semibold text-green">
              Onyinye Nwegbe
            </span>
            , Founder and CEO of Unique Agility LLC, is an expert in Agile
            methodologies with MBAs and certifications like PMP and SAFe RTE. He
            has held senior roles at major companies, excelling in team coaching
            and Agile transitions. He leads Unique Agility in innovation,
            community development, and impactful business solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
