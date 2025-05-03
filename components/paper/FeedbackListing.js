const FeedbackListing = ({ feedback = [] }) => {
  const isFeedbackEnabled = process.env.FEEDBACK_STATUS === "enabled";
  if (!feedback.length || !isFeedbackEnabled) return;
  return (
    <div
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      id="feedback-listing"
    >
      <h2 className="text-2xl font-semibold mb-4">Feedbacks</h2>
      <ul>
        {feedback?.map((item, index) => (
          <li key={index} className="bg-gray-100 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold">{item.email}</span>
                <span className="text-gray-500 ml-2">
                  {item.updatedAt.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">{item.rating}/5</span>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-red-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15.2l4.3 2.6-1-5.6 3.5-3.4-5-0.7-2.3-4.7-2.3 4.7-5 0.7 3.5 3.4-1 5.6z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="mt-2">{item.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackListing;
