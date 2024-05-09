import { axios } from "../import-export/ImportExport.js";
import React, { useState } from "react";
import { toast } from 'react-toastify';


function GetInTouch() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "/message/send",
          { firstName, lastName, email, phone, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          console.log(res);
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className=" w-full px-2 ">
      <div className="py-12 max-w-7xl mx-auto flex flex-col items-center px-2 md:px-4">

        <h1 className=" my-12 text-2xl md:text-4xl font-bold tracking-tight text-primary text-center ">
          Get In Touch With Us
        </h1>
        <div className="md:grid grid-cols-2 gap-x-4 hidden">
          {/* contact form */}
          <form onSubmit={handleSubmit} className="w-full md:w-[500px] my-4 space-y-6 md:mx-auto lg:mx-0 lg:w-[400px] xl:w-[600px]">
            <div className="  flex flex-col w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
              <div className="hover:shadow-md flex flex-col gap-1.5 w-full">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="first_name"
                >
                  First Name
                </label>
                <input
                  className="hover:shadow-md flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black focus:ring-offset-gray-900"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="last_name"
                >
                  Last Name
                </label>
                <input
                  className="hover:shadow-md flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black focus:ring-offset-gray-900"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="hover:shadow-md flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black focus:ring-offset-gray-900"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="phone_number"
              >
                Phone number
              </label>
              <input
                className="hover:shadow-md flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black focus:ring-offset-gray-900"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="hover:shadow-md flex h-40 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black focus:ring-offset-gray-900"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Leave us a message"
                cols="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="hover:shadow-md w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Send Message
            </button>
          </form>
          <div className="my-4  ">
            <img
              alt="Contact us"
              className="hidden md:h-[600px] md:w-[500px] xl:w-[600px] xl:h-[700px] md: rounded-lg object-cover lg:block"
              src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=687&amp;h=800&amp;q=80"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default GetInTouch;
