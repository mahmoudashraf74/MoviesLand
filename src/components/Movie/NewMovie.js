import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

const NewMovie = () => {
  const [newMovies, setNewMovies] = useState([]);

  const getNewMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?apikey=ae24d018&s=movie&y=2020`;

    const response = await fetch(url);
    const responseJson = await response.json();
    setNewMovies(responseJson.Search);
  };
  useEffect(() => {
    getNewMovieRequest();
  }, []);
  return <MovieList moviesLand={newMovies} key={newMovies} />;
};
export default NewMovie;
