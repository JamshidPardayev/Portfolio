"use client";

import React, { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Nerko_One, Overlock } from "next/font/google";

const nerkoOne = Nerko_One({
  subsets: ["latin"],
  weight: "400",
});

const overlock = Overlock({
  subsets: ["latin"],
  weight: "400",
});

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="contact">
      <div className="shadow bg-gradient-to-r from-[#19191B] to-[#000018] text-white py-[50px]">
        <div className="max-w-[1200px] mx-auto px-[15px]">
          <div className="relative">
            <h1
              className={`text-[56px] font-bold mb-10 text-center text-[#f8d3c8] ${nerkoOne.className}`}
              data-aos="fade-down"
            >
              Contact Me
            </h1>
            <img
              src="/image/vector1.png"
              alt="VectorImg"
              className="absolute top-[0px] right-3"
            />
            <img
              src="/image/vector2.png"
              alt="VectorImg"
              className="absolute top-[50px] left-10"
            />
             <img
              src="/image/vector2.png"
              alt="VectorImg"
              className="absolute top-[500px] right-10"
            />
          </div>

            <div className="mt-8 max-w-2xl mx-auto px-4">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className={`w-full p-3 rounded-md bg-[#1f1f25] text-white border border-gray-600 focus:outline-none focus:border-[#84f1ff] ${overlock.className}`}
                />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className={`w-full p-3 rounded-md bg-[#1f1f25] text-white border border-gray-600 focus:outline-none focus:border-[#84f1ff] ${overlock.className}`}
                />
                <input
                  type="number"
                  placeholder="Enter Your Number"
                  className={`w-full p-3 rounded-md bg-[#1f1f25] text-white border border-gray-600 focus:outline-none focus:border-[#84f1ff] ${overlock.className}`}
                />
                <textarea
                  rows={5}
                  placeholder="Message"
                  className={`w-full p-3 rounded-md bg-[#1f1f25] text-white border border-gray-600 focus:outline-none focus:border-[#84f1ff] ${overlock.className}`}
                ></textarea>

                <button
                  type="submit"
                  className="flex items-center gap-x-2 text-[16px] text-[#ececec] px-8 py-2 border bg-gradient-to-r from-[#19049e] via-[#152a7a] mt-[30px] rounded-tr-[60px] rounded-bl-[60px] hover:text-[#84f1ff] hover:border-[#84f1ff] duration-300 cursor-pointer"
                >
                  Submit <FaLongArrowAltRight />
                </button>
              </form>
            </div>

            
        </div>
      </div>
    </div>
  );
};

export default Contact;
