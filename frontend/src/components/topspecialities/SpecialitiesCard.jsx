import React from "react";
import { SkeletonLoading, useLoading } from "../../import-export/ImportExport";

const SpecialitiesCard = ({ speciality }) => {
  const loading = useLoading(1000);
  if (loading || !speciality) return <SkeletonLoading type="speciality" />;

  return (
    <section className="w-full flex flex-col gap-y-3 items-center max-w-72 border border-text_grey/40 rounded-md py-3 px-3 bg-gray-300/20 transition duration-300 ease-in-out shadow-md transform hover:scale-105 hover:shadow-md text-center">
      {/* title */}
      <div className="overflow-hidden w-full">
        <h2 className="text-lg md:text-xl font-semibold text-dark_theme line-clamp-1">
          {speciality.name}
        </h2>
      </div>

      {/* icon */}
      <div className="flex justify-center items-center w-16 h-16 md:w-24 md:h-24 border-2 border-green-0 mb-2">
        <img
          src={speciality.icon}
          alt="speciality image"
          className="w-full h-full object-cover object-center mix-blend-multiply border-none"
        />
      </div>

      {/* description */}
      <div className="overflow-hidden w-full">
        <p className="text-sm text-dark_theme/80 text-center tracking-tight leading-tight line-clamp-2">
          {speciality.desc}
        </p>
      </div>

      <div className="overflow-hidden w-full">
        <p className="text-sm text-center text-dark_theme font-medium tracking-tight leading-tight line-clamp-2">
          {speciality.symptoms.join(", ")}
        </p>
      </div>
    </section>
  );
};

export default SpecialitiesCard;
