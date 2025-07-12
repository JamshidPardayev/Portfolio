"use client";
import React, { useEffect } from "react";
import { Nerko_One, Overlock } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { PiReadCvLogo } from "react-icons/pi";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const nerkoOne = Nerko_One({
  subsets: ["latin"],
  weight: "400",
});

const overlock = Overlock({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="home">
      <div className="shadow bg-gradient-to-r from-[#19191B] to-[#000018] text-white mt-[-30px] pb-[80px] max-sm:mt-[0px] max-sm:pt-[30px]">
        <div className="relative">
          <img
            src="/image/vector1.png"
            alt="VectorImg"
            className="absolute top-[0px] right-3"
          />
          <img
            src="/image/vector2.png"
            alt="VectorImg"
            className="absolute top-[50px] left-[40%] max-md:left-[20%] max-sm:left-[10%]"
          />
        </div>

        <div className="overflow-hidden">
          <div className="relative max-w-[1200px] px-[15px] mx-auto flex justify-between gap-4 max-md:flex-col-reverse max-md:items-center max-md:justify-center">
            <div className="w-[50%] content-center max-md:w-[80%] max-sm:w-[90%] max-md:text-center max-md:mx-auto">
              <TypingAnimation className="max-w-[400px] text-[25px] text-[#ffffff] max-md:text-[22px] max-sm:text-[20px] my-[10px] max-md:mx-auto">
                Hi 👋, My name is Jamshid Pardayev
              </TypingAnimation>
              <TypingAnimation className="max-w-[400px] text-[25px] text-[#ffffff] max-md:text-[22px] max-sm:text-[20px] my-[10px] max-md:mx-auto">
                I am Professional Web Developer
              </TypingAnimation>
              <p className="text-[#ececec] text-[16px] max-w-[450px] max-md:mx-auto">
                Hello everyone. I am Jamshid Pardayev, was born on January 29,
                2002, and I am 23 years old. I am from in Qashqadarya
                (Shahrisabz), Uzbekistan. I can speak in 4 language so (English,
                Arabic, Russian, Uzbek languages). Now I teaching FrontEnd
                Developer around the 7 month experience. I can use the programms
                so HTML, CSS, Bootstrap, SASS, Tailwind, GitHub, Netlify,
                Vercel, JavaScript, React, React Query, Zustand, Redux and
                others.
              </p>

              <button className="text-[16px] text-[#ececec] px-5 py-2 border bg-gradient-to-r from-[#19049e] via-[#152a7a] mt-[30px] rounded-tr-[60px] rounded-bl-[60px] hover:text-[#84f1ff] hover:border-[#84f1ff] duration-300 cursor-pointer">
                <a href="#" className="flex items-center gap-x-1" download>
                  Download CV <PiReadCvLogo />
                </a>
              </button>
            </div>
            <img
              src="./image/vector2.png"
              alt="vector"
              className="absolute top-[100px] left-[90%] max-sm:top-[350px] max-sm:left-[10%]"
            />

            <div className="relative flex flex-col pt-10">
              <div className=" mx-auto flex items-center justify-center overflow-hidden h-[400px] w-[400px] max-sm:w-[300px] max-sm:h-[300px] rounded-[50%] shadow-2xs shadow-[grey] my-[30px]">
                <img
                  src="./image/myImg.png"
                  alt="heroimg"
                  className="h-[100%] "
                />
              </div>
              <div className="flex justify-center gap-3 mb-[20px] max-sm:flex-col">
                <div className="flex justify-center gap-x-3">
                  <a
                    href="https://t.me/jamshidpardayev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InteractiveHoverButton>
                      <FaTelegram className="text-[25px]" />
                    </InteractiveHoverButton>
                  </a>

                  <a
                    href="https://www.instagram.com/pardayev_jamshid_official/profilecard/?igsh=dDRicmticzNqbG92"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InteractiveHoverButton className="duration-500">
                      <FaInstagram className="text-[25px]" />
                    </InteractiveHoverButton>
                  </a>
                </div>

                <div className="flex justify-center gap-x-3">
                  <a
                    href="https://github.com/JamshidPardayev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InteractiveHoverButton>
                      <FaGithub className="text-[25px]" />
                    </InteractiveHoverButton>
                  </a>
                  <a
                    href="tel:+998948811511"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InteractiveHoverButton>
                      <IoMdCall className="text-[25px]" />
                    </InteractiveHoverButton>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
