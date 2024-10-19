import React from 'react';

function Header() {
    return (
        <header className="w-full h-screen flex flex-col justify-center items-center relative">
            <div
                className="absolute inset-1 bg-cover bg-center opacity-45"
                style={{ backgroundImage: "url('images/library.jpg')" }}
            ></div>
            <div className="relative z-10 bg-gradient-to-r from-green-800 via-gray-600 to-orange-300 rounded-tr-full rounded-br-full p-8 mb-4 w-full">
                <h1 className="text-4xl font-bold text-white text-center mb-2">Our Library The Book Heaven</h1>
                <p className="text-lg text-white text-justify  max-w-2xl">
                    Discover "The Book of Heaven," a unique library enriching minds with celestial knowledge, diverse collections, and a welcoming community atmosphere.
                </p>
            </div>
        </header>
    );
}

export default Header;