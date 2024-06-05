import React, { useState } from "react";
import { axios } from "../import-export/ImportExport";
import { toast } from "react-toastify";

const testimonials = [
  {
    profile: "John Doe",
    country: "USA",
    state: "California",
    review: "Loved the expirence at medi-hub, best health care system that make the user life eaiser ",
    picture: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
  },
  {
    profile: "Jane Smith",
    country: "Canada",
    state: "Ontario",
    review: "I love using medi-hub, it has made healthcare so much easier.",
    picture: "https://designimages.appypie.com/profilepicture/profilepicture-4-photography-portrait.jpg"
  },
  // Add more testimonials as needed
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [review, setReview] = useState("");
  const [picture, setPicture] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "/message/send",
          { email, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setEmail("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };


  const handleAssessment = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "/testimonial/add",
          { name, country, state, review, picture },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setName("");
          setProfile("");
          setCountry("");
          setState("");
          setReview("");
          setPicture("");
          setShowForm(false);
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-light_theme w-full text-center">
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center px-3 space-y-9 pt-8">
        {/* Title and Description */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
          <div className="col-span-1 md:col-span-4 text-left">
            <h3 className="text-lg lg:text-lg font-bold text-black/80 mb-6">
              Testimonial
            </h3>
            <h1 className="text-3xl xl:text-4xl font-bold text-black-700 rounded-full mb-6">
               What They Say?
            </h1>
            <p className="text-md lg:text-lg text-black/70 font-medium mb-4">
              Medi-Hub has got more than 100k positive ratings from our users
              around the world.<br /><br />
              Some of the Doctors and Paitient were greatly helped by the
              Medi-Hub.<br /><br />
              Are you too? Please give your assessment.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="mt-4 bg-white bg-opacity-50 border border-gray-300 text-black py-2 px-4 rounded-full hover:bg-opacity-100"
            >
              Write Your Assessment  &#8594;
            </button>
          </div>

          {/* Testimonial Cards */}
          <div className="col-span-1 md:col-span-8 text-left relative flex justify-center items-center">
            <div className="w-96 h-96 p-4 bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-md relative">
              <img src={testimonials[currentIndex].picture} alt={`${testimonials[currentIndex].profile} profile`} className="w-24 h-24 rounded-full mx-auto mb-4"/>
              <h4 className="font-bold text-center">{testimonials[currentIndex].profile}</h4>
              <p className="text-sm text-center mb-6">{testimonials[currentIndex].country}, {testimonials[currentIndex].state}</p>
              <p className="mt-2 text-center">{testimonials[currentIndex].review}</p>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <button onClick={handlePrev} className="bg-white bg-opacity-50 text-black rounded-full p-2 hover:bg-opacity-100">
                  &#8592;
                </button>
                <button onClick={handleNext} className="bg-white bg-opacity-50 text-black rounded-full p-2 hover:bg-opacity-100">
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form */}
        {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md w-full max-w-md mx-auto">
                <form onSubmit={handleAssessment} className="flex flex-col items-center space-y-4">
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                    className="p-2 border border-gray-300 rounded w-full"
                    />
                    <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Country"
                    required
                    className="p-2 border border-gray-300 rounded w-full"
                    />
                    <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="State"
                    required
                    className="p-2 border border-gray-300 rounded w-full"
                    />
                    <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Your Review"
                    required
                    className="p-2 border border-gray-300 rounded w-full"
                    ></textarea>
                    <input
                    type="file"
                    value={picture}
                    onChange={(e) => setPicture(e.target.value)}
                    placeholder="Profile Picture URL"
                    required
                    className="p-2 border border-gray-300 rounded w-full"
                    />
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Submit
                    </button>
                </form>
                </div>
            </div>
            )}
      </div>
    </div>
  );
}

export default Testimonial;
