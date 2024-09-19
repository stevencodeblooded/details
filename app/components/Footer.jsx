import { useState, useEffect } from "react";
import Gamfi from '../assets/images/icons/logo.png'
import Image from "next/image";
import steps1 from '../assets/images/icons/steps.png'
import steps2 from '../assets/images/icons/steps2.png'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };
  return (
    <div className=" max-w-7xl mx-auto p-4 text-white flex flex-col gap-16">
      <div className="flex items-center justify-center py-16  bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="w-full max-w-2xl p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl lg:leading-snug font-bold w-3/4 mx-auto text-white mb-8">
              APPLY FOR PROJECT INCUBATION
            </h1>
            <p className="text-gray-400 font-semibold text-lg mb-8">
              If you want to launch an IGO/IDO, It will be your perfect choice
            </p>
            <button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold py-3 px-8 transition duration-300">
              APPLY FOR IGO
            </button>
          </div>
        </div>
      </div>
      <div className=" text-gray-300 py-12 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-full"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-12">
                <Image src={steps2} alt="step" />
                <h2 className="font-semibold text-2xl text-center relative z-10">
                    FIND US ON SOCIAL
                </h2>
                <Image src={steps1} alt="step"/>
              {/* <span className="absolute inset-x-0 top-1/2 h-px bg-gray-700 -z-1"></span> */}
            </div>
            <div className="flex justify-center space-x-6">
              {[...Array(7)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-5 rounded w-14 h-14"
                ></div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-44 text-center mb-12">
            <a href="" className="text-5xl font-bold mb-6">
                <Image src={Gamfi} alt="Gamfi" />
            </a>
          </div>

          <nav className="mb-8">
            <ul className="flex flex-wrap gap-3 justify-center text-sm space-x-6 md:text-base">
              {[
                "Features",
                "How it works",
                "Token info",
                "About us",
                "Social media",
                "Terms of Service",
                "Privacy Policy",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white text-lg font-semibold">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-center text-sm mb-12">
            <p className="text-lg font-semibold">Copyright © 2022. All Rights Reserved by GaFi</p>
          </div>
        </div>
        {isVisible && (
          <div className="fixed left-1/2 bottom-3 transform -translate-x-1/2 z-50">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
