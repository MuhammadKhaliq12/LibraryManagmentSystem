import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';

function Navbar() {
    return (
        <div className="bg-gray-800 p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center text-white">
                <FaBook className="text-3xl mr-2" />
                <span className="text-lg font-bold">Book Heaven</span>
            </div>
            <ul className="flex flex-row gap-8 items-center">
                <Link to="/home">
                    <li className="text-white hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                        Home
                    </li>
                </Link>
                <Link to="/signUp">
                    <li className="text-white hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                        Sign-up
                    </li>
                </Link>
                <Link to="/logIn">
                    <li className="text-white hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                        LogIn
                    </li>
                </Link>
                <Link to="/books">
                    <li className="text-white hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                        Books
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;