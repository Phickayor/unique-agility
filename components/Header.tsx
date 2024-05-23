"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaBars, FaX } from "react-icons/fa6";
import FurtherNav from "./FurtherNav";

function Header({ activeBar }: { activeBar: string }) {
  const [subPath, setSubPath] = useState("");
  const [sideMenu, setSideMenu] = useState(false);
  const router = useRouter(); 

  const handleRouting = (dest: string) => {
    router.push(`${dest}`);
    setSideMenu(!sideMenu);
  };
  return (
    <div className="flex justify-between py-4 lg:py-6 font-inter sticky top-0 z-30 bg-white">
      <img
        src="/images/logo.png"
        alt="Unique Agility LLC"
        className="self-center w-1/3 lg:w-fit z-30"
      />
      <ul className="hidden text-[#8FA0AD] lg:flex gap-5 self-center ">
        <Link href="/" className={activeBar == "home" ? "text-black" : ""}>
          <li>Home</li>
        </Link>
        <div className={activeBar == "about" ? "text-black" : ""}>
          <li className="group">
            <Link href="/about">About Us</Link>
            <div className="z-20 text-black hidden group-hover:block">
              <FurtherNav info="about" />
            </div>
          </li>
        </div>
        <div className={activeBar == "services" ? "text-black" : ""}>
          <li className="group">
            <Link href="/services">Services</Link>
            <div className="z-20 text-black hidden group-hover:block">
              <FurtherNav info="services" />
            </div>
          </li>
        </div>
        <Link
          href="/contact"
          className={activeBar == "contact" ? "text-black" : ""}
        >
          <li>Contact us</li>
        </Link>
        <Link href="/blog" className={activeBar == "blog" ? "text-black" : ""}>
          <li>Blog</li>
        </Link>
      </ul>
      <button className="hidden lg:block border-2 z-30 rounded-3xl h-fit px-4 py-2 self-center">
        Let's Talk
      </button>
      {sideMenu ? (
        <FaX
          className="lg:hidden text-2xl font-semibold cursor-pointer self-center"
          onClick={(e) => setSideMenu(!sideMenu)}
        />
      ) : (
        <FaBars
          className="lg:hidden text-2xl font-semibold cursor-pointer self-center"
          onClick={(e) => setSideMenu(!sideMenu)}
        />
      )}
      {sideMenu && (
        <div className="fixed px-6  top-14 bg-white w-full h-screen left-0 overflow-y-auto">
          <ul className="text-black flex flex-col py-5 [&>*]:px-4 gap-2 [&>*]:py-3 self-center text-lg">
            <Link
              href="/"
              className="flex justify-between cursor-pointer hover:bg-slate-200"
            >
              Home
            </Link>

            <div>
              <div
                className="flex justify-between cursor-pointer"
                onClick={() =>
                  subPath == "about" ? setSubPath("") : setSubPath("about")
                }
              >
                <li>About us</li>
                {subPath == "about" ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              {subPath == "about" && (
                <ul className="flex flex-col text-base gap-3 py-2 list-disc list-inside hover:[&>*]:text-green [&>*]:cursor-pointer duration-300">
                  <li onClick={(e) => handleRouting("/about")}>Who we are</li>
                  <li onClick={(e) => handleRouting("/about/#mission")}>
                    Our Mission
                  </li>
                  <li onClick={(e) => handleRouting("/about/#vision")}>
                    Our Vision
                  </li>
                  <li onClick={(e) => handleRouting("/about/#values")}>
                    Our Core Values
                  </li>
                  <li onClick={(e) => handleRouting("/about/#corporate")}>
                    Our Corporate Objectives
                  </li>
                  <li onClick={(e) => handleRouting("/about/#customers")}>
                    Who we serve
                  </li>
                  <li onClick={(e) => handleRouting("/about/#leadership")}>
                    Our Leadership
                  </li>
                </ul>
              )}
            </div>
            <div>
              <div
                className="flex justify-between cursor-pointer"
                onClick={() =>
                  subPath == "services"
                    ? setSubPath("")
                    : setSubPath("services")
                }
              >
                <li>Services</li>
                {subPath == "services" ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              {subPath == "services" && (
                <ul className="flex flex-col text-base gap-3 py-2 list-disc list-inside hover:[&>*]:text-green [&>*]:cursor-pointer duration-300">
                  <li onClick={(e) => handleRouting("/services/#1")}>
                    Business Strategy and Planning/Support
                  </li>
                  <li onClick={(e) => handleRouting("/services/#2")}>
                    Ad- Hoc Technical Support
                  </li>
                  <li onClick={(e) => handleRouting("/services/#3")}>
                    Staff and End User Training
                  </li>
                  <li onClick={(e) => handleRouting("/services/#4")}>
                    Workforce Planning
                  </li>
                  <li onClick={(e) => handleRouting("/services/#5")}>
                    Upstream and Downstream Coaching
                  </li>
                  <li onClick={(e) => handleRouting("/services/#6")}>
                    HRIS Implementation and Assessment
                  </li>
                  <li onClick={(e) => handleRouting("/services/#7")}>
                    Talent Performance Evaluation
                  </li>
                  <li onClick={(e) => handleRouting("/services/#8")}>
                    Information Technology
                  </li>
                  <li onClick={(e) => handleRouting("/services/#9")}>
                    Business Management Solutions
                  </li>
                  <li onClick={(e) => handleRouting("/services/#10")}>
                    Lean Agile Management
                  </li>
                </ul>
              )}
            </div>
            <Link
              href="/contact"
              className="flex justify-between cursor-pointer hover:bg-slate-200"
            >
              Contact us
            </Link>
            <Link
              href="/blog"
              className="flex justify-between cursor-pointer hover:bg-slate-200"
            >
              Blogs
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
