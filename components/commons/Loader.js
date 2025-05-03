"use client";

import { Spinner } from "flowbite-react";
const Loader = ({ size = "sm", color = "info", hideText = false, align= 'center' }) => {
  return (
    <div className={`flex items-baseline space-x-2 justify-${align}`}>
      <Spinner aria-label="Default status example" color={color} size={size} />
      {!hideText && (
        <span className="text-xs font-medium text-black">Loading...</span>
      )}
    </div>
  );
};

export default Loader;
