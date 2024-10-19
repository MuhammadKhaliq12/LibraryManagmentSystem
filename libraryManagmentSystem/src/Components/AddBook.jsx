import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        genre: '',
        year: '',
    });
    const navigate = useNavigate();

    const enteredData = (e) => {
        const { name, value } = e.target;
        setBookData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submitData = (e) => {
        e.preventDefault();
        const newBook = {
            ...bookData,
            year: parseInt(bookData.year, 10), 
        };
        addBook(newBook);
        navigate('/books'); 
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Add a New Book</h2>
                <form onSubmit={submitData} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={bookData.title}
                            onChange={enteredData}
                            required
                            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Author</label>
                        <input
                            type="text"
                            name="author"
                            value={bookData.author}
                            onChange={enteredData}
                            required
                            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Genre</label>
                        <input
                            type="text"
                            name="genre"
                            value={bookData.genre}
                            onChange={enteredData}
                            required
                            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Year of Publication</label>
                        <input
                            type="number"
                            name="year"
                            value={bookData.year}
                            onChange={enteredData}
                            required
                            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-800 to-orange-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out hover:from-orange-500 hover:to-orange-700"
                    >
                        Add Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;