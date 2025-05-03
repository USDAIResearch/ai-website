import React from "react";

const LoadingBody = () => {
  return (
    <div className="mx-5 sm:mx-0">
      <div className="header py-5">
        <h1 className="title text-4xl font-semibold py-4 bg-gray-200 animate-pulse"></h1>
        <div className="my-1">
          <span className="text-gray-500 text-xl px-[100px] bg-gray-200 animate-pulse"></span>
          <span className="text-gray-500 text-xl ml-2 px-[100px] bg-gray-200 animate-pulse"></span>
        </div>

        <div className="flex flex-wrap line-clamp-1">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              className="bg-gray-200 px-5 rounded py-2 animate-pulse text-md font-semibold text-gray-800 truncate mr-2 mb-2"
              key={index}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex justify-center bg-white h-[100vw]">
        <div className="bg-gray-200 px-5 py-2 m-2 w-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingBody;
