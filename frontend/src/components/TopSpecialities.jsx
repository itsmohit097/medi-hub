import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function TopSpecialities() {
  const data = [
    {
      image: "/heart.png",
      name: "Cardiology",
      info1: "Form heart and blood health problems",
      info2: "Chest pain, Heart failure , Chlosteral"
    },
    {
      image: "/heart.png",
      name: "Cardiology",
      info1: "Form heart and blood health problems",
      info2: "Chest pain, Heart failure , Chlosteral"
    },
    {
      image: "/heart.png",
      name: "Cardiology",
      info1: "Form heart and blood health problems",
      info2: "Chest pain, Heart failure , Chlosteral"
    },
    {
      image: "/heart.png",
      name: "Cardiology",
      info1: "Form heart and blood health problems",
      info2: "Chest pain, Heart failure , Chlosteral"
    },
    {
      image: "/heart.png",
      name: "Cardiology",
      info1: "Form heart and blood health problems",
      info2: "Chest pain, Heart failure , Chlosteral"
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="w-full  ">
      <div className="max-w-7xl mx-auto flex flex-col items-center h-full lg:px-6 lg:py-8 lg:justify-center px-0 py-3">
        <h1 className="text-3xl  font-semibold text-theme text-start">
          Top Specialities
        </h1>
        <p className="text-xs text-2xl text-slate-500 text md:text-base md:max-w-2xl mt-6 text-center">
          Skilline is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>


        <div className=" flex justify-center items-center w-full pl-8 mt-8">
          <div className="text-start py-4">
            <p>SPECIALITIES</p>
            <p className="text-3xl font-semibold text-theme text-start">
              Our top value
              categories for you
            </p>
          </div>

          {/* cards */}
          <div className="bg-pastel_yellow grid grid-rows-1 grid-flow-col gap-x-6 gap-y-4 md:gap-y-10 lg:py-8 md:mt-14 lg:mt-20 px-3 overflow-hidden w-full">
            {data.map((specialities, index) => (
              <div
                key={index}
                className="w-60 h-70 md:w-64 md:h-80 lg:w-72 lg:h-96 hover:border border-main_theme flex items-center justify-center  shadow-md my-4 rounded-lg md:px-4 hover:shadow-xl py-4 bg-white rounded-[20px]"
              >
                <div
                  className="flex flex-col justify-center items-center gap-y-4 px-3 md:px-0 w-full h-full"
                >
                  <div className="w-36 h-36">
                    <h1 className=" text-center text-md font-semibold text-theme/80">
                      {specialities.name}
                    </h1>
                    <img
                      src={specialities.image}
                      alt="image"
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h1 className="text-sm   text-theme/80">
                      {specialities.info1}
                    </h1>
                    <p className="mt-2 font-semibold text-sm text-black">
                      {specialities.info2}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
          {/* arrow button */}
          <div className="relative right-4 -top-12">
            <div className="w-16 h-16 flex items-center justify-center bg-white text-white rounded-full shadow-lg">
              <IoIosArrowForward color="black" fontSize={30} onClick={() => navigate("/specialities")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSpecialities;
