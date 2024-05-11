import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import logo from "/logo.svg";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiMenu } from 'react-icons/bi'

const navLinks = [
  {
    path: '/',
    display: 'Home'
  },
  {
    path: '/alldoctors',
    display: 'All Doctors'
  },
  {
    path: '/appointment',
    display: 'Appointment'
  },
  {
    path: '/aboutus',
    display: 'About Us'
  },
  {
    path: '/login',
    display: 'Login'
  }
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null)

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true); 
    } else {
      setScrolled(false); 
    }
  };

  // sticky navbar on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

  return (
    <div
      className={`${scrolled
        ? "sticky top-0 delay-500 ease animate-[stickyNavbar fill-mode-forwards] " : ""} w-full h-[8vh]  bg-theme `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:px-6  px-3 py-3">
        {/* logo */}
        <Link to='/'>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="w-8 " />
            <h1 className="font-medium text-2xl text-text">MediHub</h1>
          </div>
        </Link>

        {/* nav menu */}
        <div className={`navigation md:flex ${scrolled ? 'hidden' : 'block'}`} ref={menuRef} onClick={toggleMenu}>
          <ul className="menu flex items-center gap-[2.7rem]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
                    }`
                  }
                >
                  {link.display}
                </NavLink>
              </li>

            ))}
          </ul>

        </div>
        <NavLink
          to={"/signup"}
          className="text-sm text-theme bg-text font-semibold relative cursor-pointer border rounded-3xl px-5 py-2 ml-16 md:ml-0 "
        >
          Sign Up
        </NavLink>


        {/* social icons */}
        <div className="flex gap-4 items-center">
          <NavLink
            to={
              "https://github.com/itsmohit097/mern_stack_hospital_management_system"
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
            <FaGithub className="text-text size-5 hidden md:block hover:scale-110" />
          </NavLink>
          <NavLink
            to={"https://www.linkedin.com/in/itsmohit097/"}
            target="_blank"
          >
            <FaLinkedinIn className="text-text size-5 hidden md:block hover:scale-110" />
          </NavLink>
        </div>

        {/* hamburger menu */}
        <span className='md:hidden' onClick={toggleMenu}>
          <BiMenu className='w-6 h-6 cursor-pointer text-white' />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
