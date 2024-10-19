import React from 'react';
import { useState } from 'react';

const books = [
    {
        title: 'The Reluctant Fundamentalist',
        author: 'Mohsin Hamid',
        genre: 'Fiction',
        year: 2007,
    },
    {
        title: 'Moth Smoke',
        author: 'Mohsin Hamid',
        genre: 'Fiction',
        year: 2000,
    },
    {
        title: 'The Kite Runner',
        author: 'Khaled Hosseini',
        genre: 'Fiction',
        year: 2003,
    },
    {
        title: 'Burnt Shadows',
        author: 'Kamila Shamsie',
        genre: 'Historical Fiction',
        year: 2009,
    },
    {
        title: 'A Case of Exploding Mangoes',
        author: 'Mohammed Hanif',
        genre: 'Satire',
        year: 2008,
    },
];

const BookTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState({ genre: '', author: '', year: '' });

    // Filter books based on search input and selected filters
    const getFilteredBooks = () => {
        return books.filter((book) => {
            const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesGenre = filter.genre ? book.genre === filter.genre : true;
            const matchesAuthor = filter.author ? book.author === filter.author : true;
            const matchesYear = filter.year ? book.year === parseInt(filter.year, 10) : true;

            return matchesSearch && matchesGenre && matchesAuthor && matchesYear;
        });
    };

    const filteredBooks = getFilteredBooks();

    return (
        <div className="container mx-auto bg-gray-100 rounded-lg shadow-lg p-7">
            <h2 className="text-2xl font-bold text-center mb-4">Books List</h2>
            <div className="flex justify-center mb-4">
                <input
                    type="text"
                    placeholder="Search for a book..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border rounded-lg px-4 py-2 w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>
            <div className="flex justify-between mb-4">
                <select
                    onChange={(e) => setFilter({ ...filter, genre: e.target.value })}
                    className="border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <option value="">All Genres</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Historical Fiction">Historical Fiction</option>
                    <option value="Satire">Satire</option>
                </select>
                <select
                    onChange={(e) => setFilter({ ...filter, author: e.target.value })}
                    className="border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <option value="">All Authors</option>
                    <option value="Mohsin Hamid">Mohsin Hamid</option>
                    <option value="Khaled Hosseini">Khaled Hosseini</option>
                    <option value="Kamila Shamsie">Kamila Shamsie</option>
                    <option value="Mohammed Hanif">Mohammed Hanif</option>
                </select>
                <select
                    onChange={(e) => setFilter({ ...filter, year: e.target.value })}
                    className="border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <option value="">All Years</option>
                    <option value="2000">2000</option>
                    <option value="2003">2003</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                </select>
            </div>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="py-2 px-4 border-b">Title</th>
                        <th className="py-2 px-4 border-b">Author</th>
                        <th className="py-2 px-4 border-b">Genre</th>
                        <th className="py-2 px-4 border-b">Year</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{book.title}</td>
                                <td className="py-2 px-4 border-b">{book.author}</td>
                                <td className="py-2 px-4 border-b">{book.genre}</td>
                                <td className="py-2 px-4 border-b">{book.year}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="py-2 px-4 text-center">No books found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default BookTable;