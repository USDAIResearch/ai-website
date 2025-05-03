"use client";
import React from "react";
import ContentFeed from "../home/ContentFeed";
import { Yanone_Kaffeesatz } from "next/font/google";
const yanone = Yanone_Kaffeesatz({ subsets: ["latin"], weight: ["600"] });

const Body = ({ selectedField = {}, feedData = [] }) => {
  return (
    <div className="mx-5 sm:mx-0">
      <h1 className={`text-4xl py-4 ${yanone.className}`}><span className="text-red-500">Keyword:</span> {selectedField.label}</h1>
      <ContentFeed contentFeedData={feedData} />
    </div>
  );
};

export default Body;
