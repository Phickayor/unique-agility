import React from "react";
import services from "@/utils/services.json";
import abouts from "@/utils/abouts.json";
import Link from "next/link";
function FurtherNav({ info }: { info: string }) {
  return (
    <div className="absolute left-0 to24 bg-white w-full py-10">
      <ul className="mx-auto w-fit grid grid-cols-3 gap-5 gap-x-10 list-disc">
        {info == "services" &&
          services.map((service, index) => (
            <li key={index}>
              <Link href={service.link} className="hover:text-green">
                {service.name}
              </Link>
            </li>
          ))}
        {info == "about" &&
          abouts.map((about, index) => (
            <li key={index}>
              <Link href={about.link} className="hover:text-green">
                {about.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default FurtherNav;
