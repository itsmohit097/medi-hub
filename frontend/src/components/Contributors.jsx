import React from "react";

function Contributors() {
  const data = [
    {
      image: "/Image.png",
      name: "contributor1",
      count: "21",
    },
    {
      image: "/Image.png",
      name: "contributor2",
      count: "21",
    },
    {
      image: "/Image.png",
      name: "contributor3",
      count: "21",
    },
    {
      image: "/Image.png",
      name: "contributor3",
      count: "21",
    },
    {
      image: "/Image.png",
      name: "contributor3",
      count: "21",
    },
    {
      image: "/Image.png",
      name: "contributor3",
      count: "21",
    },
    {
      image: "/Image.png",
      name: "contributor3",
      count: "21",
    },
  ];

  return (
    <div className=" w-full md:py-24 py-12">
      <div className="bg-pastel_yellow max-w-7xl mx-auto flex flex-col items-center h-full lg:px-6 lg:py-8 lg:justify-center px-0 py-3">
        <h1 className=" text-2xl md:text-4xl lg:text-5xl font-bold text-theme text-center">
          Meet Our Talented Team
        </h1>
        <p className="text-xs md:text-base md:max-w-2xl mt-6 text-center">
          We understand that your health and well-being are of paramount
          importance. Here are compelling reasons why you should choose us for
          your healthcare needs
        </p>
        {/* cards */}
        <div className="grid grid-rows-1 grid-flow-col gap-x-6 gap-y-4 md:gap-y-10 lg:py-8 mt-12 md:mt-14 lg:mt-20 px-3 overflow-hidden w-full ">
          {data.map((contributor, index) => (
            <div
              key={index}
              className="max-w-44 hover:border border-main_theme flex items-center shadow-md my-4 rounded-lg md:px-4 hover:shadow-xl py-4 bg-white"
            >
              <div className="flex flex-col justify-between items-center gap-y-4 px-3 md:px-0">
                <div className="w-36 h-36">
                  <img
                    src={contributor.image}
                    alt="image"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-md font-semibold uppercase text-theme/80">
                    {contributor.name}
                  </h1>
                  <p className="mt-0 text-md text-black text-">
                    Contributions: {contributor.count}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contributors;
