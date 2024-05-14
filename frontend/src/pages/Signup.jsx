import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import backgroundImage from "/istockphoto-1073154998-612x612.jpg"; // Import your background image

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    cpassword:'',
  });

  // Function to handle input changes
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
    toast.success('Form submitted successfully!'); 
  };

  return (
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
        <h1 className='font-bold text-3xl text-center'>Signup</h1>
        <form className='m-2 md:m-5 flex flex-col' onSubmit={handleSignup}>
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
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleInputChange}
              id='password'
              className='border border-black rounded-md m-2 p-2'
            />
            <label htmlFor='cpassword'>Confirm Password:</label>
            <input
              type='password'
              name='cpassword'
              placeholder='Confirm Password'
              value={formData.cpassword}
              onChange={handleInputChange}
              id='cpassword'
              className='border border-black rounded-md m-2 p-2'
            />
            <button className='bg-main_theme text-white font-bold py-2 px-4 rounded-md mt-4'>
              Create New Account
            </button>
            <Link to='/login'>
              <p className='my-3 p-1 md:p-0'>Already have an account?</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
