"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }) => {
  return (
    <SessionProvider>
      {children}
      <ProgressBar
        height="4px"
        color="#F14E23"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </SessionProvider>
  );
};

export default Providers;
