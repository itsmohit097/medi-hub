import React from "react";
import { NavLink } from "react-router-dom";
import { FaHospital, FaVideo } from "react-icons/fa";
import hero from "/new_hero.png";
import langIcon from "/language.webp";
import { SkeletonLoading, useLoading } from "../../import-export/ImportExport";

const DoctorsCard = ({ doctor }) => {
  const loading = useLoading(1000); // Using the custom hook

  return (
    <section className="border border-text_grey/40 rounded-md shadow-lg py-1 px-1 bg-gray-300/20 transition duration-300 ease-in-out shadow-md transform hover:scale-105 hover:shadow-md ">
      {loading || !doctor ? (
        <SkeletonLoading />
      ) : (
        <>
          <div className="flex gap-4 px-4 py-3 ">
            {/* Avatar with lazy loading */}
            <img
              src={doctor.docAvatar || hero}
              alt="hero"
              className="w-20 h-20 px-1 py-1 object-cover bg-main_theme/20 backdrop-blur-md rounded-full border border-dark_theme mt-2"
              loading="lazy"
            />

            {/* Details */}
            <div className="doc-details overflow-hidden w-fit">
              <h2 className="font-semibold text-lg tracking-wider text-dark_theme">
                Dr. {doctor.firstName} {doctor.lastName}
              </h2>
              <h3 className="text-main_theme text-sm font-medium tracking-tight uppercase">
                {doctor.department.name}
              </h3>
              <h3 className="text-main_theme text-sm font-medium uppercase">
                {doctor.experience} EXP.
              </h3>
              <p className="text-text_grey/80 truncate overflow-hidden">
                {doctor.qualifications.join(", ")}
              </p>
              {/* Appointment fees for above medium screens */}
              <div className="hidden mt-2 md:flex gap-4 items-center w-full">
                <div>
                  <p className=" text-sm text-text_grey/80 font-medium">
                    You pay
                  </p>
                  <p className="text-dark_theme font-medium">
                    Rs {doctor.appointmentCharges}
                  </p>
                </div>
                {/* Cashback */}
                <div className="border-l-2 border-text_grey/50 px-4">
                  <p className="text-xs text-cart_orange font-light">
                    MEDIHUB CASHBACK
                  </p>
                  <p className="text-cart_orange font-normal">Rs 51</p>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment fees for smaller screen */}
          <div className="mt-2 mb-4 flex md:hidden gap-4 items-center justify-center w-full">
            <div>
              <p className="text-sm text-text_grey/80 font-medium">You pay</p>
              <p className="text-dark_theme font-medium">
                Rs {doctor.appointmentCharges}
              </p>
            </div>

            {/* Cashback */}
            <div className="border-l-2 border-text_grey/50 px-4">
              <p className="text-xs text-cart_orange font-light">
                MEDIHUB CASHBACK
              </p>
              <p className="text-cart_orange font-normal">Rs 51</p>
            </div>
          </div>

          {/* Languages */}
          <div className="flex items-center px-8 mb-4">
            <img src={langIcon} alt="voice" className="mr-2 md:mr-0" />
            <p className="text-sm text-text_grey/70 font-medium md:px-4 tracking-tighter">
              {doctor.languagesKnown.join(", ")}
            </p>
          </div>

          {/* Actions */}
          <div className="ctas grid grid-cols-1 md:grid-cols-2 gap-1">
            <NavLink className="bg-dark_theme/95 hover:bg-dark_theme text-text px-4 py-4 rounded border-none font-medium text-sm tracking-tighter flex items-center justify-center md:justify-normal">
              <FaVideo className="mr-2 text-text size-4" />
              Book Digital Consult
            </NavLink>
            <NavLink className="bg-light_theme/85 hover:bg-light_theme text-dark_theme px-3 py-3 rounded border-none font-semibold text-md tracking-tighter flex items-center justify-center md:justify-normal">
              <FaHospital className="mr-2 text-dark_theme size-5" />
              Book Hospital Visit
            </NavLink>
          </div>
        </>
      )}
    </section>
  );
};

export default DoctorsCard;
