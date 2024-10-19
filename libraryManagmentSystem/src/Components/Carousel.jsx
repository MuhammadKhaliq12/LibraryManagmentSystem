import React, { useState } from 'react';

const carouselImages = [
    {
        src: 'images/carousel1.jpg',
        text: 'Explore the World of Literature!',
    },
    {
        src: 'images/carousel2.jpg',
        text: 'Dive into Pakistani Stories!',
    },
    {
        src: 'images/carousel3.jpg',
        text: 'Discover New Authors!',
    },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / carouselImages.length)}%)` }}
            >
                {carouselImages.map((image, index) => (
                    <div key={index} className="w-full h-64 flex-shrink-0 relative">
                        <img
                            src={image.src}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <h2 className="text-white text-3xl font-bold text-center">{image.text}</h2>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
            >
                &#10095;
            </button>
        </div>
    );
}

export default Carousel;