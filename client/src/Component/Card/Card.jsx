import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Card.css";

function Card({ props }) {
  return (
    <div className="cards">
      <figure className="card">
        <img src={props.image} alt={props.title} />
        <figcaption>
          <h1>{props.name}</h1>
          <h2>{props.region}</h2>
          <Link to={`search/${props.id}`}>
            <button type="submit">Read More</button>
          </Link>
        </figcaption>
      </figure>
    </div>
  );
}

export default Card;
