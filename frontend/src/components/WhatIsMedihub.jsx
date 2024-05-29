import React from "react";

const WhatIsMedihub = () => {
  return (
    <div className="bg-light_theme p-6 text-center md:px-10 lg:px-64">
      <h1 className="text-4xl font-semibold mb-4 pt-12 pb-4">
        What is <span className="text-main_theme">MediHub?</span>
      </h1>
      <p className="text-lg text-slate-500 mb-6 px-6 md:px-12">
        MediHub is a web-based platform facilitating seamless management of
        healthcare services, including appointments, patient records, and doctor
        interactions.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8 py-12">
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/2 md:mr-4">
          <img
            src="/instructorImage.png"
            alt="Instructors"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col items-center justify-center space-y-4">
            <h2 className="text-white text-2xl font-semibold">
              FOR INSTRUCTORS
            </h2>
            <button className="bg-transparent border border-white text-white py-2 px-4 rounded-full">
              Start a Class Today
            </button>
          </div>
        </div>

        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/2 md:ml-4 mt-8 md:mt-0">
          <img
            src="/studentsImage.png"
            alt="Students"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col items-center justify-center space-y-4">
            <h2 className="text-white text-2xl font-semibold">FOR STUDENTS</h2>
            <button className="bg-cyan-500 text-white py-2 px-4 rounded-full">
              Enter Access Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsMedihub;
