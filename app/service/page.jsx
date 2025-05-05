"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaBootstrap, FaHtml5, FaReact, FaSquareGithub } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { Nerko_One } from "next/font/google";
import { FaSass, FaNode } from "react-icons/fa";
import { SiAntdesign, SiJavascript, SiNextdotjs, SiShadcnui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNetlify, SiReactquery, SiTypescript, SiRedux } from "react-icons/si";
import { IoLogoVercel, IoLogoVue } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";

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
          <h1
            className="text-[56px] font-bold mb-10 text-center text-[#f8d3c8]"
            data-aos="fade-down"
          >
            My Skills
          </h1>

          <div className="flex justify-center gap-[30px] flex-wrap overflow-hidden w-full">
            <div data-aos="zoom-in" className="flex flex-col items-center text-red-600">
              <FaHtml5 className="w-[100px] h-[100px]" />
              <p className="text-[22px]">Html</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-lime-600">
              <IoLogoCss3 className="w-[100px] h-[100px]" />
              <p className="text-[22px]">Css</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-pink-500">
              <FaSass className="w-[100px] h-[100px]" />
              <p className="text-[22px]">Sass</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-blue-700">
              <RiTailwindCssFill className="w-[100px] h-[100px]" />
              <p className="text-[22px]">Tailwind</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-violet-700">
              <FaBootstrap className="w-[100px] h-[100px]" />
              <p className="text-[22px]">Bootstrap</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-red-400">
              <FaSquareGithub className="w-[100px] h-[100px]" />
              <p className="text-[22px]">GitHub</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-blue-900">
              <SiNetlify className="w-[100px] h-[100px]" />
              <p className="text-[22px]">Netlify</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-gray-600">
              <IoLogoVercel className="w-[100px] h-[100px]" />
              <p className="text-[22px]">Vercel</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-yellow-600">
              <SiJavascript className="text-[100px] w-[100px] rounded-[10px]" />
              <p className="text-[22px]">JavaScript</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-blue-600">
              <FaReact className="text-[100px] w-[100px]" />
              <p className="text-[22px]">React</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-green-700">
              <IoLogoVue className="w-[100px] h-[100px]" />
              <p className="text-[22px]">Vue JS</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-orange-600">
              <SiNextdotjs className="w-[100px] h-[100px]" />
              <p className="text-[22px]">Next JS</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-violet-700">
              <SiReactquery className="w-[100px] h-[100px]" />
              <p className="text-[22px]">Query</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-blue-500">
              <SiTypescript className="w-[100px] h-[100px]" />
              <p className="text-[22px]">TypeScript</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-amber-600">
              <SiRedux className="w-[100px] h-[100px]" />
              <p className="text-[22px]">Redux</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-green-800">
              <FaNode className="w-[100px] h-[100px]" />
              <p className="text-[22px]">Node</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-cyan-800">
              <SiShadcnui className="w-[100px] h-[100px]" />
              <p className="text-[22px]">Shad CN</p>
            </div>
            <div data-aos="zoom-in" className="flex flex-col items-center text-red-800">
              <SiAntdesign className="w-[100px] h-[100px]" />
              <p className="text-[22px]">ANTD Design</p>
            </div>
          </div>

          <h2 className="text-[56px] mt-[30px] flex justify-center items-center gap-x-2">Learning <MdLanguage className="text-[30px]"/></h2>
        </div>
      </section>
    </div>
  );
};

export default Service;
