"use client";
import { ChevronRight } from "lucide-react";
import { Yanone_Kaffeesatz } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const yanone = Yanone_Kaffeesatz({ subsets: ["latin"], weight: ["600"] });

const PublicationSocialComponent = ({ contentFeedData }) => {
  const messageBoxRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(0);

  const displayedPublications = contentFeedData.slice(0, 3);

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
    <div className="flex flex-col lg:flex-row gap-4 sm:mx-[3vw] md:mx-[6vw] xl:mx-[10vw] my-8 mx-4">
      <div
        ref={messageBoxRef}
        className="bg-white border rounded-lg border-gray-200 p-4 lg:p-5 w-full"
      >
        <h1
          className={`text-2xl sm:text-3xl text-red-500 my-2 ${yanone.className}`}
        >
          Latest Publications
        </h1>
        <div className="pt-3 sm:pt-5">
          {displayedPublications.map((pub, index) => (
            <div key={pub.id} className="pb-4">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                  {pub.title}
                </h3>
                <Link
                  href={`/paper/${pub.id}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium shrink-0"
                >
                  View Paper
                </Link>
              </div>
              <p className="text-gray-600 mb-1">
                <b>Author:</b> {pub.authors.map((author) => author.label).join(", ")}
              </p>
              {pub.venue &&
              <p className="text-gray-600 mb-1">
                <b>Venue:</b> {pub.venue}
              </p>}
              <div className="flex flex-wrap gap-2 mb-4">
                {pub.keywords.map((theme, themeIndex) => (
                  <span
                    key={themeIndex}
                    className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full"
                  >
                    {theme.label}
                  </span>
                ))}
              </div>
              {index < displayedPublications.length - 1 && (
                <div className="border-b border-gray-200 mb-4" />
              )}
            </div>
          ))}
          {contentFeedData.length > 3 && (
            <Link
              href="/publication"
              className="flex w-full text-lg justify-center items-center gap-1 text-red-800 rounded-md transition-colors"
            >
              See More Publications
              <ChevronRight />
            </Link>
          )}
        </div>
      </div>
      <div className="w-full lg:w-[48%] bg-white border rounded-lg border-gray-200 p-4 lg:p-5">
        <h2
          className={`text-2xl sm:text-3xl text-red-500 mb-4 ${yanone.className}`}
        >
          LinkedIn Updates
        </h2>
        <div className="bg-gray-50 rounded-lg flex items-center justify-center">
          <iframe
            src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25522682"
            frameBorder="0"
            width="100%"
            height={iframeHeight}
            className="min-h-[250px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PublicationSocialComponent;
