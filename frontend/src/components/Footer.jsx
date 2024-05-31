import React from "react";
import { axios } from "../import-export/ImportExport";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { toast } from "react-toastify";
// icons
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const navLinks = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/aboutus",
      display: "About Us",
    },
    {
      path: "/faq",
      display: "Faqs",
    },
    {
      path: "/privacypolicy",
      display: "Privacy Policy",
    },
    {
      path: "/termsandconditions",
      display: "Terms and Conditions",
    },
  ];

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "/message/send",
          { email, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setEmail("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-light_theme w-full  text-center">
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center px-8 sm:px-20 space-y-9 pt-20 pb-20 rounded-xl">
        {/* footer top */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Title */}
          <div className="cols-span-1 md:col-span-5 text-left sm:pr-36">
            <h1 className="text-2xl lg:text-2xl font-bold text-[#113C49] mb-6">
              <div className="h-12 w-12 bg-[#03565A] opacity-45 rotate-45 rounded-md absolute">
                {" "}
              </div>
              <span className="ps-3 relative top-2">MediHub</span>
            </h1>
            {/* desc */}
            <p className="leading-10 text-lg lg:text-lg  text-[#696984] font-medium font-Roboto font-normal pt-8">
              MediHub is a web-based platform facilitating seamless management
              of healthcare services, including appointments, patient records,
              and doctor interactions.
            </p>
            {/* icons */}
            {/* <div className="flex items-center gap-4 mt-10">
              <div className=" border border-white/70 rounded-full px-2 py-2 hover:bg-slate-700/30 cursor-pointer">
                <a href="https://www.linkedin.com/in/itsmohit097/" target="_blank">
                  <FaInstagram />
                </a>
              </div>
              <div className=" border border-white/70 rounded-full px-2 py-2 hover:bg-slate-700/30 cursor-pointer">
                <a href="https://www.linkedin.com/in/itsmohit097/" target="_blank">
                  <FaLinkedin />
                </a>
              </div>
              <div className=" border border-white/70 rounded-full px-2 py-2 hover:hover:bg-slate-700/30 cursor-pointer">
                <a href="https://www.linkedin.com/in/itsmohit097/" target="_blank">
                <FaXTwitter />
                </a>
              </div>
            </div> */}
          </div>
          {/* Quick links */}
          <div className="cols-span-1 md:col-span-3">
            <h1 className="text-left text-2xl lg:text-2xl font-semibold mb-6 text-[#113C49]">
              Quick Links
            </h1>
            <ul className="flex flex-col justify-between gap-2 text-md md:gap-y-2 font-Roboto text-left text-[#3D5056]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className="relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-main_theme before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-[#3D5056]"
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact US */}
          <form
            onSubmit={handleMessage}
            className="cols-span-1 md:col-span-4 grid gap-y-8"
          >
            <h1 className="text-left text-2xl font-semibold text-[#113C49]">
              Contact Us
            </h1>
            <div className="relative flex justify-left space-y-7">
              <label
                htmlFor="email"
                className="text-md font-normal absolute top-0 left-0 text-[#3A3A3D]"
              >
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-3 h-10 flex-none w-4/5"
              />
            </div>
            <div className="relative flex justify-left space-y-7">
              <label
                htmlFor="message"
                className="text-md font-normal absolute top-0 left-0 text-[#3A3A3D]"
              >
                Message
              </label>
              <textarea
                rows={7}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="px-3 py-3 h-32 grow"
              />
            </div>
            <button
              type="submit"
              className="grow bg-main_theme text-white bg-[#113C49] py-3 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* footer bottom */}
      <div className="w-full py-4 bg-[#03565A] h-14">
        {/* copyright */}
        <p className="text-sm lg:text-[1rem] font-Roboto font-small text-center text-[#FFFFFF]">
          © {new Date().getFullYear()} Mohit kumar. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
