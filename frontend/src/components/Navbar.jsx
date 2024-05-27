import { NavLink } from "react-router-dom";
import React from 'react';
import mediHubLogo from '/Medihub-logo.png';

// react icons
import {
  FaShoppingCart,
  FaDiscord,
  FaGithub,
  FaLinkedinIn,
  FaHospitalUser,
  FaUser,
  FaCalendarCheck,
  FaHeart,
  FaShoppingBag,
  FaSignOutAlt,
} from "react-icons/fa";

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

  return (
    <div
      className={"w-full h-[13vh]  bg-main_theme fixed top-0 z-50 shadow-md relative"}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:px-6  px-3 py-1">
        {/* logo */}
        <div className="flex items-center gap-3">
        <img src={mediHubLogo} alt="MEDIHUB" className="h-16 w-auto" />
          <h1 className="font-medium text-2xl text-text">MEDIHUB</h1>
        </div>

        {/* Nav Menus */}
        <div className="hidden md:block">
          <ul className="flex justify-between gap-8 items-center">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `text-sm font-normal relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${
                    isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/alldoctors"}
                className={({ isActive }) =>
                  `text-sm font-normal relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${
                    isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                All Doctors
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/specialities"}
                className={({ isActive }) =>
                  `text-sm font-normal relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${
                    isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                Specialities
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/medicines"}
                className={({ isActive }) =>
                  `text-sm font-normal relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${
                    isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                Medicines
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/appointment"}
                className={({ isActive }) =>
                  `text-sm font-normal relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${
                    isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                Appointment
              </NavLink>
            </li>
            <li
              className="relative hover:scale-105"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={"/login"}
                className="text-sm text-theme font-normal relative cursor-pointer rounded-md flex items-center border border-white text-white hover:bg-teal-700 px-5 py-1 gap-2"
              >
                <FaHospitalUser></FaHospitalUser>Login
              </NavLink>
              {isDropdownOpen && (
                <div
                  className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                  onMouseEnter={handleMouseEnter}
                >
                  {/* Drop down menu items */}
                  <NavLink
                    to="/profile"
                    className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaUser className="mr-2" /> My Profile
                  </NavLink>
                  <NavLink
                    to="/appointments"
                    className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaCalendarCheck className="mr-2" /> Appointments
                  </NavLink>
                  <NavLink
                    to="/wishlist"
                    className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaHeart className="mr-2" /> Wishlist
                  </NavLink>
                  <NavLink
                    to="/order"
                    className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaShoppingBag className="mr-2" /> Order
                  </NavLink>
                  <NavLink
                    to="/logout"
                    className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaSignOutAlt className="mr-2" /> Logout
                  </NavLink>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* social icons */}
        <div className="flex gap-4 items-center">
          <NavLink target="_blank">
            <FaShoppingCart className="text-text size-5 hidden md:block hover:scale-110" />
          </NavLink>
          <NavLink to={"https://discord.gg/krQd2Fss"} target="_blank">
            <FaDiscord className="text-text size-5 hidden md:block hover:scale-110" />
          </NavLink>
          <NavLink
            to={
              "https://github.com/itsmohit097/mern_stack_hospital_management_system"
            }
            target="_blank"
          >
            <FaGithub className="text-text size-5 hover:scale-110 " />
          </NavLink>
          <NavLink
            to={"https://www.linkedin.com/in/itsmohit097/"}
            target="_blank"
          >
            <FaLinkedinIn className="text-text size-5 hidden md:block hover:scale-110" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
