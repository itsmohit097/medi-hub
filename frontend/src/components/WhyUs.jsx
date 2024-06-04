import React from "react";

import { BiSolidFirstAid } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";

function WhyUs() {
  return (
    <div className=" w-full md:pb-10 md:pt-16 py-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center h-full lg:px-6 lg:py-8 lg:justify-center px-0 py-3">
        <h1 className=" text-2xl md:text-4xl lg:text-5xl font-bold text-theme text-center">
          Our Services
        </h1>
        <p className="text-xs p-3 md:text-base md:max-w-2xl mt-6 text-center">
          Skilline is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>

        {/* cards */}
        <div className="grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-x-8 gap-y-4 md:gap-y-6 lg:py-8  px-3">
          {/* Aid card  */}
          <div className="flex flex-col items-start shadow-md my-4 rounded-lg md:px-4 hover:shadow-xl  border-theme py-4 bg-pastel_blue">
            <div className="flex flex-col justify-between items-start gap-y-4 px-3 md:px-0">
              <div className="icon relative -top-[30%] left-[125px]">
                <BiSolidFirstAid className="size-20 text-red-600 border border-red-600 rounded-full py-4" />
              </div>

              <div className="text -mt-[35px]">
                <h1 className="mb-2 text-md text-center font-semibold uppercase text-theme/80">
                  Advanced Technology
                </h1>
                <p className="mt-0 text-sm text-center text-black ">
                  Simple and secure control of your organization's financial and
                  legal transactions. Send customized invoices and contracts.
                </p>
              </div>
            </div>
          </div>
          {/* Doctors card */}
          <div className="flex flex-col items-start shadow-md my-4 rounded-lg md:px-4 hover:shadow-xl  border-theme py-4 bg-pastel_yellow">
            <div className="flex flex-col justify-between items-start gap-y-4 px-3 md:px-0">
              <div className="icon relative -top-[30%] left-[125px]">
                <FaUserDoctor className="size-20 text-green-600 border border-green-600 rounded-full py-4" />
              </div>

              <div className="text -mt-[35px]">
                <h1 className="mb-2 text-md text-center font-semibold uppercase text-theme/80">
                  Certified Doctors
                </h1>
                <p className="mt-0 text-sm text-center text-black text-">
                  Schedule and reserve classroom at one campus or multiple
                  campuses. Keep detailed records of student's attendance.
                </p>
              </div>
            </div>
          </div>
          {/* Infrastrucutre card */}
          <div className="flex flex-col items-start shadow-md my-4 rounded-lg md:px-4 hover:shadow-xl border-theme py-4 bg-pastel_pink">
            <div className="flex flex-col justify-between items-start gap-y-4 px-3 md:px-0">
              <div className="icon relative -top-[30%] left-[125px]">
                <FaRegBuilding className="size-20 text-gray-900 border border-gray-900 rounded-full py-4" />
              </div>

              <div className="text  -mt-[35px]">
                <h1 className="mb-2 text-md font-semibold uppercase text-center text-theme/80">
                  Best Infrastrucutre
                </h1>
                <p className="mt-0 text-sm text-center text-black text-">
                  Automate and track emails to individuals or groups. Skilline's
                  built-in system helps organize your organization.
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
