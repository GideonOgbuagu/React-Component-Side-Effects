import React, {
  useState,
  useEffect
} from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

function MovieList() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://ghibliapi.herokuapp.com/films/"
      )
      .then(response => {
        console.log(response.data);
        setFilms(response.data);
      })
      .catch(error => {
        console.log(
          "the data was not returned",
          error
        );
      });
  }, []);
  return (
    <div className="film">
      {films.map(film => {
        return <MovieCard key={film.id} film={film}/>;
      })}
    </div>
  );
}
export default MovieList;
