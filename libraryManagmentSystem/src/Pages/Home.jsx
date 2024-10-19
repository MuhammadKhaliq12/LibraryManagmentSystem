import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Components/Carousel';
import BookCards from '../Components/BookCards';

function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-gray-300 min-w-full">
        <div className="w-full md:w-3/4 p-4">
          <Carousel />
        </div>
        <div className="w-full md:w-1/4 flex items-center justify-center p-4">
          <Link
            to="/signUp"
            className="bg-gradient-to-r from-green-800 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-bold py-2 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Click here to Sign-up
          </Link>
        </div>

      </div>
      <div className='bg-gray-300'>
        <h1 className="text-4xl font-bold text-gray text-center mb-2 py-3 ">Most Popular Books Here</h1>
        <BookCards />
      </div>
    </div>
  );
}

export default Home;