"use client";
import { Yanone_Kaffeesatz } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const yanone = Yanone_Kaffeesatz({ subsets: ["latin"], weight: ["600"] });

const MessageThemeComponent = () => {
  const messageBoxRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (messageBoxRef.current) {
        const contentHeight = messageBoxRef.current.clientHeight;
        setIframeHeight(contentHeight - 80);
      }
    };
    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-4 my-8">
      <div
        className="flex-1 bg-white border rounded-lg border-gray-200 p-4 lg:p-5 w-full"
        ref={messageBoxRef}
      >
        <h1
          className={`text-2xl sm:text-3xl text-red-500 my-2 ${yanone.className}`}
        >
          Message from the Founding Director
        </h1>
        <div className="flex flex-col sm:flex-row pt-3 sm:pt-5 gap-5">
          <Image
            src="/images/team/kc-profile.jpg"
            width={250}
            height={170}
            alt="Director Image"
            priority={true}
            placeholder="empty"
            className="w-full sm:w-48 lg:w-[250px] h-auto object-cover"
            style={{ transform: "scaleX(-1)" }}
          />
          <div className="text-black text-base sm:text-lg lg:text-xl">
            <p className="pb-3">
              Welcome to the USD AI Research Lab! Aligned with USD&apos;s AI
              programs, this is a place where everyone—regardless of
              background—can thrive. Our passion lies in striving for
              excellence, driving AI innovation, and supporting one another in
              the pursuit of success. Together, we are shaping the future of
              intelligent systems. Go Yotes!
            </p>
            <p className="pb-3">
              Let&apos;s drive AI innovation together! #AI #DataScience
              #Research #Opportunities
            </p>
            <a
              href="https://www.youtube.com/watch?v=J9dZV2EAuUU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              TEDxUSD – Building sustainable AI Solutions!
            </a>
            <p className="pt-3">Prof. KC (Casey) Santosh</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[30.5%] bg-white border rounded-lg border-gray-200 p-4 lg:p-5">
        <h2
          className={`text-2xl sm:text-3xl text-red-500 mb-4 ${yanone.className}`}
        >
          Follow us on LinkedIn
        </h2>
        <div className="bg-gray-50 rounded-lg flex items-center justify-center">
        <iframe src='https://widgets.sociablekit.com/linkedin-page-posts/iframe/25552901'width="100%"
            height={iframeHeight || 250}
            frameBorder="0"
            className="min-h-[250px]"></iframe>
          {/* <iframe
            src="https://widgets.commoninja.com/iframe/c2b1ad4c-b758-4701-95b9-068fb4a92e1d"
            width="100%"
            height={iframeHeight || 250}
            frameBorder="0"
            className="min-h-[250px]"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default MessageThemeComponent;
