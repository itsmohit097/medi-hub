import React from "react";
import { NavLink } from "react-router-dom";

// icons
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className=" w-screen text-center px-2 ">
      <div className="bg-body w-full   border-t border-onhover  mx-auto flex flex-col justify-center items-center py-2 sm:px-6 ">
        {/* footer top */}
        <div className=" flex flex-col items-center justify-evenly px-4 py-4 sm:px-6 lg:px-8 lg:flex-row w-full gap-y-2">
          <h1 className="relative text-lg text-primary/80 font-semibold before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-onhover before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-primary">
            Quick Links
          </h1>

          {/* menus */}
          <div className="my-3">
            <ul className="flex flex-col justify-between gap-3 items-center text-sm font-semibold text-primary/80 md:flex-row md:gap-8">
              <li>
                <NavLink
                  to={"/"}
                  className="relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-onhover before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-primary"
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className="relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-onhover before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-primary"
                >
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className="relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-onhover before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-primaryr"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className="relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-onhover before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-primary"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* icons */}
          <div className="flex items-center gap-4 ">
            <div className=" border border-border/50 rounded-full px-2 py-2 hover:bg-onhover/10 cursor-pointer">
              <FaInstagram />
            </div>
            <div className=" border border-border/50 rounded-full px-2 py-2 hover:bg-onhover/10 cursor-pointer">
              <FaLinkedin />
            </div>
            <div className=" border border-border/50 rounded-full px-2 py-2 hover:bg-onhover/10 cursor-pointer">
              <FaTwitter />
            </div>
          </div>
        </div>

        {/* footer bottom */}

        <div className="w-full flex flex-col  items-center justify-between px-4 lg:px-0 md:flex-row py-4">
          {/* title */}
          <div className="title">
            <h1 className="text-primary font-bold text-2xl">MediHub</h1>
          </div>

          <div className=" mt-2 ">
            <p className="text-sm font-medium text-secondary">
              © 2023 DevUI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
