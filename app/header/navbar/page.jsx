"use client";
import { Arbutus, Nerko_One } from "next/font/google";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { HiX } from "react-icons/hi";
import { SparklesText } from "@/components/magicui/sparkles-text";

const arbutus = Arbutus({ subsets: ["latin"], weight: "400" });
const nerkoOne = Nerko_One({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === "A" && e.target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href");
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          window.scrollTo({
            top: targetEl.offsetTop - 90,
            behavior: "smooth",
          });
          setMenuOpen(false); // Menyuni yopish
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#service" },
    { name: "Projects", href: "#project" },
  ];

  const mobileMenuItems = [...menuItems, { name: "Contact Us", href: "#contact" }];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[999] bg-gradient-to-r from-[#121212] to-[#060829]">
        <div className="max-w-[1200px] mx-auto px-[15px] min-h-[100px] flex justify-between items-center text-white">
          <div className={arbutus.className}>
            <SparklesText className="text-[40px] text-[#f8d3c8] font-medium max-sm:text-[40px]">
              Jamshid
            </SparklesText>
          </div>

          <div className={`${nerkoOne.className} max-md:hidden`}>
            <ul className="flex gap-6 items-center text-[#f8d3c8] text-[20px]">
              {menuItems.map((item, i) => (
                <li key={i} className="relative group">
                  <a
                    href={item.href}
                    className="hover:text-[#7764e0] transition cursor-pointer"
                  >
                    {item.name}
                  </a>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7764e0] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          <a href="#contact">
            <button className="text-[20px] px-5 py-1 border bg-gradient-to-r from-[#19049e] via-[#152a7a] rounded-tr-[60px] rounded-bl-[60px] hover:text-[#84f1ff] hover:border-[#84f1ff] duration-300 cursor-pointer max-md:hidden">
              Contact Us
            </button>
          </a>

          <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoMdClose className="text-[30px] cursor-pointer" />
            ) : (
              <IoMdMenu className="text-[30px] cursor-pointer hover:text-[#7764e0] duration-300" />
            )}
          </div>
        </div>
      </nav>

      <div className="mt-[100px]" />

      {menuOpen && (
        <div className="md:hidden fixed h-[100vh] top-0 left-0 w-full bg-[#121212] text-white z-1000 transition-all duration-300">
          <div
            className="absolute top-5 right-5 cursor-pointer hover:rotate-90 transition-transform duration-300"
            onClick={() => setMenuOpen(false)}
          >
            <HiX className="text-[32px] text-[#f8d3c8] hover:text-[#7764e0] duration-300" />
          </div>

          <ul
            className={`flex flex-col items-center gap-6 py-20 ${nerkoOne.className} text-[22px]`}
          >
            {mobileMenuItems.map((item, i) => (
              <li key={i} className="relative group">
                <a
                  href={item.href}
                  className="hover:text-[#7764e0] transition cursor-pointer"
                >
                  {item.name}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7764e0] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
