import { Meteors } from "@/components/magicui/meteors";
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1200px] px-[15px] mx-auto flex justify-between ">
        <Meteors className={"mt-[100px]"}/>
      <div className="w-[50%] content-center">
        <h2 className="text-[#ffffff] text-[54px] max-w-[400px]">Build Your Awesome Platform</h2>
        <p className="text-[#ececec] text-[16px]">
          Enver studio is a digital studio that offers several services such as
          UI/UX Design to developers, we will provide the best service for those
          of you who use our services.
        </p>
      </div>
      <div className="w-[50%]">
        <img src="./image/heroImg.png" alt="heroimg" />
      </div>
    </div>
  );
};

export default Hero;
