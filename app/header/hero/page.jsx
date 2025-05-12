import React from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { PiReadCvLogo } from "react-icons/pi";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative max-w-[1200px] px-[15px] mx-auto flex justify-between gap-4 max-sm:flex-col max-sm:items-center max-sm:justify-center">

        <div className="w-[50%] content-center max-sm:w-[80%] max-sm:text-center max-sm:mx-auto">
          <TypingAnimation className="max-w-[400px] text-[45px] text-[#ffffff] max-md:text-[40px] max-sm:text-[35px] max-sm:leading-[40px] max-sm:my-[20px]">
            Hi 👋, My name is Jamshid Pardayev
          </TypingAnimation>
          <p className="text-[#ececec] text-[16px] max-w-[450px]">
            I'm a Freelance UI/UX Designer and Developer based in Tashkent,
            Uzbekistan. I strive to build immersive and beautiful web
            applications through carefully crafted code and user-centric design.
          </p>

          <button className="text-[16px] text-[#ececec] px-5 py-2 border bg-gradient-to-r from-[#19049e] via-[#152a7a] mt-[30px] rounded-tr-[60px] rounded-bl-[60px] hover:text-[#84f1ff] hover:border-[#84f1ff] duration-300 cursor-pointer">
            <a href="#" className="flex items-center gap-x-1" download>
              Download CV <PiReadCvLogo />
            </a>
          </button>
        </div>
        <img src="./image/vector1.png" alt="vectorImg" className="absolute top-[30px] left-[50%] max-sm:top-[10px] max-sm:left-[80%]"/>
        <img src="./image/vector2.png" alt="vectorImg" className="absolute top-[100px] left-[90%] max-sm:top-[350px] max-sm:left-[10%]"/>
        <img src="./image/vector1.png" alt="vectorImg" className="absolute top-[350px] left-[40%] max-sm:top-[400px] max-sm:left-[70%]"/>
        <div className="relative mx-auto flex items-center justify-center overflow-hidden h-[400px] w-[400px] max-sm:w-[300px] max-sm:h-[300px] rounded-[50%] shadow-2xs shadow-[grey] my-[30px]">
          <img src="./image/myImg.png" alt="heroimg" className="h-[100%] " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
