"use client";

import { Yanone_Kaffeesatz } from "next/font/google";
import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Users,
  ExternalLink,
  Newspaper,
} from "lucide-react";

const yanone = Yanone_Kaffeesatz({ subsets: ["latin"], weight: ["600"] });

const TrendingComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const newsItems = [
    {
      type: "news",
      title: "News",
      icon: <Newspaper className="w-5 h-5 text-blue-600" />,
      content: (<div className="space-y-1">
        <p>We are the part of the highly ambitious projects:</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>South Dakota Biomedical Computation Collaborative (funding: $7.245M)</li>
          <li>Research Infrastructure: CC* Campus Compute <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2346643" target="__blank" className="text-blue-500">(NSF Award # 2346643)</a> (funding: $0.5M)</li>
        </ul>
      </div>),
      color: "blue",
    },
    {
      type: "hiring",
      title: "Hiring",
      icon: <Briefcase className="w-5 h-5 text-green-600" />,
      content: "Open positions for research interns, research assistants (undergrad/grad), PhDs, and postdocs—let's connect!",
      link:"https://sd-bcc.org/jobs/",
      color: "green",
    },
    {
      type: "events",
      title: "Events",
      icon: <Briefcase className="w-5 h-5 text-purple-600" />,
      content: (
        <div className="space-y-1">
          <p>Join us in the following events:</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>USD AI symposium (June, 2025 Sioux Falls, SD)</li>
            <li>Int. Conference on Recent Trends in Image Processing & Pattern Recognition (December, 2025, Marrakesh, Morocco)</li>
          </ul>
        </div>
      ),
      color: "purple",
    },
    {
      type: "achievements",
      title: "Agreements/MOUs",
      icon: <Users className="w-5 h-5 text-yellow-600" />,
      content: (
        <div className="space-y-1">
          <p>(December 2024) The AI Research Lab signed an agreement with the Thumbay Institute for AI in Healthcare at Gulf Medical University, UAE.</p>
          <p>Looking for a collaboration, don’t hesitate to reach out.</p>
        </div>
      ),
      color: "yellow",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  }, [newsItems.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  useEffect(() => {
    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(nextSlide, 5000);
    }
    return () => intervalId && clearInterval(intervalId);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="bg-white pt-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative">
        <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-50">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {newsItems.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <div
                  className={`group bg-white rounded-lg p-6 border border-gray-100 shadow-sm h-[200px] flex flex-col`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-full bg-${item.color}-100 flex items-center justify-center`}
                    >
                      {item.icon}
                    </div>
                    <h2
                      className={`text-2xl text-${item.color}-600 ${yanone.className}`}
                    >
                      {item.title}
                    </h2>
                  </div>
                  
                  <div className="flex-1 text-base leading-relaxed">
                    {item.content}
                  </div>
                  
                  {item.link && (
                    <div className="mt-3 pt-2 border-t border-gray-100">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-gray-600 flex items-center gap-1 hover:text-blue-600 transition"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Visit Link</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-50">
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingComponent;