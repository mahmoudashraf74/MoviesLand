import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

const TrendingMovie = () => {
  const [trending, setTrending] = useState([]);
  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?apikey=ae24d018&s=movie&Y=2021&Type=movie`;

    const response = await fetch(url);
    const responseJson = await response.json();
    setTrending(responseJson.Search);
  };
  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <>
      <MovieList moviesLand={trending} />;
    </>
  );
};
export default TrendingMovie;
