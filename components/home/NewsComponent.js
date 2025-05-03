'use client';

import { Yanone_Kaffeesatz } from "next/font/google";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Briefcase, Users } from "lucide-react";

const yanone = Yanone_Kaffeesatz({ subsets: ["latin"], weight: ["600"] });

const NewsComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsItems = [
    {
      type: "hiring",
      title: "Hiring",
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      content: "Open positions for research interns, research assistants (undergrad/grad), PhDs, and postdocs—let's connect!",
      color: "blue",
    },
    {
      type: "partnerships",
      title: "Partnerships",
      icon: <Users className="w-5 h-5 text-green-600" />,
      content: "We welcome global AI & Data Science collaborations—reach out for MOUs!",
      color: "green",
    },
    {
      type: "events",
      title: "Events",
      icon: <Briefcase className="w-5 h-5 text-purple-600" />,
      content: "Join us at the upcoming AI Summit 2025!",
      color: "purple",
    },
    {
      type: "achievements",
      title: "Achievements",
      icon: <Users className="w-5 h-5 text-yellow-600" />,
      content: "Our team won the Best Research Paper award at ICML 2024!",
      color: "yellow",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(newsItems.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(newsItems.length / 2)) % Math.ceil(newsItems.length / 2));
  };

  return (
    <div className="flex gap-4 sm:mx-[3vw] md:mx-[6vw] xl:mx-[10vw] my-8">
      {/* News Carousel Section (70%) */}
      <div className="w-[70%] bg-white border rounded-lg border-gray-200 p-5">
        <h1 className={`text-3xl text-red-500 mb-6 ${yanone.className}`}>
          Our Achievements
        </h1>

        <h2>Section to load achievements</h2>
      </div>

      {/* LinkedIn Embed Section (30%) */}
      <div className="w-[30%] bg-white border rounded-lg border-gray-200 p-5">
        <h2 className={`text-3xl text-red-500 mb-4 ${yanone.className}`}>
          LinkedIn Updates
        </h2>
        <div className="bg-gray-50 rounded-lg p-4 h-[400px] flex items-center justify-center">
          {/* LinkedIn embed placeholder - replace with actual LinkedIn embed code */}
          <div className="text-center text-gray-500">
            <p>LinkedIn Feed</p>
            <p className="text-sm mt-2">Replace this with your LinkedIn embed code</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
