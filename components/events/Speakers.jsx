export default function Speakers() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎤 Speakers</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Dr. George Awad – National Institute of Standards and Technology (NIST)
          </h3>
          <p className="text-gray-700">
           Computer Scientist/Project Leader
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Gopi Challagolla – Microsoft
          </h3>
          <p className="text-gray-700">
            Software Engineer
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Dr. Douglas Lauffenburger – MIT
          </h3>
          <p className="text-gray-700">
             Full Professor and Founding Chair of the Department of Biological Engineering 
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Dr. Kaifu Chen – Harvard Medical School / Boston Children's Hospital
          </h3>
          <p className="text-gray-700">
           Associate Professor at Harvard Medical School 
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Dr. Yinglong Miao – University of North Carolina Chapel Hill
          </h3>
          <p className="text-gray-700">
            Associate Professor 
          </p>
        </div>
      </div>
    </div>
  );
}
