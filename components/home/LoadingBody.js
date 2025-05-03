import React from "react";
import HeroIcon from "../commons/HeroIcon";
import { Yanone_Kaffeesatz } from "next/font/google";
const yanone = Yanone_Kaffeesatz({ subsets: ["latin"], weight: ["600"] });

const LoadingBody = () => {
  return (
    <div className="flex gap-4">
      <div className="sidebar w-1/4">
        <div className="relative bg-white border border-gray-200 p-5 h-[300px] animate-pulse">
          <HeroIcon
            name="PaperClipIcon"
            className="ml-auto mt-[-30px] animate-pulse"
          />
          <h1 className={`text-3xl text-red-500 ${yanone.className}`}>Keywords</h1>
          <ul className="h-[220px] overflow-y-auto scrollbar-hidden mt-2 pr-2 scrollbar-custom">
            {Array.from({ length: 6 }).map((_, index) => (
              <a key={index}>
                <li className="text-xl mb-2 py-3 cursor-pointer bg-gray-200 text-black animate-pulse"></li>
              </a>
            ))}
          </ul>
        </div>
      </div>
      <div className="feed flex-1">
        <h1 className="bg-gray-200 py-5 animate-pulse"></h1>
        <div className="my-5 hide-scrollbar">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 mb-4 border border-gray-200"
            >
              <h3 className="text-2xl bg-gray-200 py-3 font-semibold mb-2 animate-pulse"></h3>
              <div className="my-1">
                <span className="text-gray-500 px-3 bg-gray-100 animate-pulse"></span>
                <span className="text-gray-500 px-3 bg-gray-100 ml-2 animate-pulse"></span>
              </div>

              <div className="flex flex-wrap line-clamp-1 animate-pulse">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 truncate mr-2 mb-2 animate-pulse"
                    key={index}
                  ></div>
                ))}
              </div>

              <p className="text-gray-700 text-lg animate-pulse py-5 bg-gray-200"></p>
            </div>
          ))}
        </div>
      </div>
      <div className="partner w-1/4 ">
        <div className="relative bg-white border border-gray-200 p-5 h-[300px] mb-8 animate-pulse">
          <HeroIcon
            name="PaperClipIcon"
            className="ml-auto mt-[-30px] animate-pulse"
          />
          <h1 className={`text-3xl text-red-500 ${yanone.className}`}>Team Members</h1>
          <ul className="mt-2 pr-2 h-[220px] overflow-y-auto scrollbar-hidden scrollbar-custom">
            {Array.from({ length: 6 }).map((_, index) => (
              <a key={index}>
                <li className="text-xl mb-2 py-3 cursor-pointer bg-gray-200 text-black animate-pulse"></li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoadingBody;
