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
          <p>
            📌 Registration link:{" "}
            <a
              href="https://vtools.ieee.org/events/register/your-event-id" // <-- Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 underline hover:text-red-800"
            >
              Register on vTools
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
