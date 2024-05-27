import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewHero from "/new_hero.png";
function Hero() {
  // // Settings for the carousel
  // const images = [
  //   "/heroone.jpg",
  //   "/anton-8q-U8X1zkvI-unsplash.jpg",
  //   "/pexels-fr3nks-287227.jpg",
  //   "/pexels-fr3nks-305564.jpg",
  //   "/pexels-karolina-grabowska-4021775.jpg",
  //   "/pexels-pixabay-40568.jpg"
  //   // Add more image paths here if needed
  // ];
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 700
  // };

  return (
    // <Slider {...settings}>
    //   {images.map((image, index) => (
    //     <div key={index} >
    <div className="bg-light_theme w-full h-[100vh] relative md:bg-left-top bg-cover bg-no-repeat bg-center">
      <div className="w-full h-full bg-black/20 ">
        <div className="relative max-w-7xl  mx-auto flex flex-col items-center md:items-start justify-between lg:px-6 px-3 py-3 h-[calc(100%_-_8vh)]">
          <div className="absolute top-[50%] translate-y-[-50%] lg:left-[5%] flex flex-col w-fit gap-6 ">
            <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl  text-black py-2 px-6 ">
              HELLO THERE!
              <br />
              <span className="text-2xl lg:text-4xl md:text-4xl font-medium">
                Always caring about
              </span>
              <br />
              <span className="text-2xl lg:text-4xl md:text-4xl font-medium">
                {" "}
                your health, we are here to
              </span>
              <br />
              <span className="text-2xl lg:text-4xl md:text-4xl font-medium">
                {" "}
                help you.
              </span>
            </h1>

            {/* above medium scrren size button */}
            <button className="rounded-md ml-6 md:flex w-fit items-center px-8 py-4 text-md font-md shadow-sm hover:shadow-lg bg-main_theme hover:bg-onhover text-text gap-4 ">
              <img
                src="https://images.apollo247.in/images/ic-doctor.svg"
                alt="icon"
                className="hidden lg:block md:block size-8 "
              />
              Book Your Appointment Now
              {/* <IoIosArrowForward className="" /> */}
            </button>
            <button className="rounded-md ml-6 md:flex w-fit items-center px-8 py-4 text-md font-md shadow-sm hover:shadow-lg bg-main_theme hover:bg-onhover text-text gap-4">
              <img
                src="https://www.svgrepo.com/download/88732/medicines.svg"
                alt="icon"
                className="hidden lg:block md:block size-8 "
              />
              Buy Medicines and Essentials
            </button>
            {/* small screen size button
                  <button className="md:hidden flex w-fit items-center rounded-full px-4 py-4 text-xs font-semibold  shadow-sm hover:shadow-md bg-theme text-text ">
                    <img
                      src="https://images.apollo247.in/images/ic-doctor.svg"
                      alt="icon"
                      className="hidden mr-2 md:mr-4 size-8"
                    />
                    Book an Appointment <IoIosArrowForward className="ml-2" />
                  </button> */}
          </div>
          <img
            src={NewHero}
            alt="Your Image"
            className="hidden md:block absolute top-[50%] right-0 transform -translate-y-1/2 w-1/2 h-auto"
          />
          <div className="lg:block hidden absolute top-24 right-96 bg-white border border-gray-300 rounded-lg shadow-lg shadow-lg-right shadow-lg-bottom py-4 px-2 mr-10">
            <p className="font-semibold">
              <span>Stay hydrated, </span>
              <br />
              <span>Stay healthy</span>
            </p>
          </div>
          <div className="lg:block hidden absolute top-44 right-12 bg-white border border-gray-300 rounded-lg shadow-lg shadow-lg-right shadow-lg-bottom px-2 py-4 mt-4 ml-4">
            <p className="font-semibold">
              <span>Healthy diet,</span>
              <br />
              <span>Healthy life</span>
            </p>
          </div>

          <div className="lg:block hidden absolute bottom-5 right-96 bg-white border border-gray-300 rounded-lg shadow-lg shadow-lg-right shadow-lg-bottom px-6 py-4 mt-4 mr-4">
            <p className="font-semibold">
              <span>Prioritize your </span>
              <br />
              <span>mental health</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    //     </div>
    //   ))}
    // </Slider>
  );
}

export default Hero;
