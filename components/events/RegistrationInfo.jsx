import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function RegistrationInfo() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h2 className="text-2xl font-semibold text-gray-800">
          Registration link
        </h2>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-gray-600" />
        ) : (
          <ChevronDown className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {isOpen && (
        <div className="mt-4 border-t pt-4 text-gray-700 text-base">
          <p className="mb-4">
            This event is <strong>free for students</strong>, but registration is required to attend.
          </p>
          <p className="mb-4">
            📌 Registration link:{" "}
            <a
              href="https://events.vtools.ieee.org/event/register/487885"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 underline hover:text-red-800"
            >
              https://events.vtools.ieee.org/event/register/487885
            </a>
          </p>
{/* 
          <div>
            <h3 className="font-medium text-gray-800">Registration Starts</h3>
            <p className="text-gray-600">
              🕔 06 June 2025 – 12:00 AM (CDT)
            </p>
            <h3 className="font-medium text-gray-800 mt-2">Ends</h3>
            <p className="text-gray-600">
              🕔 26 June 2025 – 12:00 AM (CDT)
            </p>
          </div> */}
          <br />
           <p className="mb-4">
            <strong>🎓 Sign up, attend, and receive a certificate of participation immediately after the event! </strong> 
          </p> 

        </div>
      )}
    </div>
  );
}
