import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ConferenceSchedule() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(true);
  const [activeDay, setActiveDay] = useState("day1");

  const dates = {
    day1: "Thu 26/06",
    day2: "Fri 27/06",
  };

  const scheduleData = {
    day1: [
      { time: "8:30 AM - 9:00 AM", title: "Registration & Breakfast Networking", details: "Check-in, coffee, and light breakfast" },
      { time: "9:00 AM – 9:30 AM", title: "Opening Remarks", details: "Speakers: President (USD), VP (Academic Affairs), VP (Research), Dean (Arts & Sciences), Chair (CS)" },
      { time: "9:30 AM - 10:30 AM", title: "Keynote Address", details: "NIST GenAI: Text-to-Text Evaluation - Dr. George Awad, NIST" },
      { time: "10:30 AM - 10:45 AM", title: "Break / Networking" },
      { time: "10:45 AM - 11:30 AM", title: "Blitz Talk I", details: "Dr. Pete Doucette, Director, EROS Center" },
      { time: "11:30 AM - 12:15 PM", title: "Workshop", details: "Speakers from Collins Aerospace: Joseph J Schueder, Joseph Engler, Chris Reuter" },
      { time: "12:15 PM - 2:00 PM", title: "Lunch", details: "Buffet + Networking Lounge" },
      { time: "2:00 PM – 2:45 PM", title: "Workshop", details: "AI in the Workplace - Gopi Challagolla, Microsoft" },
      { time: "2:45 PM - 4:00 PM", title: "Panel", details: "AI and Workforce Development in South Dakota" },
      { time: "4:00 PM - 5:00 PM", title: "Evening Reception", details: "Light hors d’oeuvres, social hour, sponsor booths" },
    ],
    day2: [
      { time: "8:30 AM - 9:00 AM", title: "Registration & Breakfast Networking", details: "Check-in, coffee, and light breakfast" },
      { time: "9:00 AM – 9:30 AM", title: "Opening Remarks", details: "Senator Round’s Office, USD and SDBCC leadership" },
      { time: "9:30 AM - 10:30 AM", title: "Keynote Address", details: "Host Immune Response Modeling - Dr. Douglas Lauffenburger, MIT" },
      { time: "10:30 AM - 10:45 AM", title: "Break / Networking" },
      { time: "10:45 AM - 11:15 AM", title: "Blitz Talk I", details: "AI methods to uncover cell identity genes - Dr. Kaifu Chen" },
      { time: "11:15 AM - 11:45 AM", title: "Blitz Talk II", details: "AI-Boosted Molecular Simulations - Dr. Yinglong Miao" },
      { time: "11:45 AM - 12:15 PM", title: "Blitz Talk III", details: "TRECVID: Video Understanding Evaluation - Dr. George Awad" },
      { time: "12:15 PM - 2:00 PM", title: "Roundtable Lunch Discussion", details: "With Speakers" },
      { time: "2:00 PM - 4:00 PM", title: "Panel Discussion", details: "Biomedical Computation and AI - SDBCC, SD BioTech, Avera" },
    ]
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
          </div>

          <table className="min-w-full text-sm text-left text-gray-700">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="px-4 py-2 font-semibold">Time</th>
                <th className="px-4 py-2 font-semibold">Session</th>
                <th className="px-4 py-2 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData[activeDay].map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 align-top whitespace-nowrap">{item.time}</td>
                  <td className="px-4 py-2 align-top">{item.title}</td>
                  <td className="px-4 py-2 align-top">{item.details || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 text-center">
            <a
              a href="/resources/AI_Symposium_Schedule.pdf" 
              className="text-red-600 underline font-medium" 
              download
            >
              📥 Download Full Schedule (PDF)
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
