import React from "react";
import services from "@/utils/services.json";
function AllServices() {
  return (
    <div className="text-center space-y-5">
      <h1 className="text-4xl font-satoshi-bold">Our Services</h1>
      <p className="mx-auto leading-loose text-lg text-[#516371]">
        Unique Agility LLC takes pride in its diverse and robust core
        competencies, which collectively empower us to offer comprehensive and
        tailored solutions across various business domains. Our proficiency
        extends beyond conventional service delivery, encompassing a range of
        skills that contribute to the success and growth of the organizations we
        partner with.
      </p>

      <div>
        {services.map((service, index) => (
          <div className="relative my-10">
            <img
              src={service.image}
              className="absolute -z-10 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-green opacity-80 "></div>

            <div className="relative p-5 mx-auto w-9/12 text-left space-y-5 ">
              <h1 className="text-white text-3xl xl:text-4xl text-center font-satoshi-semibold">
                {service.name}
              </h1>
              <ul className="list-disc text-xl space-y-5 font-satoshi-light text-[#A7ABB6]">
                {service.description.map((desc, index) => (
                  <li key={index}> {desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllServices;
