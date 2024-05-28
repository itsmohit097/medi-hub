import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import backgroundImage from "/istockphoto-1073154998-612x612.jpg"; // Import your background image
import { toast } from 'react-toastify'; // Import toast from react-toastify
import showEye from "../../public/showEye.svg";
import hideEye from "../../public/hideEye.svg";
function Login() {
  const [password, setPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    console.log(e.target.value); // Log the input value
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the state directly with the new value
    }));
  };
  
  // Function to handle form submission (login)
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    toast.success("Login successful"); // Show success toast
  };

  return (
    <>
      <Helmet>
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </Helmet>
      <div
        className='p-5 flex flex-col items-center'
        style={{
          backgroundImage:`url(${backgroundImage})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          backgroundPosition:'center',
        }}
      >
        <div className='bg-white bg-opacity-70 shadow-lg border border-black rounded-md p-5 w-full md:w-[50%] m-4'>
          <h1 className='font-bold text-3xl text-center'>Login</h1>
          <form className='m-2 md:m-5 flex flex-col' id="login-form" onSubmit={handleLogin}>
            <div className='flex flex-col m-2'>
              <label htmlFor='username'>Username:</label>
              <input
                type='text'
                name='username'
                placeholder='Username'
                value={formData.username}
                onChange={handleInputChange}
                id='username'
                className='border border-black rounded-md m-2 p-2'
              />
              <label htmlFor='password'>Password:</label>
              <div className='relative'>
              <input
                type={password ? "text" : "password"}
                name='password'
                placeholder='Password'
                value={formData.password}
                onChange={handleInputChange}
                id='password'
                className='border border-black rounded-md m-2 p-2 w-[98%]'
              />
              <img
                className="absolute w-[30px] top-3 right-5"
                title={
                    password ? "Hide password" : "Show password"
                }
                src={password ? hideEye : showEye}
                onClick={() =>
                    setPassword((prevState) => !prevState)
                }
            />
        </div>
              <button className='g-recaptcha bg-main_theme text-white font-bold py-2 px-4 rounded-md mt-4' data-sitekey="6LdzteopAAAAAMgve-hYPd24DzNZlEmKkfluSHF5" data-action='submit' data-callback='onSubmit'>
                Login to MediHub
              </button>
            </div>
          </form>
          <div className='text-sm md:text-lg md:flex items-center justify-between m-2'>
            <Link to='/signup'>
              <p className='p-1 md:p-0'>Don't have an account?</p>
            </Link>
            <Link to='/'>
              <p className='p-1 md:p-0'>Forgot Password?</p>
            </Link>
          </div>
        </div>
      </div>
    </>  
  );
}

export default Login;
