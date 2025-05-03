import Image from "next/image";
import React from "react";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-8 mt-auto">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright Section */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logo.svg"
              width={150}
              height={150}
              alt="AI-Logo"
              priority={false}
              placeholder="empty"
              className="mix-blend-multiply"
            />
            <p className="text-gray-600 mt-2">
              © {new Date().getFullYear()} Artificial Intelligence Research Lab{" "}
              <br /> All rights reserved.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-600" />
              <address className="text-gray-600 not-italic">
                414 E Clark St, Vermillion, SD
              </address>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-600" />
              <a
                href="mailto:contact@ai-research-lab.org"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                contact@ai-research-lab.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
