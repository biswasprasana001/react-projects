import React, { useState } from "react";

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="title-info">
          <h4>{name}</h4>
          <p className="tour-price">${price}</p>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)} . . .`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? `show less` : `show more`}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
