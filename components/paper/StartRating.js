"use client";
import React from "react";
import HeroIcon from "../commons/HeroIcon";

const StarRating = ({ rating, totalStars, onRatingChange }) => {
  const handleStarClick = (clickedIndex) => {
    onRatingChange(clickedIndex + 1);
  };

  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    stars.push(
      <span key={i} onClick={(e) => handleStarClick(i)}>
        <HeroIcon
          name="StarIcon"
          className={`h-6 w-6 cursor-pointer ${
            i < rating ? "text-red-500" : "text-gray-300"
          }`}
        />
      </span>
    );
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
