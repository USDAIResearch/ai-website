import React from "react";
import PdfViewerComponent from "../commons/PdfViewer";
import ReviewSection from "./ReviewSection";
import Link from "next/link";
import { notFound } from "next/navigation";
import FeedbackListing from "./FeedbackListing";
import { db } from "@/lib/helpers/db";
import { readFileByteArray } from "@/app/actions/paper/action";

const Body = async ({ paperId }) => {
  const paper = await db.researchPaper.findUnique({
    where: { id: paperId, status: "active" },
    include: {
      feedbacks: {
        orderBy: {
          createdAt: "desc",
        },
        where: {
          status: "active",
        },
      },
    },
  });
  if (!paper) {
    notFound();
  }
  const byteArray = await readFileByteArray(paper.attachment);
  return (
    <div className="mx-5 sm:mx-0">
      <div className="header py-5">
        <h1 className="title text-4xl font-semibold">{paper.title}</h1>
        <div className="my-1">
          <span className="text-gray-500 text-xl">
            Authors: {paper.authors?.map((item) => item?.label)?.join(", ")}
          </span>
          <span className="text-gray-500 text-xl ml-2">
            Last Updated: {paper.updatedAt.toLocaleString()}
          </span>
        </div>
        
        {paper?.venue && <h5 className="text-gray-500 text-xl">Venue: {paper.venue}</h5>}

        <div className="flex flex-wrap gap-1 items-baseline line-clamp-1 text-xl">
          Themes:
          <div className="py-1 font-semibold text-gray-800 truncate">
            {paper.themes?.map((item) => item.label).join(", ")}
          </div>
        </div>

        <div className="flex flex-wrap line-clamp-1">
          {paper.keywords?.map((item) => {
            return (
              <div
                className="bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-800 truncate mr-2 mb-2"
                key={item.id}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-5 lg:flex-row">
        <div className={`w-full ${byteArray ? "lg:w-1/2" : ""}`}>
          <div className="mb-5">
            <h1 className="text-2xl font-semibold">Abstract</h1>
            <p className="text-lg text-justify">{paper.abstract}</p>
          </div>
          <div className={`${paper.feedbacks.length ? "my-5" : ""}`}>
            <ReviewSection paperId={paperId} />
          </div>
        </div>
        <div className={`w-full ${byteArray ? "lg:w-1/2" : "hidden"}`}>
          <PdfViewerComponent url={byteArray} />
        </div>
      </div>

      <div className={`${paper.feedbacks.length ? "my-5" : ""}`}>
        <FeedbackListing feedback={paper.feedbacks} />
      </div>
    </div>
  );
};

export default Body;
