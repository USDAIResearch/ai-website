import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Yanone_Kaffeesatz } from "next/font/google";
const yanone = Yanone_Kaffeesatz({ subsets: ["latin"], weight: ["600"] });

const Navbar = () => {
  return (
    <div className="flex items-center justify-center sm:justify-between py-0 pb-2">
      <div className="logo">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            width={200}
            height={200}
            alt="AI-Logo"
            priority={true}
            placeholder="empty"
            className="mix-blend-multiply"
          />
        </Link>
      </div>
      <div className="heading hidden sm:block">
        <h1 className={`text-4xl font-semibold ${yanone.className}`}>
          Artificial Intelligence Research Lab
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
