import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backgroundImage from "/istockphoto-1073154998-612x612.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheck } from "@fortawesome/free-solid-svg-icons";

function Signup() {
    const [strength, setStrength] = useState(0);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        address: "",
        phone: "",
        email: "",
        gender: "",
        role: "",
        password: "",
        cpassword: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { password, cpassword,...data } = formData;
        if (password !== cpassword) {
            toast.error("Passwords do not match!");
            return;
        }
        console.log("Form data", formData);
        toast.success("Form submitted successfully!");

        try {
            const response = await fetch('http://localhost:3000/api/v1/user/patient/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
        
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
        
            const data = await response.json();
            console.log(data); // Handle response data
          } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
          }

    };

    useEffect(() => {
        checkStrength(formData.password);
    }, [formData.password]);

    const checkStrength = (password) => {
        let strength = 0;

        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
            strength += 1;
        }
        if (password.match(/([0-9])/)) {
            strength += 1;
        }
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
            strength += 1;
        }
        if (password.length > 7) {
            strength += 1;
        }

        setStrength(strength);
    };

    return (
        <div
            className="p-5 mt-10 flex flex-col items-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="bg-white bg-opacity-70 shadow-lg border border-black rounded-md p-5 w-full md:w-[80%] lg:w-[60%] m-4">
                <h1 className="font-bold text-3xl text-center">Signup</h1>
                <form
                    className="m-2 md:m-5 flex flex-col"
                    onSubmit={handleSignup}
                >
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 px-2">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                id="firstName"
                                required
                                className="border border-black rounded-md m-2 p-2 w-full"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                id="lastName"
                                required
                                className="border border-black rounded-md m-2 p-2 w-full"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <label htmlFor="dob">Date of Birth:</label>
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleInputChange}
                                id="dob"
                                required
                                className="border border-black rounded-md m-2 p-2 w-full"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleInputChange}
                                id="address"
                                required
                                className="border border-black rounded-md m-2 p-2 w-full"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <label htmlFor="phone">Phone Number:</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleInputChange}
                                id="phone"
                                required
                                className="border border-black rounded-md m-2 p-2 w-full"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                id="email"
                                required
                                className="border border-black rounded-md m-2 p-2 w-full"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <label htmlFor="gender">Gender:</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                id="gender"
                                required
                                className="border border-black rounded-md m-2 p-2 w-full"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <label htmlFor="role">Role:</label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleInputChange}
                                id="role"
                                required
                                className="border border-black rounded-md m-2 p-2 w-full"
                            >
                                <option value="">Select Role</option>
                                <option value="Admin">Admin</option>
                                <option value="Patient">Patient</option>
                                <option value="Doctor">Doctor</option>
                            </select>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                id="password"
                                required
                                className="border border-black rounded-md m-2 p-2 w-full"
                            />
                        </div>
                        
                        <div className="w-full md:w-1/2 px-2">
                            <label htmlFor="cpassword">Confirm Password:</label>
                            <input
                                type="password"
                                name="cpassword"
                                placeholder="Confirm Password"
                                value={formData.cpassword}
                                onChange={handleInputChange}
                                id="cpassword"
                                required
                                className="border border-black rounded-md m-2 p-2 w-full"
                            />
                        </div>


                        <div className="m-2 flex flex-col-reverse md:flex-row-reverse items-center">
                            <div className="h-[5px]" style={{ backgroundColor: '#f1f1f1', height: '10px'}}>
                                <div
                                    id="password-strength"
                                    className={`h-full ${strength < 2 ? 'bg-red-600' : strength === 2 ? 'bg-yellow-400' : 'bg-green-600'}`}
                                    style={{ width: `${strength * 25}%`, borderRadius:'10px' }}
                                />
                            </div>
                            <div className="w-full pl-2">
                                <ul className="list-none">
                                    <li className="text-lg">
                                        <span className="low-upper-case">
                                            <FontAwesomeIcon
                                                icon={
                                                    /([a-z].*[A-Z])|([A-Z].*[a-z])/.test(
                                                        formData.password
                                                    )
                                                        ? faCheck
                                                        : faCircle
                                                }
                                                className={
                                                    /([a-z].*[A-Z])|([A-Z].*[a-z])/.test(
                                                        formData.password
                                                    )
                                                        ? "text-green-600"
                                                        : "text-gray-400"
                                                }
                                            />
                                            &nbsp;Lowercase &amp; Uppercase
                                        </span>
                                    </li>
                                    <li className="text-lg">
                                        <span className="one-number">
                                            <FontAwesomeIcon
                                                icon={
                                                    /([0-9])/.test(formData.password)
                                                        ? faCheck
                                                        : faCircle
                                                }
                                                className={
                                                    /([0-9])/.test(formData.password)
                                                        ? "text-green-600"
                                                        : "text-gray-400"
                                                }
                                            />
                                            &nbsp;Number (0-9)
                                        </span>
                                    </li>
                                    <li className="text-lg">
                                        <span className="one-special-char">
                                            <FontAwesomeIcon
                                                icon={
                                                    /([!,%,&,@,#,$,^,*,?,_,~])/.test(
                                                        formData.password
                                                    )
                                                        ? faCheck
                                                        : faCircle
                                                }
                                                className={
                                                    /([!,%,&,@,#,$,^,*,?,_,~])/.test(
                                                        formData.password
                                                    )
                                                        ? "text-green-600"
                                                        : "text-gray-400"
                                                }
                                            />
                                            &nbsp;Special Character (!@#$%^&*)
                                        </span>
                                    </li>
                                    <li className="text-lg">
                                        <span className="eight-character">
                                            <FontAwesomeIcon
                                                icon={
                                                    formData.password.length > 7
                                                        ? faCheck
                                                        : faCircle
                                                }
                                                className={
                                                    formData.password.length > 7
                                                        ? "text-green-600"
                                                        : "text-gray-400"
                                                }
                                            />
                                            &nbsp;At least 8 Characters
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <button className="bg-main_theme text-white font-bold py-2 px-4 rounded-md mt-4">
                        Create New Account
                    </button>
                    <Link to="/login">
                        <p className="my-3 p-1 md:p-0">
                            Already have an account?
                        </p>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
