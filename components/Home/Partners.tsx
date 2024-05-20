import React from "react";

function Partners() {
  return (
    <div className="py-20 space-y-5">
      <div>
        <label className="text-center block text-[#A7ABB6]">
          Trusted Partner
        </label>
        <div className="flex gap-5 mx-auto w-fit py-3">
          <img src="/images/partner-1.png" />
          <img src="/images/partner-2.png" />
          <img src="/images/partner-3.png" />
          <img src="/images/partner-4.png" />
          <img src="/images/partner-5.png" />
        </div>
      </div>
      <div>
        <label className="text-center block text-[#A7ABB6]">
          Some of our past projects
        </label>
        <div className="flex gap-5 mx-auto w-fit py-3">
          <img src="/images/project-1.png" />
          <img src="/images/project-2.png" />
          <img src="/images/project-3.png" />
        </div>
      </div>
    </div>
  );
}

export default Partners;
