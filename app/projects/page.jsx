"use client";
import { Nerko_One, Overlock } from "next/font/google";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCodeBranch, FaLink } from "react-icons/fa6";

const nerkoOne = Nerko_One({
  subsets: ["latin"],
  weight: "400",
});

const overlock = Overlock({
  subsets: ["latin"],
  weight: "400",
});

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="project" className={nerkoOne.className}>
      <div className="shadow bg-gradient-to-r from-[#19191B] to-[#000018] text-white py-[50px]">
        <div className="relative">
          <h1
            className="text-[56px] font-bold mb-10 text-center text-[#f8d3c8]"
            data-aos="fade-down"
          >
            My Projects
          </h1>
          <img
            src="/image/vector1.svg"
            alt="VectorImg"
            className="absolute top-[-30px] left-10"
          />
          <img
            src="/image/vector3.svg"
            alt="VectorImg"
            className="absolute top-[30px] right-4"
          />
          <img
            src="/image/vector2.svg"
            alt="VectorImg"
            className="absolute top-[70px] right-[50%]"
          />
        </div>

        <div className={overlock.className}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            <div
              className="bg-[#1f1f25] max-w-[350px] mx-auto max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg p-4  hover:shadow-[0_0_15px_#f8d3c8]   cursor-pointer hover:scale-102 duration-500"
              data-aos="zoom-in"
            >
              <div className="rounded-md h-[200px] overflow-hidden">
                <img
                  src="/image/project.png"
                  alt="project-img"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-[24px] font-semibold text-[#f8d3c8]">
                  We are creative Agency
                </h3>
                <p className="text-[16px] text-gray-300 my-4">
                  This is sample project description random things are here in
                  description. Lorem ipsum generator for dummy content.
                </p>
                <p className="text-sm text-gray-400 my-4">
                  Tech stack : HTML , JavaScript, SASS, React
                </p>
                <div className="flex gap-4 mt-3">
                  <a
                    href="https://jamshidpardayev.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#f8d3c8] border border-[#f8d3c8] rounded-[6px] p-2 hover:bg-gray-800 transition duration-300"
                  >
                    <FaLink />
                    <span>Live Preview</span>
                  </a>
                  <a
                    href="https://github.com/JamshidPardayev/JamshidPardayev.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#f8d3c8] border border-[#f8d3c8] rounded-[6px] p-2 hover:bg-gray-800 transition duration-300"
                  >
                    <FaCodeBranch />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="bg-[#1f1f25] max-w-[350px] mx-auto max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg p-4 duration-500 hover:shadow-[0_0_15px_#f8d3c8] hover:scale-102"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="rounded-md h-[200px] overflow-hidden">
                <img
                  src="/image/web-dev.png"
                  alt="my-project"
                  className="w-full h-full"
                />
              </div>

              <div className="mt-4 space-y-3 text-white">
                <h3 className="text-[24px] font-semibold text-[#f8d3c8]">
                  We developed sites
                </h3>
                <p className="text-[16px] text-gray-300">
                  Slingback fabric heels. Thin wraparound ankle strap. Our
                  sites. Squared heel and toe. Pointed toes. Padded insole with
                  geometrical design.
                </p>
                <p className="text-sm text-gray-400">
                  Tech stack : HTML , JavaScript, SASS, React
                </p>

                <div className="flex gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://my-web-dev-site.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#f8d3c8] border border-[#f8d3c8] rounded-[6px] p-2 hover:bg-gray-800 transition duration-300"
                    >
                      <FaLink />
                      Live Preview
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/JamshidPardayev/Web.Dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#f8d3c8] border border-[#f8d3c8] rounded-[6px] p-2 hover:bg-gray-800 transition duration-300"
                    >
                      <FaCodeBranch />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-[#1f1f25] max-w-[350px] mx-auto max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg p-4 duration-500 hover:shadow-[0_0_15px_#f8d3c8] hover:scale-102"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="rounded-md h-[200px] overflow-hidden">
                <img
                  src="./image/localli.png"
                  alt="my-project"
                  className="w-full h-full "
                />
              </div>

              <div className="mt-4 space-y-3 text-white">
                <h3 className="text-[24px] font-semibold text-[#f8d3c8]">
                  Same-day Delivery
                </h3>
                <p className="text-[16px] text-gray-300">
                  Localli is a fulfilment & delivery service that allows you to
                  offer a same-day delivery experience for your customers.
                </p>
                <p className="text-sm text-gray-400">
                  Tech stack : HTML , JavaScript, SASS, React
                </p>

                <div className="flex gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://localli-site.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#f8d3c8] border border-[#f8d3c8] rounded-[6px] p-2 hover:bg-gray-800 transition duration-300"
                    >
                      <FaLink />
                      Live Preview
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/JamshidPardayev/Localli"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#f8d3c8] border border-[#f8d3c8] rounded-[6px] p-2 hover:bg-gray-800 transition duration-300"
                    >
                      <FaCodeBranch />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-[#1f1f25] max-w-[350px] mx-auto max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg p-4 duration-500 hover:shadow-[0_0_15px_#f8d3c8] hover:scale-102"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="rounded-md h-[200px] overflow-hidden">
                <img
                  src="/image/design.png"
                  alt="my-project"
                  className="w-full h-full"
                />
              </div>

              <div className="mt-4 space-y-3 text-white">
                <h3 className="text-[24px] font-semibold text-[#f8d3c8]">
                  Smart Web Agency
                </h3>
                <p className="text-[16px] text-gray-300">
                  Smart Web Design Agency. We will provide best web design and
                  business development service clients expectation and
                  satisfaction guarantee.
                </p>
                <p className="text-sm text-gray-400">
                  Tech stack : HTML , JavaScript, SASS, React
                </p>

                <div className="flex gap-6 mt-4">
                  <a
                    href="https://smart-web-site.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#f8d3c8] border border-[#f8d3c8] rounded-[6px] p-2 hover:bg-gray-800 transition duration-300"
                  >
                    <FaLink />
                    Live Preview
                  </a>
                  <a
                    href="https://github.com/JamshidPardayev/Smart-Web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#f8d3c8] border border-[#f8d3c8] rounded-[6px] p-2 hover:bg-gray-800 transition duration-300"
                  >
                    <FaCodeBranch />
                    View Code
                  </a>
                </div>
              </div>
            </div>

            <div
              className="bg-[#1f1f25] max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg p-4 duration-500 hover:shadow-[0_0_15px_#f8d3c8] hover:scale-102"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="rounded-md h-[200px] overflow-hidden">
                <img
                  src="/image/coffee-img.png"
                  alt="my-project"
                  className="w-full h-full"
                />
              </div>

              <div className="mt-4 space-y-3 text-white">
                <h3 className="text-[24px] font-semibold text-[#f8d3c8]">
                  Great coffee made
                </h3>
                <p className="text-[16px] text-gray-300">
                  Start your mornings with the  best coffees. Try our
                  expertly curated artisan coffees from our best roasters
                  delivered directly to your door.
                </p>
                <p className="text-sm text-gray-400">
                  Tech stack : HTML , JavaScript, SASS, React
                </p>

                <div className="flex gap-6 mt-4">
                  <a
                    href="https://coffee-site-uz.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#f8d3c8] border border-[#f8d3c8] rounded-[6px] p-2 hover:bg-gray-800 transition duration-300"
                  >
                    <FaLink />
                    Live Preview
                  </a>
                  <a
                    href="https://github.com/JamshidPardayev/Coffee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#f8d3c8] border border-[#f8d3c8] rounded-[6px] p-2 hover:bg-gray-800 transition duration-300"
                  >
                    <FaCodeBranch />
                    View Code
                  </a>
                </div>
              </div>
            </div>


            <div
              className="bg-[#1f1f25] max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg p-4 duration-500 hover:shadow-[0_0_15px_#f8d3c8] hover:scale-102"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="rounded-md h-[200px] overflow-hidden">
                <img
                  src="/image/devconnector.png"
                  alt="my-project"
                  className="w-full h-full"
                />
              </div>

              <div className="mt-4 space-y-3 text-white">
                <h3 className="text-[24px] font-semibold text-[#f8d3c8]">
                Developer Connector
                </h3>
                <p className="text-[16px] text-gray-300">
                Developer Connector. Create a developer profile/portfolio, share posts and get help from other developers
                </p>
                <p className="text-sm text-gray-400">
                  Tech stack : HTML , JavaScript, SASS, React
                </p>

                <div className="flex gap-6 mt-4">
                  <a
                    href="https://dev-connector-mauve.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#f8d3c8] border border-[#f8d3c8] rounded-[6px] p-2 hover:bg-gray-800 transition duration-300"
                  >
                    <FaLink />
                    Live Preview
                  </a>
                  <a
                    href="https://github.com/JamshidPardayev/DevConnector"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#f8d3c8] border border-[#f8d3c8] rounded-[6px] p-2 hover:bg-gray-800 transition duration-300"
                  >
                    <FaCodeBranch />
                    View Code
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

export default Projects;
