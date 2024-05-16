import React from "react";

function AllDoctors() {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img className="w-full" src="public/hero.jpg" alt="Doctor" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Doctor Name</div>
          <p className="text-gray-700 text-base">
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Hospital
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Specialty
          </span>
        </div>
        <div className="px-6 py-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go somewhere
          </button>
        </div>
      </div>
      {/* Add more cards as needed */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img className="w-full" src="public/hero.jpg" alt="Doctor" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Doctor Name</div>
          <p className="text-gray-700 text-base">
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Hospital
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Specialty
          </span>
        </div>
        <div className="px-6 py-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go somewhere
          </button>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img className="w-full" src="public/hero.jpg" alt="Doctor" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Doctor Name</div>
          <p className="text-gray-700 text-base">
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Hospital
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Specialty
          </span>
        </div>
        <div className="px-6 py-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go somewhere
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllDoctors;
