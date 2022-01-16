import React from "react";
import reactDom from "react-dom";
import "./index.css";
import {books} from './books';
import Book from './book';

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

reactDom.render(<BookList />, document.getElementById("root"));
