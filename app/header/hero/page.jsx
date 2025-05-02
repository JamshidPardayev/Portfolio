import { Meteors } from "@/components/magicui/meteors";
import React from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const Hero = () => {
  return (
    <div className="">
      <Meteors className={"mt-[120px]"} />
      <div className="max-w-[1200px] px-[15px] mx-auto flex justify-between max-sm:flex-col max-sm:items-center">
        <div className="w-[50%] content-center">
          <h2 className="text-[#ffffff] text-[54px] max-w-[400px]">
          <TypingAnimation>Hi 👋,
            My name is Jamshid Pardayev
          </TypingAnimation>
          </h2>
          
          <p className="text-[#ececec] text-[16px] max-w-[450px]">
            I'm a Freelance UI/UX Designer and Developer based in Tashkent, Uzbekistan. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.
          </p>
        </div>
        <div className="w-[50%] flex justify-center">
          <img src="./image/heroImg.png" alt="heroimg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
