import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const scheduleData = {
  day1: [
    { time: "07:00 - 08:00", title: "Registration", location: "Main Lobby, MUC, University of South Dakota" },
    { time: "08:00 - 08:30", title: "Open Ceremony Speech – The president of USD", location: "University of South Dakota" },
    { time: "08:30 - 09:40", title: "Plenary Session 1: AI-Powered Materials Discovery", location: "Main Auditorium" },
    { time: "09:40 - 10:00", title: "Coffee Break", location: "University of South Dakota" },
    { time: "10:00 - 11:10", title: "Plenary Session 2: Data-Driven Approaches in Materials Science", location: "Main Auditorium" },
    { time: "11:10 - 12:10", title: "Plenary Session 3: AI in Educational Outreach and Training", location: "Main Auditorium" },
    { time: "12:10 - 13:30", title: "Lunch Break", location: "Dining Hall" },
    { time: "13:30 - 15:30", title: "Parallel Sessions - Block 1 (Four Simultaneous Sessions)", sessions: [
      { title: "Session A: Data-Centric Materials Science", location: "Room 101" },
      { title: "Session B: AI-Platform and Database", location: "Room 102" },
      { title: "Session C: AI-Oriented Education and Outreach", location: "Room 103" },
      { title: "Session D: Challenges in Materials Discovery using AI Tools", location: "Room 104" }
    ]},
    { time: "15:30 - 16:00", title: "Coffee Break", location: "University of South Dakota" },
    { time: "16:00 - 18:00", title: "Parallel Sessions - Block 2 (Five Simultaneous Sessions)", sessions: [
      { title: "Session E: AI-Powered Materials Discovery for Healthcare", location: "Room 101" },
      { title: "Session F: AI-Powered Semiconductor Materials Innovation", location: "Room 102" },
      { title: "Session G: AI Applications in Particle and Nuclear Physics", location: "Room 103" },
      { title: "Session H: AI Applications in Clean Energy and Robotic Development", location: "Room 104" },
      { title: "Mini School: AI Lectures for Educators and Students", location: "Room 105" }
    ]},
    { time: "18:00 - 21:00", title: "Poster and Exhibition Session and Pizza Dinner", location: "University of South Dakota" }
  ],
  day2: [
    { time: "08:30 - 10:10", title: "Plenary Session 4: AI in Healthcare Materials Discovery", location: "Main Auditorium" },
    { time: "10:10 - 10:30", title: "Coffee Break", location: "University of South Dakota" },
    { time: "10:30 - 12:30", title: "Plenary Session 5: Semiconductor Materials Innovation using AI", location: "Main Auditorium" },
    { time: "12:30 - 13:30", title: "Lunch Break", location: "Dining Hall" },
    { time: "13:30 - 15:30", title: "Parallel Sessions - Block 3 (Five Simultaneous Sessions)", sessions: [
      { title: "Session A: Data-Centric Materials Science (Continued)", location: "Room 101" },
      { title: "Session B: AI-Platform and Database (Continued)", location: "Room 102" },
      { title: "Session G: AI Applications in Particle and Nuclear Physics (Continued)", location: "Room 103" },
      { title: "Session H: AI Applications in Clean Energy and Robotic Development (Continued)", location: "Room 104" },
      { title: "Mini School: AI Lectures for Educations and Students", location: "Room 105" }
    ]},
    { time: "15:30 - 16:00", title: "Coffee Break", location: "University of South Dakota" },
    { time: "16:00 - 18:00", title: "Parallel Sessions - Block 4 (Five Simultaneous Sessions)", sessions: [
      { title: "Session E: AI-Powered Materials Discovery for Healthcare (Continued)", location: "Room 101" },
      { title: "Session F: AI-Powered Semiconductor Materials Innovation (Continued)", location: "Room 102" },
      { title: "Session D: Challenges in Materials Discovery using AI Tools (Continued)", location: "Room 104" },
      { title: "Mini School: AI Lectures for Educators and Students", location: "Room 105" }
    ]},
    { time: "18:00 - 20:00", title: "Banquet", location: "Media Center" }
  ],
  day3: [
    { time: "08:30 - 10:10", title: "Panel Discussion: Critical Challenges and Collaboration Methods", location: "Main Auditorium" },
    { time: "10:10 - 10:30", title: "Coffee Break", location: "University of South Dakota" },
    { time: "10:30 - 12:10", title: "Plenary Session 6: Challenges and Future Directions in AI for Materials Science", location: "Main Auditorium" },
    { time: "12:10 - 12:30", title: "Closing Remarks and Future Directions", location: "Main Auditorium" },
    { time: "12:30 - 13:30", title: "Lunch Break", location: "Dining Hall" }
  ]
};

export default function ConferenceSchedule() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(true);
  const [activeDay, setActiveDay] = useState("day1");

  const schedule = scheduleData[activeDay];
  const dates = {
    day1: "Mon 23/06",
    day2: "Tue 24/06",
    day3: "Wed 25/06"
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

          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="font-medium text-red-600 md:w-1/5">{item.time}</div>
                  <div className="md:w-4/5">
                    <div className="font-semibold text-gray-800">{item.title}</div>
                    <div className="text-gray-600 text-sm mt-1">{item.location}</div>
                    
                    {item.sessions && (
                      <div className="mt-3 pl-4 border-l-2 border-red-200 space-y-2">
                        {item.sessions.map((session, idx) => (
                          <div key={idx} className="bg-white p-3 rounded shadow-sm">
                            <div className="font-medium">{session.title}</div>
                            <div className="text-gray-500 text-sm">{session.location}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}