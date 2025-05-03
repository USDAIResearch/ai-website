"use client";

import { updateFeedbackStatus } from "@/app/actions/admin/action";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../commons/Loader";
import { ToggleSwitch } from "flowbite-react";

const FeedbackLayout = ({ researchPapers = [] }) => {
  const [selectedID, setSelectedID] = useState(researchPapers?.[0]?.id || null);
  const [selectedPaper, setSelectedPaper] = useState(
    researchPapers?.[0] || null
  );
  const [feedbacks, setFeedbacks] = useState(
    researchPapers?.[0]?.feedbacks || []
  );
  const [isLoading, setIsLoading] = useState(false);

  const handlePaperClick = (id) => {
    setSelectedID(id);
    const paper = researchPapers.find((item) => item.id === id);
    setSelectedPaper(paper);
    setFeedbacks(paper?.feedbacks || []);
  };

  const handleReviewStatus = async (id, prevStatus) => {
    setIsLoading(true);
    const newStatus = prevStatus === "active" ? "inactive" : "active";
    const response = await updateFeedbackStatus(id, newStatus);
    setIsLoading(false);
    if (response.status === "inactive") {
      setFeedbacks((prevFeedbacks) =>
        prevFeedbacks.map((item) =>
          item.id === id ? { ...item, status: "inactive" } : item
        )
      );
      toast.success(`Success: Feedback ${id} hidden from the user`);
    } else if (response.status === "active") {
      setFeedbacks((prevFeedbacks) =>
        prevFeedbacks.map((item) =>
          item.id === id ? { ...item, status: "active" } : item
        )
      );
      toast.success(`Success: Feedback ${id} visible to the user`);
    } else {
      toast.error("Error: Something went wrong");
    }
  };

  if (!researchPapers.length) {
    return (
      <div className="flex items-center justify-center h-full text-black">
        <h1 className="text-2xl">
          No research paper uploaded to review.{" "}
          <Link className="text-blue-500 underline" href="/admin/research">
            Upload One
          </Link>
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row text-black">
      <div className="lg:w-1/4 p-4">
        <h1 className="text-2xl mb-5 font-semibold">
          Reviewed Research Papers
        </h1>
        <div className="h-[75vh] overflow-y-auto">
          {researchPapers.map((paper) => (
            <div
              key={paper.id}
              className={`bg-white shadow-md rounded-lg p-4 mb-4 border-2  mr-4 ${
                selectedID === paper.id
                  ? "border-teal-600"
                  : "border-transparent"
              } hover:cursor-pointer hover:border-teal-600`}
              onClick={() => handlePaperClick(paper.id)}
            >
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                {paper.title}
              </h3>
              <p className="text-gray-700 mb-2">
                Total Reviews: {paper.feedbacks?.length || "0"}
              </p>
              <Link
                href={`/paper/${paper.id}`}
                className="text-blue-500 hover:underline"
              >
                Preview Paper
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-3/4 p-4">
        <h1 className="text-2xl mb-5 font-semibold">Feedbacks</h1>
        <h2 className="text-xl font-semibold mb-4">{selectedPaper?.title}</h2>
        <div className="h-[70vh] overflow-y-auto">
          {feedbacks.length ? (
            feedbacks.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md p-8 rounded-lg mb-4 mr-5"
              >
                <div className="mb-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">Email:</span>{" "}
                    {item.email || "n/a"}
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">Comments:</span>{" "}
                    {item.comment || "No Comments"}
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">Rating:</span>{" "}
                    {item.rating ? `${item.rating}/5` : "n/a"}
                  </p>
                </div>
                <div className="mb-4">
                  {isLoading ? (
                    <div className="text-left">
                      <Loader align="start"/>
                    </div>
                  ) : (
                    <ToggleSwitch
                      checked={item.status === "active"}
                      label="Visibility of Feedback"
                      onChange={(e) => handleReviewStatus(item.id, item.status)}
                    />
                  )}
                </div>
              </div>
            ))
          ) : (
            <div>No Feedbacks</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackLayout;
