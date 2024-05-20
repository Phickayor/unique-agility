import Link from "next/link";
import React from "react";

function Header({ activeBar }: { activeBar: string }) {
  return (
    <div className="flex justify-between py-6 font-inter">
      <img
        src="/images/logo.png"
        alt="Unique Agility LLC"
        className="self-center"
      />
      <ul className="text-[#8FA0AD] flex gap-5 self-center">
        <Link href="/home" className={activeBar == "home" ? "text-black" : ""}>
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About Us</li>
        </Link>
        <Link href="/services">
          <li>Services</li>
        </Link>
        <Link href="/contact">
          <li>Contact us</li>
        </Link>
        <Link href="/home">
          <li>Blog</li>
        </Link>
      </ul>
      <button className="border-2 rounded-3xl h-fit px-4 py-2 self-center">
        Let's Talk
      </button>
    </div>
  );
}

export default Header;
