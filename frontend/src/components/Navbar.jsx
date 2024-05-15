import { NavLink } from "react-router-dom";

// react icons
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function Navbar() {

  return (
    <div
      className={"w-full h-[8vh]  bg-main_theme "}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:px-6  px-3 py-3">
        {/* logo */}
        <div className="flex items-center gap-3">
        <h1 className="font-medium text-2xl text-text"><NavLink
                to={"/"}
              >
                MEDIHUB
              </NavLink></h1>
        </div>

        {/* Nav Menus */}
        <div className="hidden md:block">
          <ul className="flex justify-between gap-8 items-center">
            
            <li>
              <NavLink
                to={"/alldoctors"}
                className={({ isActive }) =>
                  `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/medicines"}
                className={({ isActive }) =>
                  `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
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
                  `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                Appointments
              </NavLink>
            </li>
            <li className="border border-gray-300 rounded-md p-1">
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                <FontAwesomeIcon icon={faCircleUser} size="lg" className="icon-spacing"/>Login
              </NavLink>
            </li>
            
          </ul>
        </div>

        {/* social icons */}
        <div className="flex gap-4 items-center">
        <NavLink
            to={
              ""
            }
            target="_blank"
          >
        <FontAwesomeIcon icon={faCartShopping} size="2x" className="mr-4" style={{color:"white"}}/>
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
