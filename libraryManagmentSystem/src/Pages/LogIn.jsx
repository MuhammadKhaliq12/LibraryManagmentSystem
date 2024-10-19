import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

const LogIn = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const { email, password } = formData;
        if (!email || !password) {
            return 'Please fill in all fields';
        }
        if (!isValidEmail(email)) {
            return 'Invalid email format';
        }
        if (password.length < 8) {
            return 'Password must be at least 8 characters long';
        }
        return '';
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }
        setError('');
        console.log('Form data is valid:', formData);
        navigate('/books');
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="flex flex-grow">
                <div className="w-3/4 p-4">
                    <Header />
                </div>
                <div className="flex items-center justify-center w-1/4 p-4">
                    <div className="bg-gradient-to-r from-green-800 via-gray-600 to-gray-500 p-8 w-full max-w-sm rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            {error && <div className="mb-4 text-red-500">{error}</div>}
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out w-full"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;