import React, { useState, useEffect } from "react";

const TopSpecialitiesCard = ({ speciality }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
// this 1000 ms will be replaced with the content loading 
    return () => clearTimeout(timer);
  }, []);

  if (loading || !speciality) {
    return (
      <div className="bg-white shadow-lg rounded-lg m-4 p-6 max-w-sm w-full overflow-hidden animate-pulse">
        <div className="h-6 bg-gray-200 w-3/4 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 w-1/2 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 w-2/3 rounded mb-2"></div>
        <div className="flex flex-wrap justify-center">
          <div className="bg-gray-200 rounded-full px-3 py-1 text-sm text-text_grey mb-2 mr-2"></div>
          <div className="bg-gray-200 rounded-full px-3 py-1 text-sm text-text_grey mb-2 mr-2"></div>
          <div className="bg-gray-200 rounded-full px-3 py-1 text-sm text-text_grey mb-2 mr-2"></div>
        </div>
      </div>
    );
  }

  const { name, icon, desc, symptoms } = speciality;

  return (
    <div className="bg-white shadow-xl rounded-lg m-4 p-6 max-w-sm w-full overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <h2 className="text-2xl font-semibold text-main_theme mb-4">{name}</h2>
      <div className="flex justify-center mb-6">
        <div className="text-5xl text-pastel-yellow">{icon}</div>
      </div>
      <p className="text-text_grey mb-6">{desc}</p>
      <div className="flex flex-wrap text-center justify-center">
        {symptoms.split(", ").map((symptom, index) => (
          <div
            key={index}
            className="bg-light_theme rounded-full px-3 py-1 text-sm text-gray-700 mb-2 mr-2 shadow-sm hover:shadow-md transition duration-300"
          >
            {symptom}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSpecialitiesCard;
