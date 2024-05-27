import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faLocationDot,
  faVideoCamera,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";

const Doctors = ({ doctor }) => {
  return (
    <section className="bg-light_theme rounded-lg shadow-lg mx-auto my-4 p-6 sm:max-w-md sm:mx-4 md:max-w-lg lg:max-w-xl">
      <div className="flex items-center mb-4">
        <img
          src="https://wallpapercave.com/wp/wp2555019.jpg"
          alt="doctor name"
          className="w-24 h-24 rounded-full object-cover border-2 border-main_theme"
        />
        <div className="ml-4">
          <p className="font-bold text-main_theme">Name: {doctor.name}</p>
          <p className="text-main_theme">
            Qualification: {doctor.qualification}
          </p>
        </div>
      </div>
      <p className="mb-2">
        <span className="font-bold text-main_theme">
          Experience (in Years):{" "}
        </span>
        {doctor.experience}
      </p>
      <p className="mb-4">
        <span className="font-bold text-main_theme">Main Role: </span>
        {doctor.title}
      </p>
      <div className="mb-4">
        <p className="font-bold text-main_theme">Pay Now - </p>
        <b className="text-cart_orange">Rs. {doctor.fees}</b>
      </div>
      <div className="flex items-center mb-2">
        <FontAwesomeIcon icon={faAddressCard} className="text-main_theme" />
        <p className="ml-2">{doctor.languages}</p>
      </div>
      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faLocationDot} className="text-main_theme" />
        <p className="ml-2">{doctor.location}</p>
      </div>
      <div className="bg-pastel_blue p-4 rounded-md mb-4 text-center">
        <p>Available Tomorrow</p>
        <p>Available within 5-10 Minutes</p>
      </div>
      <div className="flex justify-between space-x-2">
        <button className="bg-cart_orange text-white py-2 px-4 rounded-md flex items-center hover:bg-orange-600 space-x-2">
          <FontAwesomeIcon icon={faVideoCamera} /> <span>Book Appointment</span>
        </button>
        <button className="bg-main_theme text-white py-2 px-4 rounded-md flex items-center hover:bg-teal-700 space-x-2">
          <FontAwesomeIcon icon={faHospital} /> <span>Book Hospital Visit</span>
        </button>
      </div>
    </section>
  );
};

export default Doctors;
