import { Meteors } from "@/components/magicui/meteors";
import React from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { PiReadCvLogo } from "react-icons/pi";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative max-w-[1200px] px-[15px] mx-auto flex justify-between max-sm:flex-col max-sm:items-center max-sm:justify-center">
        <Meteors className="mt-[120px]" />

        <div className="w-[50%] content-center max-sm:w-[80%] max-sm:text-center max-sm:mx-auto">
          <TypingAnimation className="max-w-[400px] text-[45px] text-[#ffffff] max-md:text-[40px] max-sm:text-[35px] max-sm:leading-[40px] max-sm:my-[20px]">
            Hi 👋, My name is Jamshid Pardayev
          </TypingAnimation>
          <p className="text-[#ececec] text-[16px] max-w-[450px]">
            I'm a Freelance UI/UX Designer and Developer based in Tashkent,
            Uzbekistan. I strive to build immersive and beautiful web
            applications through carefully crafted code and user-centric design.
          </p>

          <button className="text-[16px] text-[#ececec] px-5 py-2 border bg-gradient-to-r from-[#19049e] via-[#152a7a] mt-[30px] rounded-tr-[60px] rounded-bl-[60px] hover:text-[#84f1ff] hover:border-[#84f1ff] duration-300 cursor-pointer max-md:hidden">
            <a href="#" className="flex items-center gap-x-1" download>
              Download CV <PiReadCvLogo />
            </a>
          </button>
        </div>

        <div className="w-[50%] flex justify-center max-sm:w-full">
          <img src="./image/heroImg.png" alt="heroimg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
