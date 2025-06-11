export default function Speakers() {
  const speakerList = [
    "George Awad, Computer Scientist/Project Leader, National Institute of Standards and Technology (NIST)",
    "Gopi Challagolla, Software Engineer, Microsoft",
    "Douglas Lauffenburger, Full Professor and Founding Chair of Dept of Biological Engineering at MIT",
    "Kaifu Chen, Associate Professor at Harvard Med School / Boston Children's Hospital",
    "Yinglong Miao, Associate Professor at University of North Carolina Chapel Hill",
    "Kinchel C. Doerner, Director, SD EPSCoR",
    "Pete Doucette, Director, EROS Center",
    "Joni Ekstrum, Executive Director, South Dakota Biotech",
    "Dan Buresh, Director of Data Management, Direct Companies",
    "Carson Merkwan, Director of Business Development, Direct Companies",
    "Joseph J. Schueder, Senior Technical Fellow, Collins Aerospace",
    "Joseph Engler, Chief AI Scientist, Collins Aerospace",
    "Chris Reuter, Sr. Principal AI Engineer, Collins Aerospace"
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎤 Speakers</h2>
      <ul className="space-y-2 pl-5 list-disc text-gray-700 text-sm">
        {speakerList.map((speaker, index) => (
          <li key={index}>{speaker}</li>
        ))}
      </ul>
      <p className="italic text-gray-500 mt-4">… more coming soon.</p>
    </div>
  );
}
