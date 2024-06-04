import Link from "next/link";
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
      <div className="flex justify-between md:grid grid-cols-3 lg:grid-cols-4 gap-2">
        <div>
          <img src="/images/logo.png" className="w-4/5 lg:w-fit" />
          <ul className="py-5 space-y-3 [&>*]:block text-black text-xs md:text-lg lg:text-xl">
            <Link href="/about">
              <li>About us</li>
            </Link>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href="/">
              <li>Join Us</li>
            </Link>
            <Link href="/contact">
              <li>Contact us</li>
            </Link>
            <Link href="/blog">
              <li>Our Blog</li>
            </Link>
          </ul>
          <div className="flex gap-2 md:gap-3 text-xs md:text-lg lg:text-xl duration-300 [&>*]:cursor-pointer hover:[&>*]:text-green">
            <a href="https://www.linkedin.com/company/unique-agility-llc/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="hidden md:block text-center self-center lg:col-span-2">
          {!hideContact && (
            <Link
              href="/contact"
              className="px-6 py-2 rounded-full bg-green text-xs md:text-lg shadow-xl text-white"
            >
              Contact us
            </Link>
          )}
        </div>
        <div className="self-center">
          <h3 className="text-lg lg:text-xl font-satoshi-semibold">Contact</h3>
          <ul className="py-5 space-y-3 font-asap text-xs md:text-lg lg:text-xl">
            <li className="flex gap-2 md:gap-5">
              <FaPhone className="self-center" />
              <span className="text-[#A7ABB6] self-center">(443)-863-0219</span>
            </li>
            <li className="flex gap-2 md:gap-5">
              <FaEnvelope className="self-center" />
              <span className="text-[#A7ABB6] self-center">
                info@uniqueagility.com
              </span>
            </li>
            <li className="flex gap-2 md:gap-5">
              <FaLocationDot className="self-center" />
              <span className="text-[#A7ABB6] self-center">
                3724 Putnam road RALEIGH, NC, 27610
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
