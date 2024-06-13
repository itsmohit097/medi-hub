import React from "react";

const SkeletonLoading = ({ type }) => {
  switch (type) {
    case "speciality":
      return (
        <div className="border border-text_grey/40 rounded-md shadow-lg bg-gray-300/20 animate-pulse">
          <div className="flex flex-col gap-y-3 items-center max-w-72 border border-text_grey/40 rounded-md bg-gray-300/20 transition duration-300 ease-in-out shadow-md transform hover:scale-105 hover:shadow-md text-center">
            {/* title Skeleton */}
            <div className="overflow-hidden w-full">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-2"></div>
            </div>

            {/* icon Skeleton */}
            <div className="flex justify-center items-center w-16 h-16 md:w-24 md:h-24 border-2 border-green-0 mb-2">
              <div className="w-full h-full bg-gray-200 rounded-full"></div>
            </div>

            {/* description Skeleton */}
            <div className="overflow-hidden w-full">
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            </div>

            {/* symptoms Skeleton */}
            <div className="overflow-hidden w-full">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </div>
      );

    case "category":
      return (
        <div className="w-[127px] h-[137px] md:w-[157px] md:h-[167px] xl:w-[177px] xl:h-[207px] flex flex-col items-center justify-center border border-text_grey/40 rounded-md animate-pulse">
          <div className="relative w-full h-full overflow-hidden bg-gray-200"></div>
          <div className="sm:text-base md:text-lg lg:text-xl text-dark_theme font-medium text-center mt-3 mb-2 bg-gray-200 h-6 w-3/4"></div>
        </div>
      );
    case "product":
      return (
        <div className="w-[127px] h-[137px] md:w-[157px] md:h-[167px] xl:w-[177px] xl:h-[207px] flex flex-col items-center justify-center border border-text_grey/40 rounded-md animate-pulse">
          <div className="relative w-full h-full overflow-hidden bg-gray-200"></div>
          <div className="sm:text-base md:text-lg lg:text-xl text-dark_theme font-medium text-center mt-3 mb-2 bg-gray-200 h-6 w-3/4"></div>
          <div className="text-sm bg-gray-200 h-4 w-1/2 mt-1"></div>
          <div className="text-sm bg-gray-200 h-4 w-2/3 mt-1"></div>
        </div>
      );
    default:
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
  }
};

export default SkeletonLoading;
