import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import Books from './Pages/Books';
import Footer from './Components/Footer';
import AddBook from './Components/AddBook';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };
  return (
    <>
      <div className='flex justify-center text-3xl p-5 bg-gray-300 font-bold ease-in-out transform hover:scale-105'>
        <h1>Our Library The Book Heaven</h1>
      </div>
      <Navbar />
      <div className='d-flex justify-center items-center bg-slate-600'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/logIn' element={<LogIn />} />
          <Route path='/books' element={<Books />} />
          <Route path='/books' element={<AddBook books={books} addBook={addBook} />} />
          <Route path="/books" element={<AddBook addBook={addBook} />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
