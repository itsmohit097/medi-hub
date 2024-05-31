import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from "/istockphoto-1073154998-612x612.jpg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const response = await axios.post('http://localhost:3000/api/v1/user/login', {
        email,
        password,
      });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        toast.success("Login successful");
        // Redirect to dashboard or desired page
        navigate('/dashboard');
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error("Login failed");
    }
  };


  return (
    <div className='mt-10'>
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
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleInputChange}
                id='email'
                required
                className='border border-black rounded-md m-2 p-2'
              />
              <label htmlFor='password'>Password:</label>
              <div className='relative'>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleInputChange}
                  id='password'
                  required
                  className='border border-black rounded-md m-2 p-2 w-[98%]'
                />
              </div>
              <button className='g-recaptcha bg-main_theme text-white font-bold py-2 px-4 rounded-md mt-4' data-sitekey="6LdzteopAAAAAMgve-hYPd24DzNZlEmKkfluSHF5" data-action='login'>
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
    </div>  
  );
}

export default Login;
