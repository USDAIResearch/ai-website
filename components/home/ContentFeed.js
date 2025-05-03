import Link from "next/link";
import React from "react";
import HeroIcon from "../commons/HeroIcon";

const ContentFeed = ({ contentFeedData = [] }) => {
  return (
    <div className="my-5 hide-scrollbar">
      {contentFeedData.length ? (
        contentFeedData?.map((paper) => (
          <div
            key={paper.id}
            className="bg-white p-4 mb-4 border border-gray-200"
          >
            <h3 className="text-2xl font-semibold mb-2">
              <Link href={`/paper/${paper.id}`}>{paper.title}</Link>
            </h3>
            <div className="my-1">
              <span className="text-gray-500">
                Authors: {paper.authors?.map((item) => item?.label)?.join(", ")}
              </span>
              <span className="text-gray-500 ml-2">
                Last Updated: {paper.updatedAt?.toLocaleString()}
              </span>
            </div>
            {paper.venue && (
              <p className="text-md mb-2 line-clamp-1">Venue: {paper.venue}</p>
            )}

            {/* <div className="flex flex-wrap gap-1 items-baseline line-clamp-1">
              Themes:
              <div className="py-1 text-md font-semibold text-gray-800 truncate">
                {paper.themes?.map((item) => item.label).join(", ")}
              </div>
            </div> */}

            <div className="flex flex-wrap line-clamp-1">
              {paper.keywords?.slice(0, 2).map((item) => (
                <div
                  className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 truncate mr-2 mb-2"
                  key={item.id}
                >
                  {item.label}
                </div>
              ))}
              {paper.keywords && paper.keywords.length > 2 && (
                <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 truncate mr-2 mb-2">
                  +{paper.keywords.length - 2}
                </div>
              )}
            </div>

            <p className="text-gray-700 line-clamp-3 text-lg mb-4">
              {paper.abstract}
            </p>
            <Link
              href={`/paper/${paper.id}`}
              className="text-blue-500 hover:underline"
            >
              Preview Paper
            </Link>
            <Link
              href={`/paper/${paper.id}#feedback-section`}
              className="text-blue-500 hover:underline ml-3"
            >
              Provide a Feedback
            </Link>
            {paper.feedbacks?.length ? (
              <Link
                href={`/paper/${paper.id}#feedback-listing`}
                className="text-blue-500 hover:underline ml-3"
              >
                <HeroIcon
                  name="ChatBubbleLeftIcon"
                  className="inline-flex mr-2 text-gray-400"
                />
                <span>{paper.feedbacks.length}</span>
              </Link>
            ) : null}
          </div>
        ))
      ) : (
        <p className="text-center text-black p-2 bg-gray-200">
          No data available. Try changing the filters or search keyword
        </p>
      )}
    </div>
  );
};

export default ContentFeed;
