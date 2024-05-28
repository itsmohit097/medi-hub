import { NavLink } from "react-router-dom";
import React, { useState } from "react";

// react icons
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCalendarCheck, FaRegHeart } from "react-icons/fa";
import { LuBox } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";

function Navbar() {
  // state to manage drop down menu
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  //mouse events
  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  // Nav items array
  const navItems = [
    // { to: "/", label: "Home" },
    { to: "/alldoctors", label: "All Doctors" },
    { to: "/specialities", label: "Specialities" },
    { to: "/medicines", label: "Medicines" },
    { to: "/appointment", label: "Appointment" },
  ];

  const navLinkClass = ({ isActive }) =>
    `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-dark_theme ${
      isActive ? "text-dark_theme" : "text-main_theme"
    } `;

  const dropdownMenus = [
    { to: "/profile", label: "My Profile", icon: FaRegCircleUser },
    { to: "/appointments", label: "Appointments", icon: FaRegCalendarCheck },
    { to: "/wishlist", label: "Wishlist", icon: FaRegHeart },
    { to: "/order", label: "Orders", icon: LuBox },
    { to: "/logout", label: "Logout", icon: IoIosLogOut },
  ];

  const socialLinks = [
    {
      to: "https://github.com/itsmohit097/medi-hub",
      label: "github",
      icon: FaGithub,
    },
    {
      to: "https://www.linkedin.com/in/itsmohit097/",
      label: "linkedin",
      icon: FaLinkedinIn,
    },
    { to: "https://discord.gg/krQd2Fss", label: "discord", icon: FaDiscord },
  ];

  return (
    <div className={"w-full h-16 bg-light_theme/20  top-0 z-50 shadow-md"}>
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:px-6 md:px-4 px-3 py-1  h-full">
        {/* logo */}
        <div className="flex items-center gap-3">
          <NavLink to={"/"}>
            <h1 className="text-3xl text-dark_theme tracking-wide font-bold">
              MediHub
            </h1>
          </NavLink>
        </div>

        {/* Nav Menus */}
        <div className="hidden md:block">
          <ul className="flex justify-between gap-8 items-center">
            {navItems.map((navItem, index) => (
              <li key={index}>
                <NavLink to={navItem.to} className={navLinkClass}>
                  {navItem.label}
                </NavLink>
              </li>
            ))}
            <li
              className="relative hover:scale-105"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={"/login"}
                className="text-md font-semibold relative cursor-pointer rounded flex items-center border border-dark_theme text-dark_theme px-4 py-2 gap-2 max-w-[150px]"
              >
                <FaRegCircleUser className="text-dark_theme" />
                <span className="truncate">Login</span>
              </NavLink>

              {/* Dropdown Menus */}
              {isDropdownOpen && (
                <div
                  className="absolute left-0 mt-0 w-56 bg-light_theme border border-dark_theme rounded shadow-lg z-50"
                  onMouseEnter={handleMouseEnter}
                >
                  {/* Drop down menu items */}
                  {dropdownMenus.map((menu, index) => (
                    <NavLink
                      key={index}
                      to={menu.to}
                      className="flex items-center px-4 py-3 gap-2 text-sm font-medium text-dark_theme hover:bg-main_theme/10"
                    >
                      {menu.icon && (
                        <menu.icon className="text-dark_theme size-4" />
                      )}{" "}
                      {menu.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>

        <div className="hidden md:flex gap-3 items-center relative">
          <NavLink to={"/cartpage"}>
            <IoCartOutline className="text-dark_theme size-8 hidden md:block mr-1" />
            <div className="absolute bottom-4 left-4 border border-main_theme rounded-full cursor-pointer z-50 bg-main_theme/90 text-light_theme">
              <span className="px-2 py-2 text-xs font-medium">7</span>
            </div>
          </NavLink>

          {/* social icons */}
          {socialLinks.map((socialLink, index) => (
            <NavLink key={index} to={socialLink.to} target="_blank">
              {/* <div className=" hover:border border-text_grey rounded-full px-2 py-2 hover:hover:bg-text_grey/10 cursor-pointer"> */}
              <socialLink.icon className="text-dark_theme/90 size-5 hidden md:block hover:scale-110" />
              {/* </div> */}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
