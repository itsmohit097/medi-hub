import React from "react";

const SkeletonLoading = () => {
  return (
    <div className="border-2 border-gray-200 rounded-md shadow-md py-4 px-4">
      {/* Avatar */}
      <div className="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>

      {/* Details */}
      <div className="space-y-2">
        <div className="w-3/4 h-4 bg-gray-300"></div>
        <div className="w-1/2 h-4 bg-gray-300"></div>
        <div className="w-1/3 h-4 bg-gray-300"></div>
        <div className="w-full h-4 bg-gray-300"></div>
        <div className="w-2/3 h-4 bg-gray-300"></div>
      </div>

      {/* Actions */}
      <div className="flex justify-between mt-4">
        <div className="w-1/2 h-8 bg-gray-300"></div>
        <div className="w-1/2 h-8 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
