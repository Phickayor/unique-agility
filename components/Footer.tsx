import React from "react";
import { CiYoutube } from "react-icons/ci";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaLocationDot
} from "react-icons/fa6";

function Footer({ hideContact }: { hideContact: boolean }) {
  return (
    <div className="py-4 ">
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-2">
        <div>
          <img src="/images/logo.png" className="w-4/5 lg:w-fit" />
          <ul className="py-5 space-y-3 text-black text-xs md:text-lg lg:text-xl">
            <li>About us</li>
            <li>Services</li>
            <li>Join us</li>
            <li>Contact us</li>
            <li>Our Blog</li>
          </ul>
          <div className="flex gap-2 md:gap-3 text-xs md:text-lg lg:text-xl">
            <FaInstagram />
            <FaWhatsapp />
            <CiYoutube />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>
        <div className="text-center self-center lg:col-span-2">
          {!hideContact && (
            <button className="px-6 py-2 rounded-full bg-green text-xs md:text-lg shadow-xl text-white">
              Contact us
            </button>
          )}
        </div>
        <div className="self-center">
          <h3 className="text-lg lg:text-xl font-satoshi-semibold">Contact</h3>
          <ul className="py-5 space-y-3 font-asap text-xs md:text-lg lg:text-xl">
            <li className="flex gap-2 md:gap-5">
              <FaPhone className="self-center" />
              <span className="text-[#A7ABB6] self-center">(406) 555-0120</span>
            </li>
            <li className="flex gap-2 md:gap-5">
              <FaEnvelope className="self-center" />
              <span className="text-[#A7ABB6] self-center">
                unique@gmail.com
              </span>
            </li>
            <li className="flex gap-2 md:gap-5">
              <FaLocationDot className="self-center" />
              <span className="text-[#A7ABB6] self-center">
                2972 Westheimer
                <br /> Rd. Santa Ana, Illinois 85486
              </span>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-end text-[#A7ABB6] font-jakar text-xs sm:text-base">
        © 2024 unique. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
