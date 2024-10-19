import React from 'react';

const books = [
    {
        title: 'The Reluctant Fundamentalist',
        author: 'Mohsin Hamid',
        genre: 'Fiction',
        year: 2007,
        image: 'images/book1.jpg',
        description: 'A suspenseful story of a young Pakistani man in America.'
    },
    {
        title: 'Moth Smoke',
        author: 'Mohsin Hamid',
        genre: 'Fiction',
        year: 2000,
        image: 'images/book2.jpg',
        description: 'A tale about love, betrayal, and the clash of cultures in Lahore.'
    },
    {
        title: 'The Kite Runner',
        author: 'Khaled Hosseini',
        genre: 'Fiction',
        year: 2003,
        image: 'images/book3.jpg',
        description: 'An emotional story of friendship and redemption set in Afghanistan.'
    },
    {
        title: 'Burnt Shadows',
        author: 'Kamila Shamsie',
        genre: 'Historical Fiction',
        year: 2009,
        image: 'images/book4.jpg',
        description: 'A powerful narrative spanning across continents and decades.'
    },
    {
        title: 'A Case of Exploding Mangoes',
        author: 'Mohammed Hanif',
        genre: 'Satire',
        year: 2008,
        image: 'images/book5.jpg',
        description: 'A satirical take on the events leading to the death of General Zia.'
    },
];

function BookCards() {
    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
                        <div className="p-4 bg-gray-100">
                            <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600">{book.title}</h3>
                            <p className="text-gray-600">{book.author}</p>
                            <p className="text-gray-500">{book.genre} | {book.year}</p>
                            <p className="mt-2 text-gray-700">{book.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookCards;