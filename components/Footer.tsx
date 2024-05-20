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

function Footer({hideContact }: { hideContact: boolean }) {
  return (
    <div className="py-4">
      <div className="flex">
        <div>
          <img src="/images/logo.png" />
          <ul className="py-5 space-y-3 text-black">
            <li>About us</li>
            <li>Services</li>
            <li>Join us</li>
            <li>Contact us</li>
            <li>Our Blog</li>
          </ul>
          <div className="flex gap-3 text-xl">
            <FaInstagram />
            <FaWhatsapp />
            <CiYoutube />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>
        <div className="flex-1 text-center self-center">
          {!hideContact&&<button className="bg-green font-semibold text-white px-8 py-3 text-lg rounded-full">
            Contact us
          </button>}
        </div>
        <div className="self-center">
          <h3 className="text-xl font-satoshi-semibold">Contact</h3>
          <ul className="py-5 space-y-3 font-asap">
            <li className="flex gap-5">
              <FaPhone className="self-center" />
              <span className="text-[#A7ABB6] self-center">(406) 555-0120</span>
            </li>
            <li className="flex gap-5">
              <FaEnvelope className="self-center" />
              <span className="text-[#A7ABB6] self-center">
                unique@gmail.com
              </span>
            </li>
            <li className="flex gap-5">
              <FaLocationDot className="self-center" />
              <span className="text-[#A7ABB6] self-center">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </span>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-end text-[#A7ABB6] font-jakar">
        © 2024 unique. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
