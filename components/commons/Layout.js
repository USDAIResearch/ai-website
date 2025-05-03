import React from "react";

const Layout = ({ children }) => {
  return (
    <div
      className="bg-gray-100 min-h-screen"
      style={{
        backgroundImage: "url('/images/pattern.png')",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="mx-auto px-4 sm:px-6 py-6
    max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-7xl xl:max-w-7xl"
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
