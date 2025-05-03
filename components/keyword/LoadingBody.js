import React from "react";

const LoadingBody = () => {
  return (
    <div className="mx-5 sm:mx-0">
      <h1 className="text-4xl bg-gray-200 py-4 animate-pulse"></h1>
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
                >
                </div>
              ))}
            </div>

            <p className="text-gray-700 text-lg animate-pulse py-5 bg-gray-200"></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingBody;
