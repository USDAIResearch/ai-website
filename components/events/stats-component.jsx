"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { Users, Award, Calendar, Building } from "lucide-react";

export default function StatsComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const stats = [
    { value: 500, suffix: "+", label: "Annual Attendees", icon: Users },
    { value: 35, suffix: "+", label: "Expert Speakers", icon: Award },
    { value: 7, suffix: "", label: "Years of Excellence", icon: Calendar },
    { value: 12, suffix: "+", label: "Partner Organizations", icon: Building },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(statsRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.25,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div
      className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-rose-100"
      ref={statsRef}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Known for Excellence
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 shadow-sm rounded-sm">
            <div className="mb-6">
              <div className="text-5xl font-bold text-black mb-1">
                {isVisible ? (
                  <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className="w-12 h-1 bg-red-600 mt-2 mb-4"></div>
              <h3 className="text-lg font-medium text-black">{stat.label}</h3>
              <p className="text-gray-600 mt-2">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
