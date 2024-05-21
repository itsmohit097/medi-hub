import { NavLink } from "react-router-dom";

// react icons
import { FaShoppingCart, FaDiscord, FaGithub, FaLinkedinIn, FaHospitalUser } from "react-icons/fa";

function Navbar() {

  return (
    <div
      className={"w-full h-[8vh]  bg-main_theme fixed top-0 z-50 shadow-md relative"}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:px-6  px-3 py-1">
        {/* logo */}
        <div className="flex items-center gap-3">
          <h1 className="font-medium text-3xl text-text">MEDIHUB</h1>
        </div>

        {/* Nav Menus */}
        <div className="hidden md:block">
          <ul className="flex justify-between gap-8 items-center">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `text-sm font-normal relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
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
                  `text-sm font-normal relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
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
                  `text-sm font-normal relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
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
                  `text-sm font-normal relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
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
                  `text-sm font-normal relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                Appointment
              </NavLink>
            </li>
            <li className="hover:scale-105">
              <NavLink
                to={"/login"}
                className="text-sm text-theme font-normal relative cursor-pointer rounded-md flex items-center border border-white text-white hover:bg-teal-700 px-5 py-1 gap-2"
              >
                <FaHospitalUser></FaHospitalUser>Login
              </NavLink>
            </li>
          </ul>
        </div>

        {/* social icons */}
        <div className="flex gap-4 items-center">
          <NavLink
            target="_blank"
          >
            <FaShoppingCart className="text-text size-5 hidden md:block hover:scale-110" />
          </NavLink>
          <NavLink
            to={
              "https://discord.gg/krQd2Fss"
            }
            target="_blank"
          >
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
