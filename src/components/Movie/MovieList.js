import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import MovieDesign from "./MovieDesign";
import classes from "./MovieList.module.css";

const MovieList = (props) => {
  return (
    <>
      {props.moviesLand.map((movie, index) => (
        <div className={classes.card} key={index}>
          <a href="/trailer">
            <img src={movie.Poster} alt="Movie" />
          </a>
          <div>
            <p>
              {movie.Title}({movie.Year})
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
export default MovieList;
