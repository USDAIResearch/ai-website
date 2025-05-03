"use client";
import React, { useState, useTransition } from "react";
import StarRating from "./StartRating";
import { createFeedback } from "@/app/actions/home/action";
import Loader from "../commons/Loader";

const ReviewSection = ({ paperId = ""}) => {
  const [isPending, startTransition] = useTransition();
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const totalStars = 5;

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const resetFields = () => {
    setEmail("");
    setComment("");
    setRating(0);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    startTransition(() => {
      createFeedback({
        email,
        comment,
        rating: rating.toString(),
        researchPaperId: paperId,
      });
    });
    resetFields();
  };

  return (
    <div
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      id="feedback-section"
    >
      <h2 className="text-2xl font-semibold mb-4">Submit a Feedback</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            value={email}
            className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="review"
          >
            Review
          </label>
          <textarea
            value={comment}
            className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="review"
            placeholder="Write your review here"
            rows="5"
            required
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="rating"
          >
            Rating
          </label>
          <StarRating
            rating={rating}
            totalStars={totalStars}
            onRatingChange={handleRatingChange}
          />
        </div>

        <button
          className="text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {isPending ? <Loader /> : "Submit Review"}
        </button>
      </form>
    </div>
  );
};

export default ReviewSection;
