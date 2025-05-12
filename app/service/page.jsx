"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaBootstrap, FaHtml5, FaReact, FaSquareGithub } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { Nerko_One } from "next/font/google";
import { FaSass, FaNode } from "react-icons/fa";
import { SiAntdesign, SiJavascript, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNetlify, SiReactquery, SiTypescript, SiRedux } from "react-icons/si";
import { IoLogoVercel, IoLogoVue } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
const nerkoOne = Nerko_One({
  subsets: ["latin"],
  weight: "400",
});

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className={nerkoOne.className}>
      <section
        id="service"
        className=" shadow bg-gradient-to-r from-[#19191B] to-[#000018] text-white py-1 max-sm:pt-[60px] pb-[50px]"
      >
        <div className="max-w-[1200px] mx-auto px-4">
          
          <div className="relative">
          <h1
            className="text-[56px] font-bold mb-10 text-center text-[#f8d3c8]"
            data-aos="fade-down"
          >
            My Skills
          </h1>
          <img src="./image/vector1.png" alt="VectorImg" className="absolute top-[0px] right-0"/>
          <img src="./image/vector1.png" alt="VectorImg" className="absolute top-[-100px] left-10"/>
          </div>

      
          <div className="flex justify-center gap-[30px] flex-wrap overflow-hidden w-full">
            <div data-aos="zoom-in" className="flex flex-col items-center text-red-600 cursor-pointer hover:scale-105">
              <FaHtml5 className="w-[100px] h-[100px] " />
              <p className="text-[22px]">Html</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-lime-600 cursor-pointer hover:scale-105">
              <IoLogoCss3 className="w-[100px] h-[100px] " />
              <p className="text-[22px]">Css</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-pink-500 cursor-pointer hover:scale-105">
              <FaSass className="w-[100px] h-[100px] " />
              <p className="text-[22px]">Sass</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-blue-700 cursor-pointer hover:scale-105">
              <RiTailwindCssFill className="w-[100px] h-[100px] " />
              <p className="text-[22px]">Tailwind</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-violet-700 cursor-pointer hover:scale-105">
              <FaBootstrap className="w-[100px] h-[100px] " />
              <p className="text-[22px]">Bootstrap</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-red-400 cursor-pointer hover:scale-105">
              <FaSquareGithub className="w-[100px] h-[100px] " />
              <p className="text-[22px]">GitHub</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-blue-900 cursor-pointer hover:scale-105">
              <SiNetlify className="w-[100px] h-[100px] " />
              <p className="text-[22px]">Netlify</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-gray-600 cursor-pointer hover:scale-105">
              <IoLogoVercel className="w-[100px] h-[100px] " />
              <p className="text-[22px]">Vercel</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-yellow-600 cursor-pointer hover:scale-105">
              <SiJavascript className="text-[100px] w-[100px] rounded-[10px]" />
              <p className="text-[22px]">JavaScript</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-blue-600 cursor-pointer hover:scale-105">
              <FaReact className="text-[100px] w-[100px]" />
              <p className="text-[22px]">React</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-orange-600 cursor-pointer hover:scale-105">
              <SiNextdotjs className="w-[100px] h-[100px] " />
              <p className="text-[22px]">Next JS</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-violet-700 cursor-pointer hover:scale-105">
              <SiReactquery className="w-[100px] h-[100px] " />
              <p className="text-[22px]">Query</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-blue-500 cursor-pointer hover:scale-105">
              <SiTypescript className="w-[100px] h-[100px] " />
              <p className="text-[22px]">TypeScript</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-amber-600 cursor-pointer hover:scale-105">
              <SiRedux className="w-[100px] h-[100px] " />
              <p className="text-[22px]">Redux</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-orange-700 cursor-pointer hover:scale-105">
              <IoLogoFirebase  className="w-[100px] h-[100px] " />
              <p className="text-[22px]">Firebase</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-red-800 cursor-pointer hover:scale-105">
              <SiAntdesign className="w-[100px] h-[100px] " />
              <p className="text-[22px]">ANT Design</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
