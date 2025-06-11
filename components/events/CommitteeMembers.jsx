// cSpell: disable

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const committeeData = {
  "Organizing Committee": [
    "KC Santosh, Chair & Professor, University of South Dakota (Founding Chair, AI Symposium & Co-Chair, SDBCC)",
    "William CW Chen, Assist. Professor, University of South Dakota (Chair, SDBCC)",
    "Jeffrey McGough, Head & Professor, South Dakota School of Mines (Co-Chair, SDBCC)",
    "Rodrigue Rizk, Assist. Professor/Grad Coord, University of South Dakota (Co-Chair, AI Symposium)",
    "Robert Burke, Conference Committee Chair, IEEE Region 4"
  ],
  "Symposium Secretary": [
    "Rodrigue Rizk, University of South Dakota, USA"
  ],
  "Publicity Committee": [
    "Isaiah Cohen, University of South Dakota, USA",
    "Rodrigue Rizk, University of South Dakota, USA",
    "Travis Loof, University of South Dakota, USA",
    "William Chen, University of South Dakota, USA",
    "Longwei Wang, University of South Dakota, USA",
    "Dipankar DasGupta, University of Memphis, USA",
    "Yaoi-Chiang, University of Minnesota, USA",
    "Aobo Li, UC San Diego, USA",
    "Kurtis Van Gent, Google, USA",
    "Naveen Rokkam, Mygo Consulting Inc, USA",
    "Hubert Cecotti, California State University, USA",
    "Vishnu Pendyala, San Jose State University, USA",
    "Yashbir Singh, Mayo Clinic – Rochester, USA",
    "Szilard Vajda, Central Washington University, USA",
    "Alice Othmani, Universite de Paris-Est, France",
    "Laurent Wendling, University of Paris, France",
    "Mickael Coustaty, University of La Rochelle, France",
    "Aaisha Makkar, University of Derby, UK",
    "Anas Aboud El Kalam, Cadi Ayyad University, Morocco",
    "AbdelKrim Haqiq, Hassan First University of Settat, Morocco",
    "Jitendra Kumar, NIT Tiruchirappalli, India",
    "Satish K Singh, IIIT Allahabad, India",
    "Surbhi Vijh, Amity University, India",
    "Ravindra Hegadi, Central University of Karnataka, India",
    "Deepika Koundal, UPES, India",
    "D S Guru, University of Mysore, India",
    "Marzieh Khakifirooz, Tecno de Monterrey, Mexico",
    "Md-Rafik Bouguelia, Hamlstad University, Sweden",
    "Antoine Vacavant, Univ Clermont Auvergne, France",
    "Djamila Auoada, University of Luxembourg, Luxembourg",
    "ChakChai So-In, Khon Kaen University, Thailand",
    "Xi-Zhao Wang, ShenZhen University, China",
    "Sunil Aryal, Deakin University, AUS",
    "Ameni Boumaiza, Hamad Bin Khalifa University, Qatar",
    "Debasmita Ghosh Roy, Banasthali Vidyapith, India",
    "Priti Rai, University of Delhi, India"
  ],
  "Logistics & Operations": [
    "Ryan Oines, Chief Operating Officer, USD Discovery District",
    "Marc-Antoine Niamba, Biotech Development, USD Discovery District",
    "Laura Wiemers, Management Analyst, University of South Dakota",
    "Cassie Stolpe, Administrative Assistant, University of South Dakota",
    "Kirby Fuglsby, Technology Transfer Officer, University of South Dakota",
    "Hanna DeLange, Public Relations & Content Strategist, University of South Dakota",
    "Alissa Matt, Assist VP for Marketing & University Relations, University of South Dakota"
  ],
  "Advisory Board Members": [
    "Sheila Gestring, President, University of South Dakota",
    "Jay Perry, Vice President, University of South Dakota – Sioux Falls",
    "Dan Engebretson, Vice President, Research & Sponsored Programs, University of South Dakota",
    "Kurt Hackemer, Vice President for Academic Affairs & Provost, University of South Dakota",
    "John Dudley, Dean, College of Arts & Science, University of South Dakota",
    "Tim Ridgway, Vice President of Health Affairs and Dean of the Sanford School of Medicine, University of South Dakota",
    "William Mayhan, Dean, Biomedical Sciences, University of South Dakota"
  ]
};

export default function CommitteeMembers() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h2 className="text-2xl font-semibold text-gray-800">Committee Members</h2>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-gray-600" />
        ) : (
          <ChevronDown className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {isOpen && (
        <div className="mt-4 border-t pt-4 space-y-6">
          {Object.entries(committeeData).map(([title, members], idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-red-600 mb-2">{title}</h3>
              <ul className="space-y-1 pl-4 list-disc text-gray-700 text-sm">
                {members.map((member, i) => (
                  <li key={i}>{member}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
