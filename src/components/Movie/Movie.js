import React, { useEffect, useState } from "react";
//import axios from "axios";
import Heading from "../../assist/UI/Heading";
import NewMovie from "./NewMovie";
import classes from "./Movie.module.css";
import Series from "./Series";
import PopluarMovie from "./PopluerMovie";
import "bootstrap/dist/css/bootstrap.min.css";
import TrendingMovie from "./TrendingMovie";
import SearchBox from "../Layout/SearchBox";
import MovieList from "./MovieList";
import { Container } from "react-bootstrap";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ae24d018`;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  console.log(setMovies);
  return (
    <Container>
      <div className="container-fluid movie-app" id="Movies">
        <div className="row d-flex align-items-center mt-5 mb-5" id="home">
          <Heading
            heading={
              <a className={classes.logo} href="#Movies">
                <span>Movies</span> <span>Land</span>
              </a>
            }
          />

          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className={classes.FirstRow}>
          <MovieList moviesLand={movies} />
        </div>

        <div className="row d-flex align-items-center mt-5 mb-5">
          <Heading heading="Trending Movies" />
        </div>
        <div className={classes.FirstRow}>
          <TrendingMovie trending={movies} />
        </div>

        <div className="row d-flex align-items-center mt-5 mb-5">
          <Heading heading="New Movies" />
        </div>

        <div className={classes.FirstRow}>
          <NewMovie newMovies={movies} />
        </div>

        <div className="row d-flex align-items-center mt-5 mb-5" id="series">
          <Heading heading="Top Series" />
        </div>

        <div className={classes.FirstRow}>
          <Series series={movies} />
        </div>
        <div
          className="row d-flex align-items-center mt-5 mb-5"
          id="New&popler"
        >
          <Heading heading="New & popler" />
        </div>

        <div className={classes.FirstRow}>
          <PopluarMovie popular={movies} />
        </div>
      </div>
    </Container>
  );
};
export default Movie;
