import { useRef } from "react";
import "./SearchBar.css";

export default function SearchBar({ update }) {
  const googleBooksUrl = "https://www.googleapis.com/books/v1/volumes?q=";
  const inputRef = useRef(null);

  //search function to handle fetching and returning Google Books API information
  async function updateSearch() {
    const request = new Request(googleBooksUrl + inputRef.current.value, {
      method: "GET",
      dataType: "json",
    });

    //fetches Google book API info
    try {
      const response = await fetch(request);
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      const json = await response.json();
      update(json.items);
    } catch (error) {
      console.log(
        "There has been a problem with the fetch operation: ",
        error.message
      );
    }
  }

  //renders search bar and button
  return (
    <div className="searchBarArea">
      <input
        className="searchBar"
        type="text"
        placeholder="Search"
        ref={inputRef}
      />
      <button className="button" onClick={updateSearch}>
        Search
      </button>
    </div>
  );
}
