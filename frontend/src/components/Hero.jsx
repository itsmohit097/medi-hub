import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  // Settings for the carousel
  const images = [
    "/heroone.jpg",
    "/anton-8q-U8X1zkvI-unsplash.jpg",
    "/pexels-fr3nks-287227.jpg",
    "/pexels-fr3nks-305564.jpg",
    "/pexels-karolina-grabowska-4021775.jpg",
    "/pexels-pixabay-40568.jpg",
    // Add more image paths here if needed
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false, //make this true if you want to pause the slide on hover over hero section
  };

  return (
    <Slider {...settings}
      arrows={false}
      nextArrow={null}
      prevArrow={null}
    >
      {images.map((image, index) => (
        <div key={index} >
          <div className="w-full h-[92vh] relative md:bg-left-top bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${image})` }}>
          <div className="w-full h-full bg-black/20">
            <div className="relative max-w-7xl  mx-auto flex flex-col items-center md:items-start justify-between lg:px-6 px-3 py-3 h-full">
              <div className="absolute top-[50%] translate-y-[-50%] lg:left-[5%] flex flex-col items-center w-fit gap-6 ">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  text-white text-center py-2 px-6 ">
                  Your Health
                  <br />
                  <span className="text-theme">Is Our</span>
                  <br />
                  <span className="text-theme">Mission</span>
                </h1>
        
                {/* above medium scrren size button */}
                <button
                  className="hidden md:flex w-fit items-center rounded-full md:px-4 lg:px-5 md:py-3 lg:py-4 text-sm font-semibold  shadow-sm hover:shadow-lg   bg-theme hover:bg-onhover text-text gap-3">
                  <img
                    src="https://images.apollo247.in/images/ic-doctor.svg"
                    alt="icon"
                    className="size-8 "
                  />
                  Book Your Appointment Now
                  <IoIosArrowForward className="" />
                </button>
        
                {/* small screen size button */}
                <button className="md:hidden flex w-fit items-center rounded-full px-4 py-4 text-xs font-semibold  shadow-sm hover:shadow-md bg-theme text-text ">
                  <img
                    src="https://images.apollo247.in/images/ic-doctor.svg"
                    alt="icon"
                    className="hidden mr-2 md:mr-4 size-8"
                  />
                  Book an Appointment <IoIosArrowForward className="ml-2" />
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Hero;
