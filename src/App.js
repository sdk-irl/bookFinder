import "./App.css";
import { useState } from "react";
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";

export default function App() {
  const [books, setBooks] = useState([]);
  
  function updateResults(books) {
    setBooks(books);
  }

  //renders header, instructions, SearchBar component, and results
  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Finder</h1>
      </header>
      <p className="searchText">
        Search for a book by title, author, or subject.
      </p>
      <SearchBar update={updateResults} />
      <div className="bookResults">
        {books.map((book, index) => {
          return <BookCard key={index} bookData={book.volumeInfo} />;
        })}
      </div>
    </div>
  );
}
