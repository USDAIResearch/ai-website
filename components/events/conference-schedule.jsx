import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// const scheduleData = {
//   day1: [...],
//   day2: [...],
// };

export default function ConferenceSchedule() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(true);
  const [activeDay, setActiveDay] = useState("day1");

  const dates = {
    day1: "Mon 26/06",
    day2: "Tue 27/06",
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <button
        onClick={() => setIsScheduleOpen(!isScheduleOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h2 className="text-2xl font-semibold text-gray-800">Conference Schedule</h2>
        {!isScheduleOpen ? (
          <ChevronDown className="h-6 w-6 text-gray-600" />
        ) : (
          <ChevronUp className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {isScheduleOpen && (
        <div className="mt-4 border-t pt-4">
          <div className="flex border-b mb-4">
            <button
              className={`py-2 px-4 font-medium ${
                activeDay === "day1"
                  ? "border-b-2 border-red-500 text-red-500"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveDay("day1")}
            >
              {dates.day1}
            </button>
            <button
              className={`py-2 px-4 font-medium ${
                activeDay === "day2"
                  ? "border-b-2 border-red-500 text-red-500"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveDay("day2")}
            >
              {dates.day2}
            </button>
            <button
              className={`py-2 px-4 font-medium ${
                activeDay === "day3"
                  ? "border-b-2 border-red-500 text-red-500"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveDay("day3")}
            >
              {dates.day3}
            </button>
          </div>

          <div className="text-center text-gray-700 text-lg py-10">
            📅 Full schedule coming soon. Stay tuned!
          </div>
        </div>
      )}
    </div>
  );
}
