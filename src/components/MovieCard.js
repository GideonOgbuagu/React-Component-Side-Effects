import React from "react";

const MovieCard = (props) => {
  console.log(props)
  return (
    <div class="film-list">
      <h2> Film title: {props.film.title}</h2>
      <p> Description: {props.film.description}</p>
      <div className="bottom">
        <p> Director: {props.film.director}</p>
        <p> Release Date: {props.film.release_date}</p>
      </div>
    </div>
  );
};
export default MovieCard;
