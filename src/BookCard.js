import React from "react";
import "./BookCard.css";

export default function BookCard({ bookData }) {
  //ternary operators to handle no data returned for thumbnails and authors and to join the authors array
  const thumbnail = bookData.imageLinks
    ? bookData.imageLinks.smallThumbnail
    : null;
  const authors = bookData.authors ? bookData.authors.join() : "None";

  //renders book card component with image, title, pub, author(s), and link to more info
  return (
    <div className="bookCard">
      <div className="imageContainer">
        <img
          className="bookImage"
          src={thumbnail}
          alt={"Cover for " + bookData.title}
        ></img>
      </div>
      <div className="bookInfo">
        <div className="title">{bookData.title}</div>
        <div className="authors">{authors}</div>
        <div className="publisher">{bookData.publisher}</div>
        <a href={bookData.infoLink}>More info</a>
      </div>
    </div>
  );
}
