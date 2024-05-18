import React from "react";
import { axios } from "../import-export/ImportExport";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
// icons
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  const navLinks = [
    { path: "/", display: "Home" },
    { path: "/aboutus", display: "About Us" },
    { path: "/privacypolicy", display: "Privacy Policy" },
    { path: "/termsandconditions", display: "Terms and Conditions" },
  ];

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/message/send", { email, message }, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
      });
      toast.success(res.data.message);
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-light_theme text-black py-12">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Title */}
          <div>
            <h1 className="text-lg lg:text-xl font-bold mb-4">MediHub</h1>
            <p className="text-md lg:text-lg font-medium mb-4">
              MediHub is a web-based platform facilitating seamless management of healthcare services, including appointments, patient records, and doctor interactions.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/" target="_blank" className="hover:text-main_theme">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" className="hover:text-main_theme">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.twitter.com/" target="_blank" className="hover:text-main_theme">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          {/* Quick links */}
          <div>
            <h1 className="text-lg lg:text-xl font-semibold mb-4">Quick Links</h1>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path} className="hover:text-main_theme">
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact US */}
          <div>
            <h1 className="text-lg lg:text-xl font-semibold mb-4">Contact Us</h1>
            <form onSubmit={handleMessage} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-md font-normal mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-md font-normal mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <button type="submit" className="w-full bg-main_theme text-white py-2 rounded-md">Send Message</button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm lg:text-base font-medium">
            © {new Date().getFullYear()} Mohit kumar. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
