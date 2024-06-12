import React from "react";

import { BiSolidFirstAid } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";

function WhyUs() {
  return (
    <div className=" w-full md:py-2 py-12 border border-red-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center h-full lg:px-6 lg:py-8 lg:justify-center px-0 py-3">
        <h1 className=" text-2xl md:text-4xl lg:text-5xl font-bold text-theme text-center">
          Why Choose Us
        </h1>
        <p className="text-xs md:text-base md:max-w-2xl mt-6 text-center">
          We understand that your health and well-being are of paramount
          importance. Here are compelling reasons why you should choose us for
          your healthcare needs
        </p>

        {/* cards */}
        <div className="grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-x-8 gap-y-4 md:gap-y-10 lg:py-8 mt-12 md:mt-14 lg:mt-20 px-3">
          {/* Aid card  */}
          <div className="flex flex-col items-start shadow-md my-4 rounded-lg md:px-4 hover:shadow-xl hover:border border-theme py-4 bg-pastel_blue">
            <div className="flex flex-col justify-between items-start gap-y-4 px-3 md:px-0">
              <div className="icon">
                <BiSolidFirstAid className="size-20 text-red-600 border border-red-600 rounded-full py-4" />
              </div>

              <div className="text">
                <h1 className="mb-2 text-md text-left font-semibold uppercase text-theme/80">
                  Advanced Technology
                </h1>
                <p className="mt-0 text-sm text-left text-black text-">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Commodi repellat numquam, dolore necessitatibus excepturi
                  velit saepe consequatur magnam, unde officiis, hic ipsam nemo
                  praesentium nam quo.
                </p>
              </div>
            </div>
          </div>
          {/* Doctors card */}
          <div className="flex flex-col items-start shadow-md my-4 rounded-lg md:px-4 hover:shadow-xl hover:border border-theme py-4 bg-pastel_yellow">
            <div className="flex flex-col justify-between items-start gap-y-4 px-3 md:px-0">
              <div className="icon">
                <FaUserDoctor className="size-20 text-green-600 border border-green-600 rounded-full py-4" />
              </div>

              <div className="text">
                <h1 className="mb-2 text-md text-left font-semibold uppercase text-theme/80">
                  Certified Doctors
                </h1>
                <p className="mt-0 text-sm text-left text-black text-">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Commodi repellat numquam, dolore necessitatibus excepturi
                  velit saepe consequatur magnam, unde officiis, hic ipsam nemo
                  praesentium nam quo.
                </p>
              </div>
            </div>
          </div>
          {/* Infrastrucutre card */}
          <div className="flex flex-col items-start shadow-md my-4 rounded-lg md:px-4 hover:shadow-xl hover:border border-theme py-4 bg-pastel_pink">
            <div className="flex flex-col justify-between items-start gap-y-4 px-3 md:px-0">
              <div className="icon">
                <FaRegBuilding className="size-20 text-gray-900 border border-gray-900 rounded-full py-4" />
              </div>

              <div className="text">
                <h1 className="mb-2 text-md text-left font-semibold uppercase text-theme/80">
                  Best Infrastrucutre
                </h1>
                <p className="mt-0 text-sm text-left text-black text-">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Commodi repellat numquam, dolore necessitatibus excepturi
                  velit saepe consequatur magnam, unde officiis, hic ipsam nemo
                  praesentium nam quo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
