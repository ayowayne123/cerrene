"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoDark from "@/public/images/logoDark.png";
import logoLight from "@/public/images/logoLight.png";
import doodle from "@/public/icons/doodle.svg"; // Import the doodle image
import { usePathname } from "next/navigation";
import { FaTimes } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineMenu, AiOutlineDown } from "react-icons/ai"; // Import the down arrow icon

function Header() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // State to control mobile services accordion

  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false); // Close services accordion when menu closes
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen((prevState) => !prevState); // Toggle the accordion
  };

  return (
    <header className="md:absolute fixed inset-0 bg-white md:bg-transparent slg:h-[94px] h-[60px] md:h-[80px] z-40 ">
      <div className="h-full flex flex-row justify-between items-center container">
        <Link href="/" className="relative h-[60px] w-[120px] md:flex hidden ">
          {pathname.includes("/about") ? (
            <Image src={logoLight} alt="logo" className="object-contain" fill />
          ) : (
            <Image src={logoDark} alt="logo" className="object-contain" fill />
          )}
        </Link>
        <Link href="/" className="relative h-[60px] w-[120px] flex md:hidden ">
          <Image src={logoDark} alt="logo" className="object-contain" fill />
        </Link>

        <nav
          className={`md:flex md:flex-row hidden justify-center items-center lg:gap-[60px] slg:gap-[40px] md:gap-[32px] font-light capitalize font-satoshi ${
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
              className={`relative z-10 ${
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
                  Plumbing Services
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

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden  text-cerreneOrange"
          onClick={handleMenuClick}
        >
          <AiOutlineMenu size={24} />
        </div>

        {/* Slider bar for mobile menu */}
        <div
          className={`fixed overflow-hidden w-full transition-transform duration-500 ease-in-out bg-cerreneYellow h-screen inset-0 lg:hidden z-50 flex ${
            !menuOpen ? "-translate-x-full" : ""
          }`}
        >
          <div className="w-full h-full flex mx-auto items-center justify-center relative">
            <div className="absolute top-[40px] right-12">
              <LiaTimesSolid size={24} onClick={handleMenuClose} />
            </div>
            <nav className="flex flex-col font-semibold divide-y divide-cerreneOrange justify-center gap-5 w-60">
              <Link
                onClick={handleMenuClose}
                href="/"
                className={`cursor-pointer text-center pt-5 relative ${
                  pathname == "/" ? "text-cerreneOrange font-bold" : ""
                }`}
              >
                {pathname == "/" && (
                  <Image
                    src={doodle}
                    alt="doodle"
                    className="absolute top-2 left-0 right-0 w-full h-full object-contain  -z-10"
                  />
                )}
                Home
              </Link>

              <Link
                onClick={handleMenuClose}
                href="/about"
                className={`cursor-pointer text-center pt-5 relative ${
                  pathname.includes("/about")
                    ? "text-cerreneOrange font-bold"
                    : ""
                }`}
              >
                {pathname.includes("/about") && (
                  <Image
                    src={doodle}
                    alt="doodle"
                    className="absolute top-2 left-0 right-0 w-full h-full object-contain  -z-10"
                  />
                )}
                About
              </Link>

              {/* Accordion-style Our Services section */}
              <div className="cursor-pointer text-center pt-5 relative">
                <div
                  className={`flex justify-center items-center relative ${
                    pathname.includes("/services")
                      ? "text-cerreneOrange font-bold"
                      : ""
                  }`}
                  onClick={toggleMobileServices}
                >
                  {pathname.includes("/services") && (
                    <Image
                      src={doodle}
                      alt="doodle"
                      className="absolute top-0 left-0 right-0 w-full h-full object-contain scale-[220%]   -z-10"
                    />
                  )}
                  Services <AiOutlineDown className="ml-2" />
                </div>

                {/* Sub-services accordion content */}
                {mobileServicesOpen && (
                  <div className="flex flex-col   rounded-lg mt-2">
                    <Link
                      href="/services/plumbing"
                      className="block px-4 py-2 text-sm text-cerreneGreen"
                      onClick={handleMenuClose}
                    >
                      Plumbing Services
                    </Link>
                    <Link
                      href="/services/electrical"
                      className="block px-4 py-2 text-sm text-cerreneGreen"
                      onClick={handleMenuClose}
                    >
                      Electrical Services
                    </Link>
                    <Link
                      href="/services/cleaning"
                      className="block px-4 py-2 text-sm text-cerreneGreen"
                      onClick={handleMenuClose}
                    >
                      Cleaning Services
                    </Link>
                  </div>
                )}
              </div>

              <Link
                onClick={handleMenuClose}
                href="/blog"
                className={`cursor-pointer text-center pt-5 ${
                  pathname.includes("/blog")
                    ? "text-cerreneOrange font-bold"
                    : ""
                }`}
              >
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
