import React from "react";
import Hero from "./hero/page";
import Navbar from "./navbar/page";

const Header = () => {
  return (
    <div className="min-h-[100vh] shadow bg-gradient-to-r from-[#19191B] to-[#000018]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
