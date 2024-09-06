"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoDark from "@/public/images/logoDark.png";
import logoLight from "@/public/images/logoLight.png";
import doodle from "@/public/icons/doodle.svg"; // Import the doodle image
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-0 bg-transparent slg:h-[94px] h-[60px] md:h-[80px]  z-20">
      <div className="h-full flex flex-row justify-between items-center container">
        <Link
          href="/"
          className="relative  slg:h-[60px] slg:w-[120px] h-[40px] w-[80px] md:h-[72px] md:w-[140px] "
        >
          {pathname.includes("/about") ? (
            <Image src={logoLight} alt="logo" className="object-contain" fill />
          ) : (
            <Image src={logoDark} alt="logo" className="object-contain" fill />
          )}
        </Link>

        <nav
          className={`md:flex md:flex-row hidden  justify-center items-center lg:gap-[60px] slg:gap-[40px] md:gap-[32px]  font-light capitalize font-satoshi ${
            pathname.includes("/about") ? "text-cerreneYellow " : ""
          }`}
        >
          <Link
            href="/about"
            className={`relative z-10 ${
              pathname.includes("/about") ? "font-bold" : ""
            }`}
          >
            {pathname.includes("/about") && (
              <Image
                src={doodle}
                alt="doodle"
                className="absolute inset-0 w-full h-full object-contain scale-[200%] -z-10"
              />
            )}
            about
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div
              className={`relative  z-10 ${
                pathname.includes("/services") ? "font-bold capitalize" : ""
              }`}
            >
              services
              {pathname.includes("/services") && (
                <Image
                  src={doodle}
                  alt="doodle"
                  className="absolute inset-0 w-full h-full object-contain scale-[200%] -z-10"
                />
              )}
            </div>
            {isServicesOpen && (
              <div className="absolute top-full -left-8 z-20 bg-white shadow-lg rounded-lg w-32 ">
                <Link
                  href="/services/plumbing"
                  className="block px-2 py-1 text-sm text-[#4e4e4e] hover:bg-gray-200"
                >
                  Plumbing
                </Link>
                <Link
                  href="/services/electrical"
                  className="block px-2 py-1 text-sm text-[#4e4e4e] hover:bg-gray-200"
                >
                  Electrical Services
                </Link>
                <Link
                  href="/services/cleaning"
                  className="block px-2 py-1 text-sm text-[#4e4e4e] hover:bg-gray-200"
                >
                  Cleaning Services
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className={`relative z-10 ${
              pathname.includes("/blog") ? "font-bold capitalize" : ""
            }`}
          >
            blog
            {pathname.includes("/blog") && (
              <Image
                src={doodle}
                alt="doodle"
                className="absolute inset-0 w-full h-full object-contain scale-[200%] -z-10"
              />
            )}
          </Link>

          <Link
            href="/contact"
            className="text-white bg-cerreneOrange w-[138px] h-[54px] flex items-center justify-center rounded"
          >
            contact us
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
