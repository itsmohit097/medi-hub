import React from "react";

export default function SearchMedicines() {
  return (
    <section className="bg-dark_theme min-h-64 flex justify-center items-center flex-col gap-5">
      <h1 className="text-4xl font-bold text-white">
        Buy Medicines and Essentials
      </h1>
      <div className="w-6/12 mx-auto">
        <div className="relative flex items-center w-full h-16 rounded-xl focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            // onChange={(event) => setSearch(event.target.value)}
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search medicines.."
          />
        </div>
      </div>
    </section>
  );
}
