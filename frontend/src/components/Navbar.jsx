// import { NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";

// import logo from "/logo.svg";
// import { FaDiscord } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   const handleScroll = () => {
//     const offset = window.scrollY;
//     console.log(offset);
//     if (offset > 200) {
//       setScrolled(false);
//     } else {
//       setScrolled(false);
//     }
//   };

//   // sticky navbar on scroll
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className={`${scrolled
//         ? "sticky top-0 delay-500 ease animate-[stickyNavbar fill-mode-forwards] " : ""} w-full h-[8vh]  bg-theme `}
//     >
//       <div className="flex items-center justify-between px-3 py-3 mx-auto max-w-7xl lg:px-6">
//         {/* logo */}
//         <div className="flex items-center gap-3">
//           <img src={logo} alt="" className="w-8 " />
//           <h1 className="text-2xl font-medium text-text">MediHub</h1>
//         </div>

//         {/* Nav Menus */}
//         <div className="hidden md:block">
//           <ul className="flex items-center justify-between gap-8">
//             <li>
//               <NavLink
//                 to={"/"}
//                 className={({ isActive }) =>
//                   `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
//                   }`
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to={"/alldoctors"}
//                 className={({ isActive }) =>
//                   `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
//                   }`
//                 }
//               >
//                 All Doctors
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to={"/appointment"}
//                 className={({ isActive }) =>
//                   `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
//                   }`
//                 }
//               >
//                 Appointment
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to={"/aboutus"}
//                 className={({ isActive }) =>
//                   `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
//                   }`
//                 }
//               >
//                 About Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to={"/login"}
//                 className={({ isActive }) =>
//                   `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
//                   }`
//                 }
//               >
//                 Login
//               </NavLink>
//             </li>
//             <li className="hover:scale-105">
//               <NavLink
//                 to={"/signup"}
//                 className="relative px-5 py-2 text-sm font-semibold border cursor-pointer text-theme bg-text rounded-3xl "
//               >
//                 Sign Up
//               </NavLink>
//             </li>
//           </ul>
//         </div>

//         {/* social icons */}
//         <div className="flex items-center gap-4">
//           <NavLink
//             to={
//               "https://github.com/itsmohit097/mern_stack_hospital_management_system"
//             }
//             target="_blank"
//           >
//             <FaDiscord className="hidden text-text size-5 md:block hover:scale-110" />
//           </NavLink>
//           <NavLink
//             to={
//               "https://github.com/itsmohit097/mern_stack_hospital_management_system"
//             }
//             target="_blank"
//           >
//             <FaGithub className="text-text size-5 hover:scale-110 " />
//           </NavLink>
//           <NavLink
//             to={"https://www.linkedin.com/in/itsmohit097/"}
//             target="_blank"
//           >
//             <FaLinkedinIn className="hidden text-text size-5 md:block hover:scale-110" />
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "/logo.svg";
import { FaBars, FaTimes} from "react-icons/fa";
 import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true); // Change to true when scrolled
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up listener
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className={`${
        scrolled
          ? "sticky top-0 delay-500 ease animate-[stickyNavbar_fill-mode-forwards]"
          : ""
      } w-full h-[8vh] bg-theme`}
    >
      <div className="flex items-center justify-between px-3 py-3 mx-auto max-w-7xl lg:px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="w-8" />
          <h1 className="text-2xl font-medium text-text">MediHub</h1>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu}
           className="items-center mt-2 text-text">
            {showMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Nav Menus for Larger Screens */}
        <div className="hidden md:block">
          <ul className="flex items-center justify-center gap-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${
                    isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alldoctors"
                className={({ isActive }) =>
                  `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${
                    isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                All Doctors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appointment"
                className={({ isActive }) =>
                  `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${
                    isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                Appointment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${
                    isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${
                    isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                Login
              </NavLink>
            </li>
            <li className="hover:scale-105">
              <NavLink
                to="/signup"
                className="relative px-5 py-2 text-sm font-semibold border cursor-pointer text-theme bg-text rounded-3xl hover:bg-theme hover:text-text"
              >
                Sign Up
              </NavLink>
            </li>
            <a href="https://github.com/itsmohit097/medi-hub"
            target="_blank"
            className="scale-125 hover:scale-150 text-text"
            >
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/itsmohit097/"
            target="_blank"
            className="scale-125 hover:scale-150 text-text"
            >
                <FaLinkedinIn />
            </a>

          </ul>
        </div>

        {/* Hamburger Menu for Smaller Screens */}
        <div
          className={`md:hidden fixed z-50 top-0 left-0 w-full h-full bg-theme transition-all duration-300 ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul
            className={`flex flex-col justify-center gap-8 items-center h-full pt-20 ${
              showMenu ? "animate-slideIn" : "animate-slideOut"
            }`}
          >
            <li>
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `text-lg font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${
                    isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alldoctors"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `text-lg font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${
                    isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                All Doctors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appointment"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `text-lg font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${
                    isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                Appointment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `text-lg font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${
                    isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
            <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${
                    isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                Login
              </NavLink>
            <NavLink
                to="/signup"
                className="relative px-5 py-2 text-sm font-semibold border cursor-pointer text-theme bg-text rounded-3xl hover:bg-theme hover:text-text"
              >
                Sign Up
              </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

