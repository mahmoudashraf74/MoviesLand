import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

const Series = (props) => {
    const [series, setSeries] = useState([]);

    const getMovieRequest = async () => {
        const url = `http://www.omdbapi.com/?apikey=ae24d018&s=series&Type=series`;

        const response = await fetch(url);
        const responseJson = await response.json();

        setSeries(responseJson.Search);
    };
    useEffect(() => {
        getMovieRequest();
    }, []);

    return (
        <>
            <MovieList moviesLand={series} />
        </>
    );
};
export default Series;
