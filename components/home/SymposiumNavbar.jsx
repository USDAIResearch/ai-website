'use client';

import React from "react";
import { yanone } from "@/lib/fonts"; // or relative path if alias doesn't work

const SymposiumNavbar = () => (
  <div className="flex justify-center py-4 px-6 bg-white">
    <div className="text-center">
      <h1 className={`text-3xl sm:text-5xl font-bold text-red-700 leading-tight ${yanone.className}`}>
        7<sup className="text-xl align-top">th</sup> Artificial Intelligence Symposium*
      </h1>
      <p className="text-lg sm:text-xl text-gray-800 mt-1 font-semibold">
        June 26–27, 2025
      </p>
      <p className="text-sm sm:text-base text-gray-500 italic mt-1">
        * Formerly known as the Data Harnessing Symposium (held in 2018 and 2019)
      </p>
    </div>
  </div>
);


export default SymposiumNavbar;
