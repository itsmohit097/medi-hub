import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backgroundImage from "/istockphoto-1073154998-612x612.jpg";
import showEye from "../../public/showEye.svg";
import hideEye from "../../public/hideEye.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheck } from "@fortawesome/free-solid-svg-icons";

function Signup() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [cpasswordVisible, setCPasswordVisible] = useState(false);
    const [strength, setStrength] = useState(0);
    const [formData, setFormData] = useState({
        username: "",
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

  // Function to handle form submission
  const handleSignup = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const { password, cpassword } = formData;
    if (password !== cpassword) {
      // Show error toast if passwords do not match
      toast.error('Passwords do not match!'); 
      return;
    }
    // Continue with signup logic if passwords match
    console.log("form data", formData);
    toast.success('Form submitted successfully!'); 
  };
    const handleSignup = (e) => {
        e.preventDefault();
        const { password, cpassword } = formData;
        if (password !== cpassword) {
            toast.error("Passwords do not match!");
            return;
        }
        toast.success("Form submitted successfully!");
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
            className="p-5 flex flex-col items-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="bg-white bg-opacity-70 shadow-lg border border-black rounded-md p-5 w-full md:w-[50%] m-4">
                <h1 className="font-bold text-3xl text-center">Signup</h1>
                <form
                    className="m-2 md:m-5 flex flex-col"
                    onSubmit={handleSignup}
                >
                    <div className="flex flex-col m-2">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleInputChange}
                            id="username"
                            className="border border-black rounded-md m-2 p-2"
                        />
                        <label htmlFor="password">Password:</label>
                        <div className="relative">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                id="password"
                                className="border border-black rounded-md m-2 p-2 w-[98%]"
                            />
                            <img
                                className="absolute w-[30px] top-3 right-5 cursor-pointer"
                                title={
                                    passwordVisible
                                        ? "Hide password"
                                        : "Show password"
                                }
                                src={passwordVisible ? hideEye : showEye}
                                onClick={() =>
                                    setPasswordVisible(
                                        (prevState) => !prevState
                                    )
                                }
                            />
                        </div>
                        <div className="m-2 h-[5px]" style={{ backgroundColor: '#f1f1f1', height: '10px'}}>
                            <div
                                id="password-strength"
                                className={`h-full ${strength < 2 ? 'bg-red-600' : strength === 2 ? 'bg-yellow-400' : 'bg-green-600'}`}
                                style={{ width: `${strength * 25}%`, borderRadius:'10px' }}
                            >
								</div>
							</div>

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
                        <label htmlFor="cpassword">Confirm Password:</label>
                        <div className="relative">
                            <input
                                type={cpasswordVisible ? "text" : "password"}
                                name="cpassword"
                                placeholder="Confirm Password"
                                value={formData.cpassword}
                                onChange={handleInputChange}
                                id="cpassword"
                                className="border border-black rounded-md m-2 p-2 w-[98%]"
                            />
                            <img
                                className="absolute w-[30px] top-3 right-5 cursor-pointer"
                                title={
                                    cpasswordVisible
                                        ? "Hide password"
                                        : "Show password"
                                }
                                src={cpasswordVisible ? hideEye : showEye}
                                onClick={() =>
                                    setCPasswordVisible(
                                        (prevState) => !prevState
                                    )
                                }
                            />
                        </div>
                        <button className="bg-main_theme text-white font-bold py-2 px-4 rounded-md mt-4">
                            Create New Account
                        </button>
                        <Link to="/login">
                            <p className="my-3 p-1 md:p-0">
                                Already have an account?
                            </p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
