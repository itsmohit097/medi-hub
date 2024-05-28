// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
import heroImg from "/hero.png";
import tick from "/tick.png";
import hero from "/new_hero.png";

function Hero() {
  return (
    <div className={`bg-light_theme w-full h-lvh relative `}>
      <section className="relative max-w-7xl mx-auto flex flex-col items-center md:items-start justify-center md:justify-between h-full lg:px-6  px-3 py-1">
        {/* text container */}
        <section className="md:absolute md:top-[50%] md:translate-y-[-50%] md:left-[50%] md:translate-x-[-50%] lg:left-0 lg:translate-x-0 flex flex-col max-w-lg gap-y-6">
          {/* heading */}
          <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl  text-main_theme tracking-tight">
            <span className="text-dark_theme mr-2">Always</span>
            <span>caring about your health</span>
          </h1>

          {/* para */}
          <p className="text-text_grey mb-6">
            MediHub is a platform where you can meet all doctors and buy
            essentials in one place.
          </p>

          {/* ctas */}
          <NavLink
            to={"/alldoctors"}
            className="rounded flex w-fit items-center px-3 md:px-4 py-3 md:py-4 text-md text-md shadow-md hover:shadow-lg bg-main_theme hover:bg-dark_theme text-text gap-2 md:gap-4"
          >
            <img
              src="https://images.apollo247.in/images/ic-doctor.svg"
              alt="icon"
              className="md:size-7 size-5"
            />
            Book Your Appointment Now
          </NavLink>
          <NavLink
            to={"/medicines/all"}
            className="rounded flex w-fit items-center px-3 md:px-4 py-3 md:py-4 text-md text-md shadow-md hover:shadow-lg bg-main_theme hover:bg-dark_theme text-text gap-2 md:gap-4"
          >
            <img
              src="https://www.svgrepo.com/download/88732/medicines.svg"
              alt="icon"
              className="md:size-7 size-5"
            />
            Buy Medicines and Essentials
          </NavLink>
        </section>

        {/* image section */}
        <section className="hidden absolute top-[50%] translate-y-[-50%] right-[0%] min-w-[700px] md:min-h-[450px] lg:flex items-end justify-center py-4">
          {/* image container */}
          <div className="overflow-hidden h-fit relative">
            <img
              src={heroImg}
              alt="heroImage"
              className="md:w-[500px] object-contain object-top translate-y-[2%]"
            />
          </div>

          <div className="hidden absolute top-[20%] left-[-3%] bg-white/40 backdrop-filter backdrop-blur-md rounded-md shadow-md px-4 py-4 md:flex items-center gap-3 text-dark_theme ">
            <img src={tick} alt="tick" />
            <p className="font-semibold">50+ Experienced Doctors</p>
          </div>
          <div className="hidden md:absolute top-[45%] right-[-10%] bg-white/40 backdrop-filter backdrop-blur-md rounded-md shadow-md px-4 py-4 md:flex items-center gap-3 text-dark_theme ">
            <img src={tick} alt="tick" />
            <p className="font-semibold">20+ Medical Achievements</p>
          </div>

          <div className="absolute bottom-[-5%] left-[-6%] bg-white/40 backdrop-filter backdrop-blur-md rounded-md shadow-md px-6 py-4 flex flex-col items-start text-dark_theme space-y-7">
            {/* iamge div */}
            <div className="flex items-center gap-4">
              <img
                src={hero}
                alt="hero"
                className="w-14 h-14 px-1 py-1 object-cover bg-main_theme/20 backdrop-blur-md rounded-full border border-dark_theme"
              />
              <div className="">
                <h2 className="font-semibold">Dr.Harish Shukla</h2>
                <p className="font-normal text-text_grey/90">Cardiologist</p>
              </div>
            </div>
            <p className="font-semibold text-center">Make Appointment</p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Hero;
