import React from "react";
import { axios } from "../import-export/ImportExport";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

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
      const res = await axios.post(
        "/message/send",
        { email, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">MediHub</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            MediHub is a web-based platform facilitating seamless management of
            healthcare services, including appointments, patient records, and
            doctor interactions.
          </p>
          <div className="flex mt-4">
            <a href="https://www.instagram.com/itsmohit097/" target="_blank" className="text-gray-500 hover:text-gray-800">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/itsmohit097/" target="_blank" className="ml-3 text-gray-500 hover:text-gray-800">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/itsmohit097/" target="_blank" className="ml-3 text-gray-500 hover:text-gray-800">
              <FaXTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Quick Links
            </h2>
            <nav className="list-none inline flex-block px-1 p-2 m-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </nav>
          </div>
          
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Contact Us
            </h2>
            <form onSubmit={handleMessage} className="grid gap-y-5">
              <div className="relative flex flex-col justify-left space-y-3">
                <label htmlFor="email" className="text-md font-normal">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3 py-3 rounded-md grow"
                />
              </div>
              <div className="relative flex flex-col justify-left space-y-3">
                <label htmlFor="message" className="text-md font-normal">
                  Message
                </label>
                <textarea
                  rows={7}
                  placeholder="Write Your Message Here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="px-3 py-3 rounded-md grow"
                />
              </div>
              <button type="submit" className="grow bg-indigo-500 text-white py-3 rounded-md">
                Send Message
              </button>
            </form>
          </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Mohit Kumar. All rights reserved.
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
