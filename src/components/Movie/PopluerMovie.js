import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

const PopluarMovie = () => {
    const [popular, setPopular] = useState([]);

    const getMovieRequest = async () => {
        const url = `http://www.omdbapi.com/?apikey=ae24d018&s=movie`;

        const response = await fetch(url);
        const responseJson = await response.json();
        setPopular(responseJson.Search);
    };
    useEffect(() => {
        getMovieRequest();
    }, []);

    return (
        <>
            <MovieList moviesLand={popular} />
        </>
    );
};
export default PopluarMovie;
