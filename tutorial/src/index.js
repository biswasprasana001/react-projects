import React from "react";
import reactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}
const author = 'Morgan Housel';
const Book = () => {
  const title = 'The Psychology of Money';
  return (
    <article className='book'>
      <img
        className="image"
        src="https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{}</p>
    </article>
  );
};

reactDom.render(<BookList />, document.getElementById("root"));
