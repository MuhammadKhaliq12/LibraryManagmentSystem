import React from 'react'
import BookTable from '../Components/BookTable'
import AddBook from '../Components/AddBook';


function Books() {
    return (
        <div className='bg-gray-300 min-w-full p-11'>
            <BookTable />
            <AddBook />
        </div>
    );
}

export default Books;