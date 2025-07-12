"use client";
import { Nerko_One, Overlock } from "next/font/google";
import React from "react";
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
  return (
    <div id="project" className={nerkoOne.className}>
      <div className="shadow bg-gradient-to-r from-[#19191B] to-[#000018] text-white py-[50px]">
        <div className="relative">
          <h1 className="text-[56px] font-bold mb-10 text-center text-[#f8d3c8]">
            My Projects
          </h1>
          <img
            src="/image/vector1.png"
            alt="VectorImg"
            className="absolute top-[-30px] left-10"
          />
          <img
            src="/image/vector1.png"
            alt="VectorImg"
            className="absolute top-[30px] right-4"
          />
          <img
            src="/image/vector2.png"
            alt="VectorImg"
            className="absolute top-[70px] right-[50%]"
          />
        </div>

        <div className={overlock.className}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            <div className="bg-[#1f1f25] max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg p-4  hover:shadow-[0_0_5px_2px_#f8d3c8]   cursor-pointer duration-500 transition">
              <div className="rounded-md h-[200px] overflow-hidden">
                <img
                  src="/image/movieImg.png"
                  alt="project-img"
                  className="w-full h-full hover:scale-102 duration-300"
                />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-[24px] font-semibold text-[#f8d3c8] line-clamp-1">
                  Movies
                </h3>
                <p className="text-[16px] text-gray-300 my-4 line-clamp-3">
                  Discover the latest movies, trending series, and timeless
                  classics — all in one place. Watch the newest blockbusters and
                  hit shows in HD. Updated daily!
                </p>

                <div className="flex gap-4 mt-3">
                  <a
                    href="https://movies-ten-liart.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#f8d3c8] border border-[#f8d3c8] rounded-[6px] p-2 hover:bg-gray-800 transition duration-300"
                  >
                    <FaLink />
                    <span>Live Preview</span>
                  </a>
                  <a
                    href="https://github.com/JamshidPardayev/Movies"
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

            <div className="bg-[#1f1f25] max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg p-4  hover:shadow-[0_0_5px_2px_#f8d3c8] cursor-pointer duration-500">
              <div className="rounded-md h-[200px] overflow-hidden">
                <img
                  src="/image/webImg.png"
                  alt="project-img"
                  className="w-full h-full hover:scale-102 duration-300"
                />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-[24px] font-semibold text-[#f8d3c8] line-clamp-1">
                  Web Site
                </h3>
                <p className="text-[16px] text-gray-300 my-4 line-clamp-3">
                  This is sample project description random things are here in
                  description. Lorem ipsum generator for dummy content.
                </p>

                <div className="flex gap-4 mt-3">
                  <a
                    href="https://new-rrd.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#f8d3c8] border border-[#f8d3c8] rounded-[6px] p-2 hover:bg-gray-800 transition duration-300"
                  >
                    <FaLink />
                    <span>Live Preview</span>
                  </a>
                  <a
                    href="https://github.com/JamshidPardayev/NewRRD"
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
              className="bg-[#1f1f25] max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg p-4 duration-500 hover:shadow-[0_0_5px_2px_#f8d3c8]"
              data-aos-duration="1500"
            >
              <div className="rounded-md h-[200px] overflow-hidden">
                <img
                  src="/image/greenShop.png"
                  alt="my-project"
                  className="w-full h-full hover:scale-102 duration-300"
                />
              </div>

              <div className="mt-4 space-y-3 text-white">
                <h3 className="text-[24px] font-semibold text-[#f8d3c8] line-clamp-1">
                  GreenShop
                </h3>
                <p className="text-[16px] text-gray-300 line-clamp-3">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>

                <div className="flex gap-6 mt-4">
                  <a
                    href="https://flower-shop-zeta-seven.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#f8d3c8] border border-[#f8d3c8] rounded-[6px] p-2 hover:bg-gray-800 transition duration-300"
                  >
                    <FaLink />
                    Live Preview
                  </a>
                  <a
                    href="https://github.com/JamshidPardayev/Flower-Shop"
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

            <div className="bg-[#1f1f25] max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg p-4  hover:shadow-[0_0_5px_2px_#f8d3c8]   cursor-pointer duration-500">
              <div className="rounded-md h-[200px] overflow-hidden">
                <img
                  src="/image/watchesImg.png"
                  alt="project-img"
                  className="w-full h-full hover:scale-102 duration-300"
                />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-[24px] font-semibold text-[#f8d3c8] line-clamp-1">
                  Watches Site
                </h3>
                <p className="text-[16px] text-gray-300 my-4 line-clamp-3">
                  Find the best, reliable, and cheap smart watches here. We
                  focus on product quality. Here you can find smart watches of
                  almost all brands. So why you are waiting? Just order now!
                </p>

                <div className="flex gap-4 mt-3">
                  <a
                    href="https://watches-seven-tawny.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#f8d3c8] border border-[#f8d3c8] rounded-[6px] p-2 hover:bg-gray-800 transition duration-300"
                  >
                    <FaLink />
                    <span>Live Preview</span>
                  </a>
                  <a
                    href="https://github.com/JamshidPardayev/Watches"
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

            <div className="bg-[#1f1f25] max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg p-4  hover:shadow-[0_0_5px_2px_#f8d3c8]   cursor-pointer duration-500">
              <div className="rounded-md h-[200px] overflow-hidden">
                <img
                  src="/image/project.png"
                  alt="project-img"
                  className="w-full h-full hover:scale-102 duration-300"
                />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-[24px] font-semibold text-[#f8d3c8] line-clamp-1">
                  We are creative Agency
                </h3>
                <p className="text-[16px] text-gray-300 my-4 line-clamp-3">
                  This is sample project description random things are here in
                  description. Lorem ipsum generator for dummy content.
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
              className="bg-[#1f1f25]  max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg p-4 duration-500 hover:shadow-[0_0_5px_2px_#f8d3c8]"
              data-aos-duration="1500"
            >
              <div className="rounded-md h-[200px] overflow-hidden">
                <img
                  src="/image/web-dev.png"
                  alt="my-project"
                  className="w-full h-full hover:scale-102 duration-300"
                />
              </div>

              <div className="mt-4 space-y-3 text-white">
                <h3 className="text-[24px] font-semibold text-[#f8d3c8] line-clamp-1">
                  We developed sites
                </h3>
                <p className="text-[16px] text-gray-300 line-clamp-3">
                  Slingback fabric heels. Thin wraparound ankle strap. Our
                  sites. Squared heel and toe. Pointed toes. Padded insole with
                  geometrical design.
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
              className="bg-[#1f1f25] max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg p-4 duration-500 hover:shadow-[0_0_5px_2px_#f8d3c8]"
              data-aos-duration="1500"
            >
              <div className="rounded-md h-[200px] overflow-hidden">
                <img
                  src="./image/localli.png"
                  alt="my-project"
                  className="w-full h-full "
                />
              </div>

              <div className="mt-4 space-y-3 text-white line-clamp-1">
                <h3 className="text-[24px] font-semibold text-[#f8d3c8]">
                  Same-day Delivery
                </h3>
                <p className="text-[16px] text-gray-300 line-clamp-3">
                  Localli is a fulfilment & delivery service that allows you to
                  offer a same-day delivery experience for your customers.
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
              className="bg-[#1f1f25] max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg p-4 duration-500 hover:shadow-[0_0_5px_2px_#f8d3c8]"
              data-aos-duration="1500"
            >
              <div className="rounded-md h-[200px] overflow-hidden">
                <img
                  src="/image/coffee-img.png"
                  alt="my-project"
                  className="w-full h-full hover:scale-102 duration-300"
                />
              </div>

              <div className="mt-4 space-y-3 text-white">
                <h3 className="text-[24px] font-semibold text-[#f8d3c8] line-clamp-1">
                  Great coffee made
                </h3>
                <p className="text-[16px] text-gray-300 line-clamp-3">
                  Start your mornings with the best coffees. Try our expertly
                  curated artisan coffees from our best roasters delivered
                  directly to your door.
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
              className="bg-[#1f1f25] max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg p-4 duration-500 hover:shadow-[0_0_5px_2px_#f8d3c8]"
              data-aos-duration="1500"
            >
              <div className="rounded-md h-[200px] overflow-hidden">
                <img
                  src="/image/devconnector.png"
                  alt="my-project"
                  className="w-full h-full hover:scale-102 duration-300"
                />
              </div>

              <div className="mt-4 space-y-3 text-white">
                <h3 className="text-[24px] font-semibold text-[#f8d3c8] line-clamp-1">
                  Developer Connector
                </h3>
                <p className="text-[16px] text-gray-300 line-clamp-3">
                  Developer Connector. Create a developer profile/portfolio,
                  share posts and get help from other developers
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
