import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const validationErrors = {};

    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        validationErrors[field] = `${capitalizeFirstLetter(field)} is required`;
      }
    });

    if (formData.email && !isValidEmail(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (formData.password && !isValidPassword(formData.password)) {
      validationErrors.password = 'Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one digit';
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    return validationErrors;
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
      navigate('/login');
    }
  };

  return (
    <div className="flex h-screen bg-gray-300">
      <div className="w-2/3">
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center w-1/2">
        <div className="bg-gradient-to-r from-green-800 via-gray-600 to-gray-500 p-8 w-96 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-white mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            {Object.keys(formData).map((field) => (
              <div className="mb-4" key={field}>
                <label className="block text-white text-sm font-bold mb-2" htmlFor={field}>
                  {capitalizeFirstLetter(field)}
                </label>
                <input
                  name={field}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type={field.includes('password') ? 'password' : 'text'}
                  value={formData[field]}
                  onChange={handleChange}
                />
                {errors[field] && (
                  <p className="text-red-500 text-xs italic">{errors[field]}</p>
                )}
              </div>
            ))}
            <button
              className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out w-full"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <p className="text-gray-300 text-sm text-center mt-4">
            <Link to="/login">Already have an account? Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;