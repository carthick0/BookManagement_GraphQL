import React from 'react';
import './App.css';
import AddBookForm from './components/AddBook';
import BookList from './components/BookList';
import SingleBookSearch from './components/SingleBook';
import AddAuthor from './components/AddAuthour';

function App() {
  return (
   <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto space-y-10">
        <AddBookForm />
        <BookList />
        <SingleBookSearch />
        <AddAuthor/>
      </div>
    </div>
  );
}

export default App;
