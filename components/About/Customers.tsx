import React from "react";

function Customers() {
  return (
    <div>
      <h2 className="text-3xl xl:text-4xl text-center font-satoshi-semibold">
        Who we serve
      </h2>
      <div className="flex justify-center gap-5">
        <ul className="flex flex-col gap-5 py-10 [&>*]:bg-green text-white text-2xl [&>*]:px-10 [&>*]:py-6 [&>*]:rounded-xl [&>*]:self-end [&>*]:w-fit text-center">
          <li>Government Agencies</li>
          <li>Large and Small businesses</li>
          <li> Healthcare Institutes</li>
        </ul>
        <ul className="flex flex-col gap-5 py-10 [&>*]:bg-green text-white text-2xl [&>*]:px-10 [&>*]:py-6 [&>*]:rounded-xl [&>*]:w-fit text-center">
          <li>Non-profit organization</li>
          <li>Educational Institutes</li>
          <li>Individuals and much more</li>
        </ul>
      </div>
    </div>
  );
}

export default Customers;
