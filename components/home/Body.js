"use client";
import React, { useState } from "react";
import ContentFeed from "./ContentFeed";
import SearchBar from "./SearchBar";
import { filterResearchPaper } from "@/app/actions/home/action";
import HeroIcon from "../commons/HeroIcon";
import Link from "next/link";
import { Yanone_Kaffeesatz } from "next/font/google";
import { ChevronRight, Menu, X } from "lucide-react";
import TrendingComponent from "./Trending";
import AISymposium from "./AISymposium";

const yanone = Yanone_Kaffeesatz({ subsets: ["latin"], weight: ["600"] });

const Body = ({
  contentFeedData = [],
  researchKeywords = [],
  researchThemes = [],
  isHomepage = true,
}) => {
  const [contentFeed, setContentFeed] = useState(contentFeedData);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    pageNumber: 1,
    searchTerm: "",
  });

  const handleLoadMore = async () => {
    setIsLoading(true);
    const nextPageNumber = filters.pageNumber + 1;
    setFilters({ ...filters, pageNumber: nextPageNumber });
    const resp = await filterResearchPaper({
      ...filters,
      pageNumber: nextPageNumber,
    });
    setIsLoading(false);
    setContentFeed((prev) => [...prev, ...resp]);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Mobile Menu Button */}
        {!isHomepage && (
          <div className="sm:hidden">
            <button
              onClick={toggleSidebar}
              className="bg-red-500 text-white p-2 rounded-md"
            >
              {isSidebarOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        )}
        {/* Sidebar */}
        {!isHomepage && (
          <div
            className={`sidebar w-full sm:w-1/4 bg-white border rounded-lg border-gray-200 p-5 h-[350px] ${
              isSidebarOpen
                ? "block fixed top-0 left-0 h-full w-screen bg-white z-50 overflow-y-auto"
                : "hidden sm:block"
            }`}
          >
            {/* Close Button for Mobile */}
            <div className="sm:hidden absolute top-2 right-2">
              <button onClick={toggleSidebar} className="text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="relative">
            <div className="flex items-center justify-between">
                <h1 className={`text-2xl text-red-500 ${yanone.className}`}>
                  Keywords
                </h1>
                <HeroIcon name="PaperClipIcon" className="text-red-400" />
              </div>
              <ul className="h-[280px] overflow-y-auto scrollbar-hidden mt-2 pr-2 scrollbar-custom">
                {researchKeywords?.map((item) => (
                  <Link key={item.id} href={`/keyword/${item.id}`}>
                    <li className="text-lg mb-1 cursor-pointer hover:text-blue-500 text-black capitalize">
                      {item.label}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        )}
        {/* Main Content */}
        <div className="feed flex-1 sm:mx-0">
          {isHomepage ? (
            <div className="bg-white border rounded-lg border-gray-200 p-4 sm:p-8 h-full shadow-md overflow-hidden">
              <div className="border-l-4 border-red-500 pl-4">
                <h1
                  className={`text-xl sm:text-3xl md:text-4xl text-red-500 ${yanone.className} leading-tight`}
                >
                  Welcome to the USD AI Research Lab!
                </h1>
              </div>
              <div className="my-4">
                <p className="text-base sm:text-xl pb-2">
                  We are excited to have you explore our work, where we push the
                  boundaries of foundational AI and machine learning while
                  embracing sustainable AI solutions.
                </p>
                <p className="text-base sm:text-xl pb-2">
                  Our research spans green computing, active learning, and
                  scalable as well as robust AI solutions, ensuring efficiency
                  while saying no to carbon footprint.
                </p>
                <p className="text-base sm:text-xl pb-2">
                  We specialize in areas such as pattern recognition, computer
                  vision, image processing, data mining, and big data analytics.
                  Our interdisciplinary work impacts domains including
                  healthcare informatics, medical imaging, document analysis,
                  biometrics, forensics, speech processing, and the Internet of
                  Things.
                </p>
                <p className="text-base sm:text-xl pb-2">
                  Join us as we drive AI innovation with sustainability at its
                  core! <br />
                </p>
              </div>
                <AISymposium />
              <TrendingComponent />
            </div>
          ) : (
            <>
              <SearchBar
                setContentFeed={setContentFeed}
                filters={filters}
                setFilters={setFilters}
              />
              <ContentFeed contentFeedData={contentFeed} />
              <button
                onClick={handleLoadMore}
                className="text-center text-black p-2 bg-gray-200 w-full"
              >
                {isLoading ? "Loading Data . . ." : "Load More"}
              </button>
            </>
          )}
        </div>{" "}
        {/* Right Sidebar */}
        <div className="partner w-full sm:w-[30.5%]">
          {isHomepage && (
            <div className="relative bg-white border rounded-lg border-gray-200 p-5 pb-0 mb-3">
              <div className="flex items-center justify-between">
                <h1 className={`text-2xl text-red-500 ${yanone.className}`}>
                  Publications & Research
                </h1>
                <HeroIcon name="PaperClipIcon" className="text-red-400" />
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3">
                {/* Publications Subblock */}
                <div className="bg-gray-50 p-3 rounded-md">
                  <h2 className="font-semibold text-red-700">
                    Published Research
                  </h2>
                  <p className="text-lg font-medium mt-1">200+</p>
                  <p className="text-sm text-gray-600 capitalize">
                    Peer-Reviewed Articles
                  </p>
                </div>

                {/* Books Subblock */}
                <div className="bg-gray-50 p-3 rounded-md">
                  <h2 className="font-semibold text-red-700">Books</h2>
                  <p className="text-lg font-medium mt-1">10+</p>
                  <p className="text-sm text-gray-600 capitalize">
                    published works
                  </p>
                </div>

                {/* Conferences Subblock */}
                <div className="bg-gray-50 p-3 rounded-md">
                  <h2 className="font-semibold text-red-700">Conferences</h2>
                  <p className="text-lg font-medium mt-1">10+</p>
                  <p className="text-sm text-gray-600 capitalize">
                    International Events
                  </p>
                </div>

                {/* Funding Subblock */}
                <div className="bg-gray-50 p-3 rounded-md">
                  <h2 className="font-semibold text-red-700">
                    Funding Sources
                  </h2>
                  <p className="text-sm text-gray-600 capitalize">
                    SDBOR, DOD, NSF, Department of Education
                  </p>
                </div>
              </div>

              <div className="py-2">
                <Link
                  href="/publication"
                  className="flex w-full text-lg justify-center items-center gap-1 text-red-800 rounded-md transition-colors"
                >
                  View Publications
                  <ChevronRight />
                </Link>
              </div>
            </div>
          )}

          <div className="relative bg-white border rounded-lg border-gray-200 p-5 pb-0">
            <div className="relative mb-2">
              <div className="absolute right-0 top-0">
                <HeroIcon name="PaperClipIcon" className="text-red-400" />
              </div>
              <h1
                className={`text-2xl text-red-500 ${yanone.className} relative z-10`}
              >
                Team Members
              </h1>
            </div>

            <ul className="pr-1 pb-1">
              <li className="flex items-center p-1.5 mb-1.5 rounded-md transition-colors">
                <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-red-700 mr-2">
                  KC
                </div>
                <div>
                  <p className="font-medium text-md line-clamp-2">
                    Prof. KC Santosh (Founding Director)
                  </p>
                </div>
              </li>
              <li className="flex items-center p-1.5 mb-1.5 rounded-md transition-colors">
                <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-red-700 mr-2">
                  RR
                </div>
                <div>
                  <p className="font-medium text-md line-clamp-2">
                    Dr. Rodrigue Rizk (Vice-Director, Engineering)
                  </p>
                </div>
              </li>{" "}
              <li className="flex items-center p-1.5 mb-1.5 rounded-md transition-colors">
                <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-red-700 mr-2">
                  LW
                </div>
                <div>
                  <p className="font-medium text-md line-clamp-2">
                    Dr. Longwei Wang (Vice-Director, Research)
                  </p>
                </div>
              </li>
              <li className="flex items-center p-1.5 mb-1.5 rounded-md transition-colors">
                <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-red-700 mr-2">
                  DJ
                </div>
                <div>
                  <p className="font-medium text-md line-clamp-2">
                    Dr. Debesh Jha (Member)
                  </p>
                </div>
              </li>
              <li className="flex items-center p-1.5 mb-1.5 rounded-md transition-colors">
                <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-red-700 mr-2">
                  LC
                </div>
                <div>
                  <p className="font-medium text-md line-clamp-2">
                    Dr. Lina Chato (Member)
                  </p>
                </div>
              </li>
            </ul>

            <div className="py-2">
              <Link
                href="/team-members"
                className="flex w-full text-lg justify-center items-center gap-1 text-red-800 rounded-md transition-colors"
              >
                View Team Members
                <ChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
